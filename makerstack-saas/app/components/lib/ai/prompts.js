export const prompts = {
  jobGenerator: ({ title, seniority, stack }) => [
    {
      role: 'system',
      content: 'Você é um especialista em RH e escreve vagas profissionais.'
    },
    {
      role: 'user',
      content: `
Crie uma vaga completa:

Cargo: ${title}
Senioridade: ${seniority}
Tecnologias: ${stack}

Inclua:
- Descrição
- Responsabilidades
- Requisitos
- Diferenciais
      `
    }
  ],

  matchAnalyzer: ({ candidate, job }) => [
    {
      role: 'system',
      content: 'Você é um especialista em recrutamento e avaliação de candidatos.'
    },
    {
      role: 'user',
      content: `
Compare candidato e vaga:

Candidato:
${JSON.stringify(candidate)}

Vaga:
${JSON.stringify(job)}

Retorne:
- Score de 0 a 100
- Justificativa
      `
    }
  ],

  resumeAnalyzer: ({ resumeText }) => [
    {
      role: 'system',
      content: 'Você analisa currículos.'
    },
    {
      role: 'user',
      content: `
Analise o currículo abaixo:

${resumeText}

Retorne:
- Skills
- Pontos fortes
- Pontos fracos
      `
    }
  ]
};