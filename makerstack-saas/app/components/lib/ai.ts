import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateMatchReport(input: {
  empresa: any;
  vaga: any;
  candidato: any;
  perfil: any;
}) {
  const prompt = `
Você é um especialista em RH e análise comportamental.

Analise os dados abaixo e gere:

1. Score de match (0 a 100)
2. Pontos fortes
3. Pontos de atenção
4. Recomendação final

Dados:
${JSON.stringify(input, null, 2)}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Especialista em recrutamento e psicometria" },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
}