"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../../styles/dashboard.css";

export default function OrganoramaPage() {
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
        <h1>Organograma</h1>
      </div>

      <div className="organograma-container">
        <div className="organograma-chart">
          <div className="org-node">
            <h3>CEO</h3>
            <p>Direção Executiva</p>
          </div>

          <div className="org-children">
            <div className="org-node">
              <h3>Gerente de RH</h3>
              <p>Recursos Humanos</p>
            </div>

            <div className="org-node">
              <h3>Gerente de Tech</h3>
              <p>Tecnologia</p>
            </div>

            <div className="org-node">
              <h3>Gerente Financeiro</h3>
              <p>Finanças</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
