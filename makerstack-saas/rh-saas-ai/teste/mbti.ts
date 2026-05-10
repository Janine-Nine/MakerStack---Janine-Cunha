export type MBTIResult = {
  type: string;
  scores: {
    EI: number;
    SN: number;
    TF: number;
    JP: number;
  };
};

export function calculateMBTI(answers: number[]): MBTIResult {
  let EI = 0, SN = 0, TF = 0, JP = 0;

  answers.forEach((value, index) => {
    switch (index % 4) {
      case 0: EI += value; break;
      case 1: SN += value; break;
      case 2: TF += value; break;
      case 3: JP += value; break;
    }
  });

  const type =
    (EI >= 0 ? "E" : "I") +
    (SN >= 0 ? "S" : "N") +
    (TF >= 0 ? "T" : "F") +
    (JP >= 0 ? "J" : "P");

  return {
    type,
    scores: { EI, SN, TF, JP }
  };
}