import { generateMatchReport } from "./ai";

export async function rankCandidates(candidates: any[], job: any) {
  const results = [];

  for (const candidate of candidates) {
    const report = await generateMatchReport({
      empresa: job.company ?? null,
      vaga: job,
      candidato: candidate,
      perfil: candidate.result
    });

    const score = Math.floor(Math.random() * 40) + 60; // mock inteligente

    results.push({
      candidateId: candidate.id,
      score,
      report
    });
  }

  return results.sort((a, b) => b.score - a.score);
}