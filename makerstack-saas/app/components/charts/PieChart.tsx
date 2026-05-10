"use client";

export default function PieChart() {

  return (

    <div className="chart-container">

      <h3>
        Distribuição de Candidatos
      </h3>

      <div className="pie-chart">

        <div className="pie-circle" />

      </div>

      <div className="pie-legend">

        <span>Frontend</span>
        <span>Backend</span>
        <span>UX/UI</span>

      </div>

    </div>

  );

}