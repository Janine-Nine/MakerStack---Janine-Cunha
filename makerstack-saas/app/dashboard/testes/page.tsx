"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TestesPage() {
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
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Navbar />

        <div className="content">
          <h1>Testes Psicométricos</h1>
          <p>DISC, MBTI e Enneagrama</p>

          <div className="page-content">
            <div className="tests-container">
              <div className="test-card">
                <h3>DISC</h3>
                <p>Avalie o perfil comportamental dos candidatos</p>
                <button>Começar teste</button>
              </div>

              <div className="test-card">
                <h3>MBTI</h3>
                <p>Identifique tipos de personalidade</p>
                <button>Começar teste</button>
              </div>

              <div className="test-card">
                <h3>Enneagrama</h3>
                <p>Análise profunda de perfil pessoal</p>
                <button>Começar teste</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
