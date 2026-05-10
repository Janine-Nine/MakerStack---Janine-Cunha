"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";

export default function ConfigPage() {
  const { data: session, status } = useSession() || { data: null, status: 'loading' };
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("company");
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
    <AppLayout
      title="Configurações"
      subtitle="Gerencie o sistema"
    >
      <div className="settings-page">

        <nav className="settings-tabs">
          <button
            className={activeTab === "company" ? "active" : ""}
            onClick={() => setActiveTab("company")}
          >
            Empresa
          </button>
          <button
            className={activeTab === "security" ? "active" : ""}
            onClick={() => setActiveTab("security")}
          >
            Segurança
          </button>
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Meu Perfil
          </button>
        </nav>

        {activeTab === "company" && (
          <div className="settings-card">
            <h2>Configurações da Empresa</h2>
            <input type="text" placeholder="Nome da empresa" />
            <input type="email" placeholder="Email corporativo" />
            <button>Salvar Alterações</button>
          </div>
        )}

        {activeTab === "security" && (
          <div className="settings-card">
            <h2>Segurança</h2>
            <input type="password" placeholder="Senha atual" />
            <input type="password" placeholder="Nova senha" />
            <input type="password" placeholder="Confirmar senha" />
            <button>Salvar senha</button>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="settings-card">
            <h2>Meu Perfil</h2>
            <input type="text" value={session?.user?.name || ""} disabled />
            <input type="email" value={session?.user?.email || ""} disabled />
          </div>
        )}

      </div>
    </AppLayout>
  );
}