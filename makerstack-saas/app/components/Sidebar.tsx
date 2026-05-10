"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Sidebar() {

  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Vagas",
      path: "/dashboard/vagas"
    },
    {
      name: "Candidatos",
      path: "/dashboard/candidatos"
    },
    {
      name: "Testes",
      path: "/dashboard/testes"
    },
    {
      name: "Organograma",
      path: "/dashboard/organograma"
    },
    {
      name: "Relatórios",
      path: "/dashboard/relatorios"
    },
    {
      name: "Chat IA",
      path: "/chat"
    },
    {
      name: "Empresa",
      path: "/dashboard/empresa"
    },
    {
      name: "Configurações",
      path: "/configuracoes"
    }
  ];

  return (

    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="logo-box">
          <div className="logo-circle" />
          <h2>Enviagora RH</h2>
        </div>

      </div>

      <nav className="sidebar-menu">

        {menus.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={
              pathname === item.path || pathname.startsWith(item.path)
                ? "active-link"
                : ""
            }
          >
            {item.name}
          </Link>

        ))}

      </nav>

      <div className="sidebar-footer">

        <div className="premium-box">

          <h4>Plano Enterprise</h4>

          <p>
            IA Psicométrica ativa
          </p>

        </div>

        <button 
          onClick={() => signOut({ callbackUrl: "/" })}
          className="logout-btn"
        >
          Sair
        </button>

      </div>

    </aside>

  );

}