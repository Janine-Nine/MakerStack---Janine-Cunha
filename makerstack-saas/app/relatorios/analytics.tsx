"use client";

import DashboardCard
from "@/components/DashboardCard";

export default function Analytics() {

  const analytics = [

    {
      title: "Candidatos",
      total: "142",
      growth: "+12%"
    },

    {
      title: "Contratações",
      total: "27",
      growth: "+5%"
    },

    {
      title: "Vagas",
      total: "18",
      growth: "+9%"
    },

    {
      title: "Match IA",
      total: "89%",
      growth: "+18%"
    }

  ];

  return (

    <div className="reports-grid">

      {analytics.map(
        (item, index) => (

          <DashboardCard
            key={index}
            title={item.title}
            total={item.total}
            growth={item.growth}
          />

        )
      )}

    </div>

  );

}