"use client";

import { useState } from "react";

export default function StepCompany({ next, update }: any) {
  const [error, setError] = useState("");

  function submit(e: any) {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name")?.toString();
    const cnpj = form.get("cnpj")?.toString();

    if (!name || !cnpj) {
      setError("Preencha todos os campos");
      return;
    }

    update({
      company: { name, cnpj },
    });

    next();
  }

  return (
    <form onSubmit={submit} className="space-y-6 max-w-md">
      <h2 className="text-2xl font-bold">Dados da Empresa</h2>

      <input
        name="name"
        placeholder="Nome da empresa"
        className="input"
      />

      <input
        name="cnpj"
        placeholder="CNPJ"
        className="input"
      />

      {error && <p className="text-red-400">{error}</p>}

      <button className="btn w-full">Continuar</button>
    </form>
  );
}