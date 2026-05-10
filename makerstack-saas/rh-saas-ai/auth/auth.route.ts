import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { PrismaClient } = pkg;
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export async function authRoutes(app: FastifyInstance) {
  // Login
  app.post<{ Body: LoginRequest }>("/auth/login", async (request, reply) => {
    try {
      const { email, password } = request.body;

      if (!email || !password) {
        return reply.status(400).send({ message: "Email e senha são obrigatórios" });
      }

      const user = await prisma.user.findUnique({
        where: { email },
        include: { company: true },
      });

      if (!user || !user.password) {
        return reply.status(401).send({ message: "Credenciais inválidas" });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return reply.status(401).send({ message: "Credenciais inválidas" });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email, companyId: user.companyId },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return reply.send({
        id: user.id,
        name: user.name,
        email: user.email,
        companyId: user.companyId,
        token,
      });
    } catch (error) {
      console.error("Login error:", error);
      return reply.status(500).send({ message: "Erro ao fazer login" });
    }
  });

  // Register
  app.post<{ Body: RegisterRequest }>("/auth/register", async (request, reply) => {
    try {
      const { name, email, password } = request.body;

      if (!name || !email || !password) {
        return reply.status(400).send({ message: "Todos os campos são obrigatórios" });
      }

      if (password.length < 6) {
        return reply.status(400).send({ message: "A senha deve ter pelo menos 6 caracteres" });
      }

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return reply.status(400).send({ message: "Email já cadastrado" });
      }

      // Create default company for the user
      const company = await prisma.company.create({
        data: {
          name: `${name}'s Company`,
          cnpj: "00000000000000",
        },
      });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          companyId: company.id,
        },
        include: { company: true },
      });

      const token = jwt.sign(
        { userId: user.id, email: user.email, companyId: user.companyId },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return reply.status(201).send({
        id: user.id,
        name: user.name,
        email: user.email,
        companyId: user.companyId,
        token,
      });
    } catch (error) {
      console.error("Register error:", error);
      return reply.status(500).send({ message: "Erro ao criar conta" });
    }
  });

  // Get current user
  app.get("/auth/me", async (request, reply) => {
    try {
      const authHeader = request.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({ message: "Token não fornecido" });
      }

      const token = authHeader.substring(7);

      const decoded = jwt.verify(token, JWT_SECRET) as {
        userId: string;
        email: string;
        companyId: string;
      };

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: { company: true },
      });

      if (!user) {
        return reply.status(404).send({ message: "Usuário não encontrado" });
      }

      return reply.send({
        id: user.id,
        name: user.name,
        email: user.email,
        companyId: user.companyId,
      });
    } catch (error) {
      console.error("Auth me error:", error);
      return reply.status(401).send({ message: "Token inválido" });
    }
  });

  // Refresh token
  app.post("/auth/refresh", async (request, reply) => {
    try {
      const authHeader = request.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({ message: "Token não fornecido" });
      }

      const token = authHeader.substring(7);

      try {
        jwt.verify(token, JWT_SECRET);
        return reply.send({ token }); // Token ainda válido
      } catch {
        const decoded = jwt.decode(token) as {
          userId: string;
          email: string;
          companyId: string;
        };

        if (!decoded) {
          return reply.status(401).send({ message: "Token inválido" });
        }

        const newToken = jwt.sign(
          {
            userId: decoded.userId,
            email: decoded.email,
            companyId: decoded.companyId,
          },
          JWT_SECRET,
          { expiresIn: "7d" }
        );

        return reply.send({ token: newToken });
      }
    } catch (error) {
      console.error("Refresh token error:", error);
      return reply.status(401).send({ message: "Erro ao renovar token" });
    }
  });
}
