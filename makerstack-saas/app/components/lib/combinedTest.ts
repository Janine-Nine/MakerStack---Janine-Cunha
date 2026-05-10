import { calculateDISC } from "./disc";
import { calculateEnneagram } from "./enneagram";
import { calculateMBTI } from "./mbti";

export function runFullTest(data: {
  disc: number[];
  enneagram: number[];
  mbti: number[];
}) {
  const disc = calculateDISC(data.disc);
  const enneagram = calculateEnneagram(data.enneagram);
  const mbti = calculateMBTI(data.mbti);

  return {
    disc,
    enneagram,
    mbti,
    summary: generateSummary(disc, enneagram, mbti)
  };
}

function generateSummary(disc: any, enneagram: any, mbti: any) {
  return `
Perfil DISC: ${disc.type}
Eneagrama: ${enneagram.type}
MBTI: ${mbti.type}

Resumo:
Perfil comportamental com tendência ${disc.type}, combinando traços do tipo ${enneagram.type} e padrão cognitivo ${mbti.type}.
  `.trim();
}