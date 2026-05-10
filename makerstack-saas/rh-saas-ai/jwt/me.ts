import { NextRequest, NextResponse }
from "next/server";

import { verifyToken }
from "./auth";

export async function GET(
  request: NextRequest
) {

  const token =
    request.cookies.get("token")
    ?.value;

  if (!token) {

    return NextResponse.json(
      {
        success: false,
        message: "Não autenticado."
      },
      {
        status: 401
      }
    );

  }

  const user =
    verifyToken(token);

  if (!user) {

    return NextResponse.json(
      {
        success: false,
        message: "Token inválido."
      },
      {
        status: 401
      }
    );

  }

  return NextResponse.json({

    success: true,

    user

  });

}