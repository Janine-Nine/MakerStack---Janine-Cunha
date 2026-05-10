"use client";

import Link from "next/link";
import "../../styles/dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">

        <div className="logo">
          <h2>Enviagora RH</h2>
        </div>

        <nav>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/dashboard/vagas">
            Vagas
          </Link>

          <Link href="/dashboard/candidatos">
            Candidatos
          </Link>

          <Link href="/dashboard/onboarding">
            Onboarding
          </Link>

          <Link href="/dashboard/organograma">
            Organograma
          </Link>

          <Link href="/dashboard/empresa">
            Empresa
          </Link>

          <Link href="/dashboard/pdf">
            Relatórios PDF
          </Link>

        </nav>

      </aside>

      <main className="content">

        <div className="topbar">

          <div>
            <h1>Dashboard RH</h1>
            <p>
              Gestão inteligente com IA e psicometria
            </p>
          </div>

          <button>
            + Nova vaga
          </button>

        </div>

        <section className="cards">

          <div className="card">
            <h3>Vagas Ativas</h3>
            <h2>18</h2>
            <span>+4 essa semana</span>
          </div>

          <div className="card">
            <h3>Candidatos</h3>
            <h2>142</h2>
            <span>+22 novos</span>
          </div>

          <div className="card">
            <h3>Match IA</h3>
            <h2>89%</h2>
            <span>Excelente</span>
          </div>

          <div className="card">
            <h3>Testes Concluídos</h3>
            <h2>87</h2>
            <span>DISC + MBTI</span>
          </div>

        </section>

        <section className="dashboard-grid">

          <div className="box">
            <h3>Atividades Recentes</h3>

            <ul>
              <li>Nova candidatura enviada</li>
              <li>Relatório PDF gerado</li>
              <li>Teste DISC concluído</li>
              <li>Nova vaga criada</li>
            </ul>
          </div>

          <div className="box">
            <h3>Resumo</h3>

            <p>
              Plataforma inteligente de RH com foco
              em análise comportamental, onboarding,
              recrutamento e gestão de talentos.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}