"use client";

import AppLayout from "@/components/AppLayout";
import DashboardCard from "@/components/DashboardCard";
import PdfGenerator from "@/components/PdfGenerator";

export default function RelatoriosPage() {

  return (

    <AppLayout
      title="Relatórios"
      subtitle="Analytics e métricas"
    >

      <div className="reports-grid">

        <DashboardCard
          title="Candidatos"
          total="142"
          growth="+12%"
        />

        <DashboardCard
          title="Contratações"
          total="27"
          growth="+5%"
        />
        <DashboardCard
          title="Match IA"
          total="89%"
          growth="+18%"
        />

      </div>

      <PdfGenerator />

    </AppLayout>

  );
}