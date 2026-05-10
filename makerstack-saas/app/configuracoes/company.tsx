"use client";

import { useState } from "react";

export default function CompanySettings() {

  const [empresa, setEmpresa] =
    useState("Enviagora RH");

  const [email, setEmail] =
    useState(
      "admin@enviagora.com"
    );

  const [telefone,
    setTelefone] =
    useState("(51) 99999-9999");

  function salvarEmpresa() {

    alert(
      "Dados da empresa atualizados."
    );

  }

  return (

    <div className="settings-card">

      <h2>
        Dados da Empresa
      </h2>

      <input
        type="text"
        value={empresa}
        onChange={(e) =>
          setEmpresa(e.target.value)
        }
      />

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="text"
        value={telefone}
        onChange={(e) =>
          setTelefone(e.target.value)
        }
      />

      <button onClick={salvarEmpresa}>
        Salvar alterações
      </button>

    </div>

  );

}