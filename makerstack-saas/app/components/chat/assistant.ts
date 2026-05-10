export async function assistantReply(
  message: string
) {

  const lower =
    message.toLowerCase();

  // =======================================
  // IA RH
  // =======================================

  if (
    lower.includes("vaga")
  ) {

    return "Temos vagas abertas para Frontend, Backend e UX/UI.";

  }

  if (
    lower.includes("candidato")
  ) {

    return "O candidato com maior match atual possui 92% de compatibilidade.";

  }

  if (
    lower.includes("relatório")
  ) {

    return "Os relatórios podem ser exportados em PDF.";

  }

  if (
    lower.includes("organograma")
  ) {

    return "O organograma mostra toda a estrutura organizacional.";

  }

  if (
    lower.includes("teste")
  ) {

    return "Os testes psicométricos incluem DISC, Eneagrama e 16 Personalidades.";

  }

  return "IA RH: Estou analisando sua solicitação.";

}