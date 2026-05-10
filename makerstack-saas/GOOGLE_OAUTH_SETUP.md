# 🔐 Guia de Configuração - Google OAuth

## 📋 Pré-requisitos
- Conta Google
- Acesso ao Google Cloud Console

## 🚀 Passo a Passo

### 1. Acessar Google Cloud Console

1. Ir para [Google Cloud Console](https://console.cloud.google.com/)
2. Fazer login com sua conta Google

### 2. Criar um Novo Projeto

1. Clique em **Select a Project** (no topo)
2. Clique em **NEW PROJECT**
3. Digite o nome: `Enviagora RH`
4. Clique em **CREATE**

### 3. Ativar Google+ API

1. No menu de navegação, vá para **APIs & Services** > **Library**
2. Procure por "Google+ API"
3. Clique em **Google+ API**
4. Clique no botão **ENABLE**

### 4. Criar OAuth 2.0 Credentials

1. Vá para **APIs & Services** > **Credentials**
2. Clique no botão **+ CREATE CREDENTIALS**
3. Selecione **OAuth 2.0 Client IDs**
4. Se pedido, configure o **OAuth consent screen** primeiro:
   - Tipo de usuário: **External**
   - Clique em **CREATE**
   - Preencha os dados obrigatórios:
     - App name: `Enviagora RH`
     - User support email: seu email
     - Developer contact: seu email
   - Clique em **SAVE AND CONTINUE**
   - Adicione escopes (você pode deixar como está ou adicionar manualmente)
   - Clique em **SAVE AND CONTINUE**

### 5. Configurar Credenciais OAuth

1. Volte para **Credentials**
2. Clique em **+ CREATE CREDENTIALS**
3. Selecione **OAuth 2.0 Client IDs**
4. Tipo de aplicação: **Web application**
5. Preencha os campos:
   - **Name**: `Enviagora RH Web`
   - **Authorized JavaScript origins**:
     ```
     http://localhost:3000
     https://seu-dominio.com
     ```
   - **Authorized redirect URIs**:
     ```
     http://localhost:3000/api/auth/callback/google
     https://seu-dominio.com/api/auth/callback/google
     ```
6. Clique em **CREATE**

### 6. Copiar Credenciais

1. Você verá uma janela com:
   - **Client ID**
   - **Client Secret**
2. Copie essas informações

### 7. Configurar .env.local

No arquivo `makerstack-saas/.env.local`, adicione:

```env
GOOGLE_CLIENT_ID=<seu-client-id>
GOOGLE_CLIENT_SECRET=<seu-client-secret>
```

## ✅ Pronto!

Agora você pode usar Google OAuth no Enviagora RH!

## 🔒 Segurança

- **NUNCA** compartilhe seu `GOOGLE_CLIENT_SECRET`
- Use variáveis de ambiente em produção
- Adicione seus domínios de produção nas credenciais

## 🐛 Troubleshooting

### Erro: "Redirect URI mismatch"
- Verifique se a URL em `NEXTAUTH_URL` está correta
- Adicione a URL à lista de redirect URIs no Google Console
- Restart da aplicação após mudanças

### Erro: "Invalid client_id"
- Verifique se copiou corretamente o `GOOGLE_CLIENT_ID`
- Verifique se o projeto está ativo

### Erro: "API not enabled"
- Volte para **APIs & Services** > **Library**
- Procure por "Google+ API"
- Clique em **ENABLE**

## 📚 Referências

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [NextAuth.js Google Provider](https://next-auth.js.org/providers/google)
