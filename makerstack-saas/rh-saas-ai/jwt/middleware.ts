import { NextRequest, NextResponse }
from "next/server";

import { verifyToken }
from "./auth";

export function authMiddleware(
  request: NextRequest
) {

  const token =
    request.cookies.get("token")
    ?.value;

  if (!token) {

    return NextResponse.json(
      {
        success: false,
        message: "Token não encontrado."
      },
      {
        status: 401
      }
    );

  }

  const decoded =
    verifyToken(token);

  if (!decoded) {

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

  return NextResponse.next();

}