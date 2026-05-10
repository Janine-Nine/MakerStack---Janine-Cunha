"use client";

export default function StepTests({ next, update }: any) {
  function select(option: string) {
    update({ tests: option });
    next();
  }

  return (
    <div className="space-y-6 max-w-md">
      <h2 className="text-2xl font-bold">
        Testes de Personalidade
      </h2>

      <button
        onClick={() => select("have")}
        className="card-option"
      >
        Já tenho os resultados
      </button>

      <button
        onClick={() => select("send")}
        className="card-option"
      >
        Enviar links para colaboradores
      </button>
    </div>
  );
}