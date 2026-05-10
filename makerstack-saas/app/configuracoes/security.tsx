"use client";

import { useState } from "react";

export default function SecuritySettings() {

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  function handleSave() {

    if (
      password !== confirmPassword
    ) {

      alert(
        "As senhas não coincidem."
      );

      return;

    }

    alert(
      "Senha alterada com sucesso!"
    );

  }

  return (

    <div className="settings-card">

      <h2>
        Segurança
      </h2>

      <input
        type="password"
        placeholder="Nova senha"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(
            e.target.value
          )
        }
      />

      <button onClick={handleSave}>
        Salvar senha
      </button>

    </div>

  );

}