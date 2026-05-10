"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Chat from "@/components/Chat";
import "../../styles/dashboard.css";

export default function ChatPage() {
  const { data: session, status } = useSession() || { data: null, status: 'loading' };
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router, isClient]);

  if (!isClient || status === "loading") {
    return <div>Carregando...</div>;
  }

  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Chat Assistente IA</h1>
      </div>

      <div className="chat-container">
        <Chat />
      </div>
    </main>
  );
}
