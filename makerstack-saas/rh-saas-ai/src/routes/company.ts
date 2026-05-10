import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export default async function (app: FastifyInstance) {
  app.post("/", async (req) => {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const data = schema.parse(req.body);

    return prisma.company.create({
      data,
    });
  });

  app.get("/", async () => {
    return prisma.company.findMany();
  });
}