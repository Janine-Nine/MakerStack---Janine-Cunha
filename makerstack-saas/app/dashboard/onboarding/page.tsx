"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/dashboard.css";

export default function OnboardingPage() {
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
        <h1>Onboarding</h1>
        <p>Programas de integração e treinamento</p>
      </div>

      <div className="onboarding-container">

        <div className="onboarding-card">
          <h3>Onboarding Executivo</h3>
          <p>Programa de integração para líderes</p>
          <span className="status">Ativo</span>
          <button>Ver Detalhes</button>
        </div>

        <div className="onboarding-card">
          <h3>Onboarding Técnico</h3>
          <p>Integração para profissionais de TI</p>
          <span className="status">Ativo</span>
          <button>Ver Detalhes</button>
        </div>

        <div className="onboarding-card">
          <h3>Onboarding Administrativo</h3>
          <p>Programa para administrativos</p>
          <span className="status">Ativo</span>
          <button>Ver Detalhes</button>
        </div>

      </div>

    </main>
  );
}
