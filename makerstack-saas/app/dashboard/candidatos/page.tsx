"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/dashboard.css";

export default function CandidatosPage() {
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
        <h1>Candidatos</h1>
      </div>

      <div className="cards">

        <div className="candidate-card">
          <img src="/img/avatars/avatar1.png" alt="Avatar 1" />
          <h3>Maria Silva</h3>
          <p>Frontend Developer</p>
          <span>Match: 92%</span>
        </div>

        <div className="candidate-card">
          <img src="/img/avatars/avatar2.png" alt="Avatar 2" />
          <h3>João Costa</h3>
          <p>Analista de Dados</p>
          <span>Match: 85%</span>
        </div>

        <div className="candidate-card">
          <img src="/img/avatars/avatar3.png" alt="Avatar 3" />
          <h3>Amanda Souza</h3>
          <p>UX/UI Designer</p>
          <span>Match: 88%</span>
        </div>

      </div>

    </main>
  );
}