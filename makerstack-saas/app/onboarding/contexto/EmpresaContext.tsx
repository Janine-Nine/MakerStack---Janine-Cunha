"use client";

import {
  createContext,
  useState
} from "react";

export const EmpresaContext =
  createContext<any>(null);

export function EmpresaProvider({
  children
}: any) {

  const [empresa, setEmpresa] =
    useState("Enviagora RH");

  return (
    <EmpresaContext.Provider
      value={{
        empresa,
        setEmpresa
      }}
    >
      {children}
    </EmpresaContext.Provider>
  );
}