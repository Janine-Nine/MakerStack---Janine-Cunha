import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export default async function (app: FastifyInstance) {
  app.post("/", async (req, reply) => {
    const schema = z.object({
      name: z.string(),
      cnpj: z.string(),
    });

    const data = schema.parse(req.body);

    const company = await prisma.company.create({
      data,
    });

    return reply.send(company);
  });

  app.get("/", async () => {
    return prisma.company.findMany();
  });
}