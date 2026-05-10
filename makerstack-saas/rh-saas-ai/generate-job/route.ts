import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const data = await req.json();

  const prompt = `
Crie uma descrição de vaga completa com base nisso:
${JSON.stringify(data)}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return Response.json({
    job: response.choices[0].message.content
  });
}