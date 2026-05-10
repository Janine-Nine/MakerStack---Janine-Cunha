"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/dashboard.css";

export default function PDFPage() {
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
        <h1>Relatórios PDF</h1>
      </div>

      <div className="pdf-container">

        <div className="pdf-card">
          <h3>Relatório de Candidatos</h3>
          <p>Análise completa com dados e gráficos</p>
          <button>Gerar PDF</button>
        </div>

        <div className="pdf-card">
          <h3>Relatório de Match</h3>
          <p>Score de compatibilidade candidato-vaga</p>
          <button>Gerar PDF</button>
        </div>

        <div className="pdf-card">
          <h3>Relatório Psicométrico</h3>
          <p>Resultados DISC, MBTI e Enneagrama</p>
          <button>Gerar PDF</button>
        </div>

        <div className="pdf-card">
          <h3>Relatório Executivo</h3>
          <p>Resumo executivo com KPIs</p>
          <button>Gerar PDF</button>
        </div>

      </div>

    </main>
  );
}
