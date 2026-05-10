import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import DashboardCard from '@/components/DashboardCard'

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Navbar />

        <div className="dashboard-grid">
          <DashboardCard
            title="Candidatos"
            total="245"
            growth="5%"
          />

           <DashboardCard
            title="Vagas"
            total="18"
            growth="2%"
          />

          <DashboardCard
            title="Onboarding"
            total="12"
            growth="8%"
          />

          <DashboardCard
            title="Contratações"
            total="33"
            growth="10%"
          />
        </div>
      </main>
    </div>
  )
}
