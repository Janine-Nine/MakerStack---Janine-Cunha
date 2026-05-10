export async function parseCV(text: string) {
  const prompt = `
Extraia dados do CV:

${text}

Retorne JSON:
{
  "name": "",
  "skills": [],
  "experience": [],
  "education": []
}
`;

  const res = await client.messages.create({
    model: "claude-sonnet-4",
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }],
  });

  return res.content;
}