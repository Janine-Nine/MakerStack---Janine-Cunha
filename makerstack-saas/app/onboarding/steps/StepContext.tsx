"use client";

import { useState } from "react";

export default function StepContext({ next, update }: any) {
  const [error, setError] = useState("");

  function submit(e: any) {
    e.preventDefault();

    const form = new FormData(e.target);

    const stage = form.get("stage");
    const desc = form.get("desc")?.toString();

    if (!desc || desc.length < 50) {
      setError("Descreva melhor sua empresa (mín. 50 caracteres)");
      return;
    }

    update({
      context: {
        stage,
        description: desc,
      },
    });

    next();
  }

  return (
    <form onSubmit={submit} className="space-y-6 max-w-lg">
      <h2 className="text-2xl font-bold">
        Contexto da Empresa
      </h2>

      <select name="stage" className="input">
        <option value="startup">Startup</option>
        <option value="growth">Crescimento</option>
        <option value="enterprise">Consolidada</option>
      </select>

      <textarea
        name="desc"
        placeholder="Descreva cultura, desafios e momento atual..."
        className="input h-32"
      />

      {error && <p className="text-red-400">{error}</p>}

      <button className="btn w-full">Finalizar</button>
    </form>
  );
}