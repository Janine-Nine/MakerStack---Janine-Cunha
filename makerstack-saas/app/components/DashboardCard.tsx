type Props = {
  title: string;
  total: string;
  growth: string;
};

export default function DashboardCard({
  title,
  total,
  growth
}: Props) {

  return (

    <div className="dashboard-card">

      <span className="card-tag">
        Analytics
      </span>

      <h3>{title}</h3>

      <h1>{total}</h1>

      <p>{growth}</p>

    </div>

  );

}