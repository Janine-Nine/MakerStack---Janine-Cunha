"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./styles/auth.css";

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou senha inválidos");
      } else if (result?.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Erro ao fazer login");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { redirect: true, callbackUrl: "/dashboard" });
    } catch (error) {
      setError("Erro ao fazer login com Google");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <h1>Enviagora RH</h1>
          <p>Gestão Inteligente com IA</p>
        </div>

        <div className="auth-form-container">
          <div className="auth-tabs">
            <button className="tab active">Login</button>
            <Link href="/register" className="tab">
              Cadastro
            </Link>
          </div>

          <form onSubmit={handleLogin} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />

            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />

            <button type="submit" disabled={isLoading} className="btn-primary">
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="divider">ou</div>

          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="btn-google"
          >
            <span>🔐 Entrar com Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}