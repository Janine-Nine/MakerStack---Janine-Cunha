export function calculateMatch(candidate, job) {
  let score = 0;

  // Skills
  const matchSkills = candidate.skills.filter(skill =>
    job.skills.includes(skill)
  );

  score += (matchSkills.length / job.skills.length) * 50;

  // Experiência
  if (candidate.experience >= job.experience) {
    score += 30;
  }

  // Fit cultural (mock)
  score += 20;

  return Math.min(100, Math.round(score));
}