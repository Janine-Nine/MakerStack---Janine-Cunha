"use client";

import { useEffect, useState } from "react";

export default function StepFinish({ data }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simula envio pro backend
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="animate-pulse">
          <p>Finalizando configuração...</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold">
            Tudo pronto 🚀
          </h2>

          <p className="text-gray-400">
            Seu ambiente foi configurado com sucesso.
          </p>

          <a href="/dashboard" className="btn">
            Ir para Dashboard
          </a>

          <details className="text-xs text-gray-500">
            <summary>Ver dados</summary>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </details>
        </>
      )}
    </div>
  );
}