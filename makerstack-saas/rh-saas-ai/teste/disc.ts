export type DiscResult = {
  D: number;
  I: number;
  S: number;
  C: number;
  profile: string;
};

export function calculateDISC(answers: number[]): DiscResult {
  // Simples: cada índice representa um fator
  let D = 0, I = 0, S = 0, C = 0;

  answers.forEach((value, index) => {
    switch (index % 4) {
      case 0: D += value; break;
      case 1: I += value; break;
      case 2: S += value; break;
      case 3: C += value; break;
    }
  });

  const total = D + I + S + C;

  const result = {
    D: Math.round((D / total) * 100),
    I: Math.round((I / total) * 100),
    S: Math.round((S / total) * 100),
    C: Math.round((C / total) * 100),
    profile: ""
  };

  const max = Math.max(result.D, result.I, result.S, result.C);

  if (max === result.D) result.profile = "Dominante";
  else if (max === result.I) result.profile = "Influente";
  else if (max === result.S) result.profile = "Estável";
  else result.profile = "Conforme";

  return result;
}