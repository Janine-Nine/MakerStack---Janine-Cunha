import { prisma } from "@/lib/prisma";
import { rankCandidates } from "@/lib/ranking";

export async function POST(req: Request) {
  const { jobId } = await req.json();

  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: { candidates: { include: { result: true } } }
  });

  const ranking = await rankCandidates(job?.candidates || [], job);

  for (const r of ranking) {
    await prisma.match.upsert({
      where: { candidateId: r.candidateId },
      update: { score: r.score, report: r.report },
      create: {
        candidateId: r.candidateId,
        score: r.score,
        report: r.report
      }
    });
  }

  return Response.json(ranking);
}

app.get("/job", { preHandler: authMiddleware }, async (req: any) => {
  return prisma.job.findMany({
    where: {
      companyId: req.user.companyId,
    },
  });
});