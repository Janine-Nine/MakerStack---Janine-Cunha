"use client";

import {
  createContext,
  useState
} from "react";

export const DashboardContext =
  createContext<any>(null);

export function DashboardProvider({
  children
}: any) {

  const [analytics, setAnalytics] =
    useState([]);

  return (
    <DashboardContext.Provider
      value={{
        analytics,
        setAnalytics
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}