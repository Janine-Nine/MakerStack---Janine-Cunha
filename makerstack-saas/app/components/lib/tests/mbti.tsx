export default function MBTITest({ answers, setAnswers }: any) {
  const questions = [
    { text: "Prefiro socializar", type: "E" },
    { text: "Prefiro ficar sozinho", type: "I" },
  ];

  function select(q: any) {
    setAnswers({
      ...answers,
      mbti: [...answers.mbti, q],
    });
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <h2>MBTI</h2>
      {questions.map((q, i) => (
        <button key={i} onClick={() => select(q)}>
          {q.text}
        </button>
      ))}
    </div>
  );
}