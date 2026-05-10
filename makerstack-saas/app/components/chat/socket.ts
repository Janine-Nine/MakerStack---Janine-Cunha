import { io } from "socket.io-client";

const URL =
  "http://localhost:3000";

export const socket =
  io(URL, {

    autoConnect: false,

    transports: ["websocket"]

  });

// ======================================
// CONECTAR
// ======================================

export function connectSocket() {

  if (!socket.connected) {

    socket.connect();

    console.log(
      "Socket conectado."
    );

  }

}

// ======================================
// DESCONECTAR
// ======================================

export function disconnectSocket() {

  if (socket.connected) {

    socket.disconnect();

    console.log(
      "Socket desconectado."
    );

  }

}

// ======================================
// ENVIAR MENSAGEM
// ======================================

export function sendMessage(
  message: string
) {

  socket.emit(
    "message",
    message
  );

}

// ======================================
// RECEBER MENSAGEM
// ======================================

export function receiveMessage(
  callback: (msg: string) => void
) {

  socket.on(
    "message",
    callback
  );

}