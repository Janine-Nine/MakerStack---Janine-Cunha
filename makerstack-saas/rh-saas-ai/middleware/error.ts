import { FastifyReply, FastifyRequest } from "fastify";

export function errorHandler(
  error: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  console.error("🔥 ERROR:", error);

  if (error.validation) {
    return reply.status(400).send({
      error: "Erro de validação",
      details: error.validation,
    });
  }

  if (error.code === "P2002") {
    return reply.status(409).send({
      error: "Registro duplicado",
    });
  }

  return reply.status(500).send({
    error: "Erro interno do servidor",
  });
}