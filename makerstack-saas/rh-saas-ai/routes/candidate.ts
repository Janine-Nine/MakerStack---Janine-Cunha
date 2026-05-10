import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export default async function (app: FastifyInstance) {
  app.post("/", async (req) => {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
      jobId: z.string(),
    });

    const data = schema.parse(req.body);

    return prisma.candidate.create({
      data,
    });
  });

  app.get("/:jobId", async (req: any) => {
    return prisma.candidate.findMany({
      where: { jobId: req.params.jobId },
    });
  });
}