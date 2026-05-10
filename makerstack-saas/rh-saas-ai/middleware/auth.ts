import { FastifyRequest, FastifyReply } from "fastify";
import { verifyAccessToken } from "../utils/jwt";

export async function authMiddleware(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const auth = req.headers.authorization;

  if (!auth) {
    return reply.status(401).send({ error: "Token ausente" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded: any = verifyAccessToken(token);

    (req as any).user = decoded;

  } catch (err) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}