export async function analyzeCandidate(data: any) {
  const prompt = `
Você é um especialista sênior em recrutamento, psicometria e análise comportamental.

Seu objetivo é avaliar o match entre candidato e vaga de forma estratégica, prática e objetiva.

━━━━━━━━━━━━━━━━━━━
CONTEXTO DA EMPRESA
━━━━━━━━━━━━━━━━━━━
${JSON.stringify(data.job.company || {})}

━━━━━━━━━━━━━━━━━━━
DADOS DA VAGA
━━━━━━━━━━━━━━━━━━━
${JSON.stringify(data.job)}

━━━━━━━━━━━━━━━━━━━
DADOS DO CANDIDATO
━━━━━━━━━━━━━━━━━━━
${JSON.stringify(data.candidate)}

━━━━━━━━━━━━━━━━━━━
REGRAS DE ANÁLISE
━━━━━━━━━━━━━━━━━━━
- Considere fit cultural, técnico e comportamental
- Use DISC, MBTI e Eneagrama se disponíveis
- Avalie:
  • Perfil analítico vs execução
  • Comunicação
  • Adaptabilidade
  • Energia (ritmo)
  • Compatibilidade com liderança

━━━━━━━━━━━━━━━━━━━
RETORNE APENAS JSON:
━━━━━━━━━━━━━━━━━━━

{
  "score": 0-100,
  "ranking_reason": "por que esse score",
  "strengths": ["..."],
  "weaknesses": ["..."],
  "culture_fit": "alto | médio | baixo",
  "leadership_fit": "como esse candidato reage ao líder",
  "risk_level": "baixo | médio | alto",
  "recommendation": "contratar | avaliar mais | não recomendado"
}

Seja direto. Sem texto genérico.
`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1200,
    messages: [{ role: "user", content: prompt }],
  });

  return response.content;
}