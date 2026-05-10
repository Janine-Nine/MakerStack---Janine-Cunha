import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export async function authMiddleware(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return reply.status(401).send();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded;
  } catch {
    return reply.status(401).send();
  }
}