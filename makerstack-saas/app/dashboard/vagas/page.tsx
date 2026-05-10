"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/dashboard.css";

export default function VagasPage() {
  const { data: session, status } = useSession() || { data: null, status: 'loading' };
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router, isClient]);

  if (!isClient || status === "loading") {
    return <div>Carregando...</div>;
  }

  return (
    <main className="page-container">

      <div className="page-header">
        <h1>Vagas</h1>
        <button>+ Criar vaga</button>
      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Vaga</th>
              <th>Nível</th>
              <th>Modelo</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Frontend React</td>
              <td>Pleno</td>
              <td>Remoto</td>
              <td>Aberta</td>
            </tr>

            <tr>
              <td>Backend Node</td>
              <td>Sênior</td>
              <td>Híbrido</td>
              <td>Em análise</td>
            </tr>

            <tr>
              <td>UX/UI Designer</td>
              <td>Júnior</td>
              <td>Remoto</td>
              <td>Aberta</td>
            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}