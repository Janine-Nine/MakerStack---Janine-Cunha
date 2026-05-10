import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Você é um assistente de RH especialista." },
      { role: "user", content: message }
    ],
    stream: false
  });

  return Response.json({
    reply: response.choices[0].message.content
  });
}