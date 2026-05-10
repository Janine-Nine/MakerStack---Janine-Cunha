import { NextRequest, NextResponse }
from "next/server";

import {
  verifyToken,
  generateToken
} from "./auth";

export async function POST(
  request: NextRequest
) {

  const token =
    request.cookies.get("token")
    ?.value;

  if (!token) {

    return NextResponse.json(
      {
        success: false,
        message: "Token ausente."
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
        message: "Token expirado."
      },
      {
        status: 401
      }
    );

  }

  const newToken =
    generateToken(decoded);

  return NextResponse.json({

    success: true,

    token: newToken

  });

}