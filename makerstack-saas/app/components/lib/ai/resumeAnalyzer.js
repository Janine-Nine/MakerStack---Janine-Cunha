import { callAI } from './client';
import { prompts } from './prompts';

export async function analyzeResume(resumeText) {
  try {
    const response = await callAI(
      prompts.resumeAnalyzer({ resumeText })
    );

    return response.content;
  } catch (error) {
    return 'Erro ao analisar currículo';
  }
}