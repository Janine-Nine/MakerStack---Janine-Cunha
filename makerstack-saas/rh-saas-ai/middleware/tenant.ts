import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export async function tenantMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const auth = request.headers.authorization;

  if (!auth) {
    return reply.status(401).send({ error: "Token ausente" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    );

    // injeta no request
    request.user = {
      id: decoded.sub,
      companyId: decoded.companyId,
      role: decoded.role,
    };
  } catch (err) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}