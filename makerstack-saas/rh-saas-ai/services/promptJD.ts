export async function generateJD(input: any) {
  const prompt = `
Você é um especialista em RH e recrutamento.

Crie uma Job Description profissional baseada nos dados:

${JSON.stringify(input)}

Retorne JSON:
{
  "job_title": "",
  "summary": "",
  "responsibilities": [],
  "requirements": [],
  "salary_range": "",
  "ideal_profile": ""
}
`;

  const res = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 800,
    messages: [{ role: "user", content: prompt }],
  });

  return res.content;
}