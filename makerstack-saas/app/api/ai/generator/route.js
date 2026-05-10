import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { title, seniority, stack } = await req.json();

    if (!title) {
      return NextResponse.json({ error: 'Cargo é obrigatório' }, { status: 400 });
    }

    // ⚠️ Se tiver OpenAI, usa. Senão fallback mock
    let description;

    if (process.env.OPENAI_API_KEY) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Você é um especialista em RH que cria descrições de vagas profissionais.'
            },
            {
              role: 'user',
              content: `
              Crie uma vaga para:
              Cargo: ${title}
              Senioridade: ${seniority}
              Tecnologias: ${stack}
              `
            }
          ]
        }),
      });

      const data = await response.json();
      description = data.choices?.[0]?.message?.content;
    } else {
      // 🔥 fallback inteligente
      description = `
Vaga: ${title} (${seniority})

Responsabilidades:
- Desenvolver soluções com ${stack}
- Colaborar com time
- Garantir qualidade de código

Requisitos:
- Experiência com ${stack}
- Boa comunicação
- Proatividade
      `;
    }

    return NextResponse.json({ description });

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao gerar vaga' }, { status: 500 });
  }
}