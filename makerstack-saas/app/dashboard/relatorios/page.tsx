"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/dashboard.css";

export default function RelatoriosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Relatórios</h1>
      </div>

      <div className="relatorios-container">
        <div className="relatorio-card">
          <h3>Relatório de Candidatos</h3>
          <p>Análise completa de candidatos por vaga</p>
          <button>Gerar PDF</button>
        </div>

        <div className="relatorio-card">
          <h3>Relatório de Match</h3>
          <p>Análise de compatibilidade candidato-vaga</p>
          <button>Gerar PDF</button>
        </div>

        <div className="relatorio-card">
          <h3>Relatório Psicométrico</h3>
          <p>Resultados de testes DISC, MBTI e Enneagrama</p>
          <button>Gerar PDF</button>
        </div>
      </div>
    </main>
  );
}
