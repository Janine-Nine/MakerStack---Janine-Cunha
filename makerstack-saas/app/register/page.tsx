"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import "../styles/auth.css";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações
    if (!formData.name || !formData.email || !formData.password) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não correspondem");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao criar conta");
        return;
      }

      // Fazer login automático após registro
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Conta criada, mas erro ao fazer login. Tente fazer login manualmente.");
        router.push("/");
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { redirect: true, callbackUrl: "/dashboard" });
    } catch (error) {
      setError("Erro ao fazer cadastro com Google");
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
          <p>Cadastre-se Gratuitamente</p>
        </div>

        <div className="auth-form-container">
          <div className="auth-tabs">
            <Link href="/" className="tab">
              Login
            </Link>
            <button className="tab active">Cadastro</button>
          </div>

          <form onSubmit={handleRegister} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Criar senha"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <button type="submit" disabled={isLoading} className="btn-primary">
              {isLoading ? "Criando conta..." : "Criar Conta Grátis"}
            </button>
          </form>

          <div className="divider">ou</div>

          <button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="btn-google"
          >
            <span>🔐 Cadastrar com Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}
