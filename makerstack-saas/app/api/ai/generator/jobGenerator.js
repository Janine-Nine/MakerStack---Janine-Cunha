import { callAI } from './client';
import { prompts } from './prompts';

export async function generateJob({ title, seniority, stack }) {
  try {
    const response = await callAI(
      prompts.jobGenerator({ title, seniority, stack })
    );

    return response.content;
  } catch (error) {
    return `
Vaga: ${title} (${seniority})

Stack: ${stack}

Responsabilidades:
- Desenvolver soluções
- Trabalhar em equipe

Requisitos:
- Experiência com ${stack}
    `;
  }
}