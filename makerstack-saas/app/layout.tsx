import "./globals.css";
import { AuthProvider } from "./providers";

export const metadata = {
  title: "Enviagora RH",
  description: "SaaS de RH Inteligente"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}