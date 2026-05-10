# JWT - Enviagora RH

Sistema de autenticação JWT para o SaaS RH.

## Estrutura

jwt/
├── auth.ts
├── middleware.ts
├── login.ts
├── logout.ts
├── me.ts
├── refresh.ts
├── types.ts
└── config.ts

---

## Instalação

npm install jsonwebtoken

npm install -D @types/jsonwebtoken

---

## Variáveis .env

JWT_SECRET=enviagora_super_secret

---

## Funcionalidades

✅ Login  
✅ Logout  
✅ Middleware de autenticação  
✅ Refresh token  
✅ Cookies HTTP Only  
✅ Proteção de rotas  
✅ Verificação de usuário  

---

## Exemplo de Login

POST /api/login

{
  "email": "admin@enviagora.com",
  "password": "123456"
}