export default function EnneagramTest({ answers, setAnswers }: any) {
  const questions = [
    { text: "Busco perfeição", type: "1" },
    { text: "Sou competitivo", type: "3" },
    { text: "Sou analítico", type: "5" },
  ];

  function select(q: any) {
    setAnswers({
      ...answers,
      enneagram: [...answers.enneagram, q],
    });
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <h2>Eneagrama</h2>
      {questions.map((q, i) => (
        <button key={i} onClick={() => select(q)}>
          {q.text}
        </button>
      ))}
    </div>
  );
}