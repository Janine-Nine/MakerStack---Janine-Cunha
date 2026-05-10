# 🎯 Guia Rápido de Execução

## ⚡ Start Rápido (5 minutos)

### 1. Clonar e Instalar

```bash
# Clone o repositório
git clone <repo-url>
cd "MakerStack - Desafio - Janine Cunha"

# Instale dependências do frontend
cd makerstack-saas
pnpm install

# Instale dependências do backend
cd ../rh-saas-ai
pnpm install
```

### 2. Configurar Variáveis de Ambiente

#### Frontend (makerstack-saas/.env.local)
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
NEXT_PUBLIC_API_URL=http://localhost:3333
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### Backend (rh-saas-ai/.env)
```bash
PORT=3333
NODE_ENV=development
JWT_SECRET=your-jwt-secret
DATABASE_URL="file:./prisma/dev.db"
CORS_ORIGIN=http://localhost:3000
```

### 3. Preparar Banco de Dados

```bash
cd rh-saas-ai
pnpm prisma migrate dev
```

### 4. Executar em Desenvolvimento

#### Terminal 1 - Backend
```bash
cd rh-saas-ai
pnpm dev
```

#### Terminal 2 - Frontend
```bash
cd makerstack-saas
pnpm dev
```

### 5. Acessar a Aplicação

```
Frontend: http://localhost:3000
Backend:  http://localhost:3333
```

## 🔐 Testar Autenticação

### Opção 1: Criar Conta Grátis
1. Clique em "Cadastro" na página inicial
2. Preencha: Nome, Email, Senha
3. Clique em "Criar Conta Grátis"
4. Você será redirecionado para o Dashboard

### Opção 2: Login com Google
1. Clique em "Entrar com Google"
2. Selecione sua conta Google
3. Autorize o acesso
4. Você será redirecionado para o Dashboard

### Opção 3: Testar com Email/Senha
1. Clique em "Login"
2. Use credenciais de teste
3. Clique em "Entrar"

## 📋 Páginas Disponíveis

Após fazer login, você tem acesso a:

- ✅ **Dashboard** - Visão geral (http://localhost:3000/dashboard)
- ✅ **Vagas** - Gerenciar vagas (http://localhost:3000/dashboard/vagas)
- ✅ **Candidatos** - Listar candidatos com avatares (http://localhost:3000/dashboard/candidatos)
- ✅ **Testes** - Testes psicométricos (http://localhost:3000/dashboard/testes)
- ✅ **Organograma** - Estrutura organizacional (http://localhost:3000/dashboard/organograma)
- ✅ **Relatórios** - Gerar relatórios em PDF (http://localhost:3000/dashboard/relatorios)
- ✅ **Chat IA** - Assistente de IA (http://localhost:3000/chat)
- ✅ **Empresa** - Configurações da empresa (http://localhost:3000/dashboard/empresa)
- ✅ **Configurações** - Configurações do usuário (http://localhost:3000/configuracoes)

## 🛠️ Troubleshooting

### Problema: "Cannot GET /dashboard"
**Solução**: Você precisa fazer login primeiro. Vá para http://localhost:3000

### Problema: "API Connection Error"
**Solução**: 
- Verifique se o backend está rodando na porta 3333
- Verifique se `NEXT_PUBLIC_API_URL` está correto no `.env.local`

### Problema: "Invalid credentials"
**Solução**: 
- Verifique se você criou uma conta
- Tente criar uma nova conta

### Problema: "Prisma Client not found"
**Solução**: Execute `pnpm prisma generate` no backend

### Problema: "Port already in use"
**Solução**: Altere a porta:
```bash
# Frontend
pnpm dev -- -p 3001

# Backend
PORT=3334 pnpm dev
```

## 📝 Comandos Úteis

### Frontend
```bash
cd makerstack-saas

# Desenvolvimento
pnpm dev

# Build
pnpm build

# Iniciar servidor de produção
pnpm start

# Linting
pnpm lint

# Abrir Prisma Studio
pnpm db:studio
```

### Backend
```bash
cd rh-saas-ai

# Desenvolvimento
pnpm dev

# Migrações
pnpm prisma migrate dev
pnpm prisma db push

# Prisma Studio
pnpm prisma studio

# Seed (popular banco)
pnpm prisma db seed
```

## 🚀 Deploy em Produção

### Vercel (Frontend)
1. Conecte seu repositório GitHub ao Vercel
2. Adicione variáveis de ambiente no painel do Vercel
3. Deploy automático ao fazer push para main

### Backend (Heroku/Railway)
1. Crie uma conta na plataforma
2. Conecte seu repositório
3. Configure variáveis de ambiente
4. Deploy automático

## 📱 Avatares Organizados

Os avatares dos candidatos foram reorganizados em:
```
public/img/avatars/
├── avatar1.png
├── avatar2.png
├── avatar3.png
├── avatar4.png
├── avatar5.png
├── avatar6.png
└── avatar 7.png
```

## 🔗 Links Úteis

- [Guia OAuth Google](./GOOGLE_OAUTH_SETUP.md)
- [README Completo](./README_SETUP.md)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Fastify Docs](https://www.fastify.io/)
- [Prisma Docs](https://www.prisma.io/docs/)

## ❓ Dúvidas?

Consulte os documentos:
1. `README_SETUP.md` - Documentação completa
2. `GOOGLE_OAUTH_SETUP.md` - Configuração do Google OAuth
3. `.github/deploy.yml` - Workflow de CI/CD

---

**Desenvolvido com ❤️ - Boa sorte!**
