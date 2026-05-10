'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface AuthContextProps {
  usuario: any;
  loading: boolean;
  login: (email: string, senha: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem('usuario');

    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
    }

    setLoading(false);
  }, []);

  function login(email: string, senha: string) {
    const usuarioFake = {
      id: 1,
      nome: 'Nine',
      email,
    };

     localStorage.setItem('usuario', JSON.stringify(usuarioFake));
    setUsuario(usuarioFake);
  }

  function logout() {
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}