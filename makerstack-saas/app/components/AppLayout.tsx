"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export default function AppLayout({
  children,
  title = "Dashboard",
  subtitle = "Painel inteligente de RH"
}: Props) {

  return (

    <div className="app-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="main-content">

        {/* NAVBAR */}
        <Navbar
          title={title}
          subtitle={subtitle}
        />

        {/* PAGE CONTENT */}
        <main className="page-content">

          {children}

        </main>

      </div>

    </div>

  );

}