"use client";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export default function Layout({
  children,
  title = "Enviagora RH",
  subtitle = "Sistema Inteligente de Gestão"
}: Props) {

  return (

    <div className="layout-container">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <section className="layout-content">

        {/* NAVBAR */}
        <Navbar
          title={title}
          subtitle={subtitle}
        />

        {/* PAGE */}
        <div className="layout-page">

          {children}

        </div>

      </section>

    </div>

  );

}