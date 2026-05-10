export async function callAI(messages) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      content: 'IA não configurada. Usando fallback.',
    };
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  return {
    content: data.choices?.[0]?.message?.content || '',
  };
}