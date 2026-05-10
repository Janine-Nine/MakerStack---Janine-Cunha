import jwt from "jsonwebtoken";

const SECRET =
  process.env.JWT_SECRET ||
  "enviagora_secret_key";

// ========================================
// GERAR TOKEN
// ========================================

export function generateToken(
  payload: any
) {

  return jwt.sign(
    payload,
    SECRET,
    {
      expiresIn: "7d"
    }
  );

}

// ========================================
// VALIDAR TOKEN
// ========================================

export function verifyToken(
  token: string
) {

  try {

    return jwt.verify(
      token,
      SECRET
    );

  } catch (error) {

    return null;

  }

}