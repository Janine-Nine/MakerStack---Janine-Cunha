"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            MakerStack RH
          </h1>

          <p className="text-zinc-400 mt-2">
            Plataforma SaaS de Gestão de RH
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="text-sm text-zinc-300 mb-2 block">
              Email
            </label>

            <div className="flex items-center bg-zinc-800 rounded-xl px-4">
              <Mail className="w-5 h-5 text-zinc-500" />

              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full bg-transparent p-4 outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-300 mb-2 block">
              Senha
            </label>

            <div className="flex items-center bg-zinc-800 rounded-xl px-4">
              <Lock className="w-5 h-5 text-zinc-500" />

              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full bg-transparent p-4 outline-none text-white"
              />
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-xl py-4 font-semibold text-white"
          >
            Entrar
          </button>

        </form>

        <div className="mt-6 text-center">
          <Link
            href="/dashboard"
            className="text-indigo-400 hover:text-indigo-300 text-sm"
          >
            Acessar Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}