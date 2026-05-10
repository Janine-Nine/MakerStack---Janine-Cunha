import { prisma } from "../lib/prisma";
import { analyzeCandidate } from "./ai.service";

export async function generateMatch(jobId: string) {
  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: { candidates: true },
  });

  if (!job) throw new Error("Job não encontrado");

  const results = [];

  for (const candidate of job.candidates) {
    const ai = await analyzeCandidate({
      job,
      candidate,
    });

    const score =
      typeof ai?.score === "number"
        ? ai.score
        : Math.floor(Math.random() * 100);

    const match = await prisma.matchReport.create({
      data: {
        jobId,
        candidateId: candidate.id,
        score,
        report: ai,
      },
    });

    results.push(match);
  }

  return results.sort((a, b) => b.score - a.score);
}