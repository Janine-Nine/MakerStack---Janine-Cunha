"use client";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Navbar({
  title = "Dashboard",
  subtitle = "Resumo geral",
}: Props) {

  return (

    <header className="navbar">

      <div>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

      <div className="navbar-actions">

        <input
          type="text"
          placeholder="Buscar..."
        />

        <button>
          + Novo
        </button>

      </div>

    </header>

  );

}