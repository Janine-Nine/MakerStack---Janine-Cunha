import { callAI } from './client';
import { prompts } from './prompts';

export async function analyzeMatch(candidate, job) {
  try {
    const response = await callAI(
      prompts.matchAnalyzer({ candidate, job })
    );

    return response.content;
  } catch (error) {
    return 'Erro ao analisar match';
  }
}