"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/empresa.css";

export default function EmpresaPage() {
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
    <main className="empresa-container">

      <div className="empresa-header">

        <h1>Empresa</h1>

        <p>
          Configurações organizacionais
        </p>

      </div>

      <div className="empresa-card">

        <label>Nome da empresa</label>
        <input type="text" placeholder="Enviagora RH" />

        <label>CNPJ</label>
        <input type="text" placeholder="00.000.000/0001-00" />

        <label>Email corporativo</label>
        <input type="email" placeholder="contato@empresa.com" />

        <button>
          Salvar alterações
        </button>

      </div>

    </main>
  );
}