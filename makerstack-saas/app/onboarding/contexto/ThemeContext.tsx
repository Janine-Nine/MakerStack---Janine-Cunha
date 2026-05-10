"use client";

import {
  createContext,
  useState
} from "react";

export const ThemeContext =
  createContext<any>(null);

export function ThemeProvider({
  children
}: any) {

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}