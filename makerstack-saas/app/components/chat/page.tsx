"use client";

import AppLayout from "@/components/AppLayout";
import Chat from "@/components/Chat";

export default function ChatPage() {

  return (

    <AppLayout
      title="Assistente IA"
      subtitle="Chat inteligente de RH"
    >

      <Chat />

    </AppLayout>

  );
}