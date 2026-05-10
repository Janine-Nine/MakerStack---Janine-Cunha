"use client";

import "../../styles/dashboard.css";

export default function PdfPage() {
  return (
    <main className="page-container">

      <div className="page-header">
        <h1>Relatórios PDF</h1>
      </div>

      <div className="cards">

        <div className="card">
          <h3>Relatório DISC</h3>
          <button>Gerar PDF</button>
        </div>

        <div className="card">
          <h3>Relatório de Match</h3>
          <button>Gerar PDF</button>
        </div>

        <div className="card">
          <h3>Relatório Geral</h3>
          <button>Gerar PDF</button>
        </div>

      </div>

    </main>
  );
}