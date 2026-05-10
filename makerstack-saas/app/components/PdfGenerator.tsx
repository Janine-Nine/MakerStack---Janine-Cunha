"use client";

import { useState } from "react";

export default function PdfGenerator() {

  const [loading, setLoading] =
    useState(false);

  function gerarPDF() {

    setLoading(true);

    setTimeout(() => {

      alert("PDF gerado com sucesso!");

      setLoading(false);

    }, 2000);

  }

  return (

    <div className="pdf-generator">

      <h3>
        Gerador de Relatórios
      </h3>

      <p>
        Gere relatórios completos em PDF.
      </p>

      <button onClick={gerarPDF}>

        {loading
          ? "Gerando..."
          : "Gerar PDF"}

      </button>

    </div>

  );

}