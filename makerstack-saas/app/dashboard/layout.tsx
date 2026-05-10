"use client";

import Card from "@/components/card";
import Button from "@/components/Button";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <Card>
        <p>Vagas</p>
        <h2 className="text-2xl font-bold">12</h2>
      </Card>

      <Card>
        <p>Candidatos</p>
        <h2 className="text-2xl font-bold">48</h2>
      </Card>

      <Card>
        <p>Match</p>
        <h2 className="text-2xl font-bold">82%</h2>
      </Card>

      <div className="col-span-3">
        <Button onClick={() => alert("Gerar Match")}>
          Rodar IA
        </Button>
      </div>

    </div>
  );
}