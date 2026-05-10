"use client";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function Chat() {

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        text: "Olá 👋 Sou a IA da Enviagora RH. Como posso ajudar?",
        sender: "bot"
      }
    ]);

  const [input, setInput] =
    useState("");

  function sendMessage() {

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user"
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      text: "Entendi. Estou analisando sua solicitação com IA 🤖",
      sender: "bot"
    };

    setMessages([
      ...messages,
      userMessage,
      botMessage
    ]);

    setInput("");

  }

  return (

    <div className="chat-container">

      {/* HEADER */}
      <div className="chat-header">

        <h2>
          Assistente IA RH
        </h2>

        <span>
          Online
        </span>

      </div>

      {/* BODY */}
      <div className="chat-messages">

        {messages.map((message) => (

          <div
            key={message.id}
            className={
              message.sender === "user"
                ? "message user-message"
                : "message bot-message"
            }
          >

            {message.text}

          </div>

        ))}

      </div>

      {/* INPUT */}
      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          Enviar
        </button>

      </div>

    </div>

  );

}