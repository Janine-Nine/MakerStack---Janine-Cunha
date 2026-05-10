export default function DiscTest({ answers, setAnswers }: any) {
  const questions = [
    { text: "Gosto de liderar decisões", type: "D" },
    { text: "Sou comunicativo", type: "I" },
    { text: "Prefiro estabilidade", type: "S" },
    { text: "Sou detalhista", type: "C" },
  ];

  function select(q: any) {
    setAnswers({
      ...answers,
      disc: [...answers.disc, q],
    });
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <h2 className="mb-4">DISC</h2>
      {questions.map((q, i) => (
        <button key={i} onClick={() => select(q)} className="block mb-2">
          {q.text}
        </button>
      ))}
    </div>
  );
}