"use client";

export default function LineChart() {

  const pontos = [
    20,
    45,
    35,
    70,
    90
  ];

  return (

    <div className="chart-container">

      <h3>
        Crescimento Mensal
      </h3>

      <div className="line-chart">

        {pontos.map((ponto, index) => (

          <div
            key={index}
            className="line-point"
            style={{
              bottom: `${ponto}%`
            }}
          />

        ))}

      </div>

    </div>

  );

}