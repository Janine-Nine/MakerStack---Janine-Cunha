export default function MainLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 250, background: '#111', color: '#fff', padding: 20 }}>
        <h2>MakerStack</h2>
        <nav>
          <p>Dashboard</p>
          <p>Vagas</p>
          <p>Candidatos</p>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        {children}
      </main>
    </div>
  );
}