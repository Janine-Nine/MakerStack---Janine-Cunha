export function calculateDISC(answers: any[]) {
  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  answers.forEach((a) => {
    scores[a.type] += 1;
  });

  const total = answers.length;

  return {
    D: (scores.D / total) * 100,
    I: (scores.I / total) * 100,
    S: (scores.S / total) * 100,
    C: (scores.C / total) * 100,
    dominant: Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    ),
  };
}