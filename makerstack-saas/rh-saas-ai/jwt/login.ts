import { NextResponse }
from "next/server";

import { generateToken }
from "./auth";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const {
    email,
    password
  } = body;

  // ========================================
  // LOGIN FAKE
  // ========================================

  if (
    email === "admin@enviagora.com" &&
    password === "123456"
  ) {

    const token =
      generateToken({

        id: 1,

        nome: "Administrador",

        email

      });

    const response =
      NextResponse.json({

        success: true,

        message:
          "Login realizado com sucesso.",

        token

      });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      }
    );

    return response;

  }

  return NextResponse.json(
    {

      success: false,

      message:
        "Email ou senha inválidos."

    },
    {
      status: 401
    }
  );

}