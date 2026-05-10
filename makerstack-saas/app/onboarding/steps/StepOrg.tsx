"use client";

import { useState } from "react";

export default function StepOrg({ next, update }: any) {
  const [people, setPeople] = useState<any[]>([
    { name: "", role: "" },
  ]);

  function handleChange(i: number, field: string, value: string) {
    const updated = [...people];
    updated[i][field] = value;
    setPeople(updated);
  }

  function add() {
    setPeople([...people, { name: "", role: "" }]);
  }

  function remove(i: number) {
    const updated = people.filter((_, index) => index !== i);
    setPeople(updated);
  }

  function save() {
    const valid = people.every((p) => p.name && p.role);

    if (!valid) {
      alert("Preencha todos os colaboradores");
      return;
    }

    update({ org: people });
    next();
  }

  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-2xl font-bold">Organograma</h2>

      {people.map((p, i) => (
        <div key={i} className="flex gap-2">
          <input
            placeholder="Nome"
            className="input flex-1"
            value={p.name}
            onChange={(e) =>
              handleChange(i, "name", e.target.value)
            }
          />

          <input
            placeholder="Cargo"
            className="input flex-1"
            value={p.role}
            onChange={(e) =>
              handleChange(i, "role", e.target.value)
            }
          />

          <button
            onClick={() => remove(i)}
            className="text-red-400"
          >
            ✕
          </button>
        </div>
      ))}

      <button onClick={add} className="btn-secondary">
        + Adicionar colaborador
      </button>

      <button onClick={save} className="btn w-full">
        Continuar
      </button>
    </div>
  );
}