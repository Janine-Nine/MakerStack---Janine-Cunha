export const jwtConfig = {

  secret:
    process.env.JWT_SECRET ||
    "enviagora_secret_key",

  expiresIn: "7d",

  cookieName: "token"

};