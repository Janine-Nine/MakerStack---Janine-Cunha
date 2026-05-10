"use client";

export default function BarChart() {

  const valores = [80, 55, 95, 70];

  return (

    <div className="chart-container">

      <h3>
        Performance de Match
      </h3>

      <div className="bar-chart">

        {valores.map((valor, index) => (

          <div
            key={index}
            className="bar-item"
          >

            <div
              className="bar-fill"
              style={{
                height: `${valor}%`
              }}
            />

            <span>{valor}%</span>

          </div>

        ))}

      </div>

    </div>

  );

}