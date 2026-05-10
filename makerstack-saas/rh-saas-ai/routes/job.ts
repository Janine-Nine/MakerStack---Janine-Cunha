import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export default async function (app: FastifyInstance) {
  app.post("/", async (req) => {
    const schema = z.object({
      title: z.string(),
      description: z.string().optional(),
      companyId: z.string(),
    });

    const data = schema.parse(req.body);

    return prisma.job.create({
      data,
    });
  });

  app.get("/:companyId", async (req: any) => {
    return prisma.job.findMany({
      where: { companyId: req.params.companyId },
      include: { candidates: true },
    });
  });
}