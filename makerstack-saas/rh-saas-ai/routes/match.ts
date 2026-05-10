import { FastifyInstance } from "fastify";
import { generateMatch } from "../services/match.service";

export default async function (app: FastifyInstance) {
  app.post("/:jobId", async (req: any) => {
    const { jobId } = req.params;

    return generateMatch(jobId);
  });
}