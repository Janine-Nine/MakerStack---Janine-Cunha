import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session }) {
      if (!session?.user?.email) {
        return session;
      }

      const dbUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      return {
        ...session,
        user: {
          ...session.user,
          id: dbUser?.id,
          companyId: dbUser?.companyId,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };