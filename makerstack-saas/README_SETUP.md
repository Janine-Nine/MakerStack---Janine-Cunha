# 🚀 Enviagora RH - Sistema de Gestão Inteligente

Sistema SaaS de RH com IA, Psicometria (DISC, MBTI, Enneagrama) e Match Inteligente entre candidatos e vagas.

## 📋 Estrutura do Projeto

```
.
├── makerstack-saas/          # Frontend (Next.js)
├── rh-saas-ai/              # Backend (Fastify + Node.js)
├── .github/                 # Workflows GitHub Actions
├── .vercel/                 # Configuração Vercel
└── .vscode/                 # Configuração VS Code
```

## 🔧 Configuração de Desenvolvimento

### Pré-requisitos

- Node.js 20+
- PNPM (instale com: `npm install -g pnpm`)
- Git

### Variáveis de Ambiente

#### Frontend (makerstack-saas/.env.local)

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-in-production

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3333

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=YOUR_API_KEY"
```

#### Backend (rh-saas-ai/.env)

```env
# Server Configuration
PORT=3333
NODE_ENV=development

# JWT
JWT_SECRET=your-jwt-secret-key-change-in-production

# Database (SQLite for development)
DATABASE_URL="file:./prisma/dev.db"

# CORS
CORS_ORIGIN=http://localhost:3000

# API Keys (Optional)
OPENAI_API_KEY=your-openai-api-key
```

### Instalação

1. **Clonar repositório**
   ```bash
   git clone <repo-url>
   cd MakerStack
   ```

2. **Instalar dependências do Frontend**
   ```bash
   cd makerstack-saas
   pnpm install
   ```

3. **Instalar dependências do Backend**
   ```bash
   cd ../rh-saas-ai
   pnpm install
   ```

4. **Configurar banco de dados (Backend)**
   ```bash
   cd rh-saas-ai
   pnpm prisma migrate dev
   ```

### Executar em Desenvolvimento

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

A aplicação estará disponível em `http://localhost:3000`

## 📖 Funcionalidades Principais

### 🔐 Autenticação
- ✅ Cadastro com email/senha
- ✅ Login com email/senha
- ✅ Login com Google OAuth
- ✅ JWT Token com refresh

### 👥 Gestão de Candidatos
- Visualizar candidatos com avatares
- Perfil detalhado
- Testes psicométricos integrados

### 💼 Gestão de Vagas
- Criar e editar vagas
- Associar candidatos a vagas
- Match automático com IA

### 🧠 Testes Psicométricos
- DISC
- MBTI
- Enneagrama

### 📊 Relatórios
- Relatório de candidatos
- Relatório de match
- Relatório psicométrico
- Exportar em PDF

### 🗂️ Organograma
- Visualizar estrutura organizacional
- Gestão de departamentos

### ⚙️ Configurações
- Configurações da empresa
- Segurança (alterar senha)
- Perfil do usuário

## 🛠️ Tecnologias

### Frontend
- **Next.js 14** - Framework React
- **NextAuth.js** - Autenticação
- **Tailwind CSS** - Estilização
- **TypeScript** - Type safety
- **Zustand** - State management
- **Prisma** - ORM

### Backend
- **Fastify** - Web framework
- **Prisma** - ORM
- **SQLite** - Database (desenvolvimento)
- **JWT** - Token authentication
- **bcryptjs** - Password hashing

## 📁 Estrutura de Diretórios

### Frontend (makerstack-saas)
```
app/
├── api/auth/[...nextauth]/   # Autenticação NextAuth
├── dashboard/                # Páginas do dashboard
│   ├── vagas/
│   ├── candidatos/
│   ├── testes/
│   ├── organograma/
│   ├── relatorios/
│   └── empresa/
├── chat/                     # Chat IA
├── configuracoes/            # Configurações
├── login/                    # Login
├── register/                 # Registro
├── page.tsx                  # Homepage
├── layout.tsx                # Root layout
├── providers.tsx             # NextAuth provider
└── styles/                   # CSS global

components/
├── Sidebar.tsx               # Menu lateral
├── Navbar.tsx                # Barra superior
├── Button.tsx
├── Input.tsx
├── Modal.tsx
└── ...

services/
├── authService.ts            # Serviços de autenticação
└── ...

public/
└── img/
    └── avatars/              # Imagens de avatares (avatar 1-7.png)
```

### Backend (rh-saas-ai)
```
auth/
├── auth.route.ts             # Rotas de autenticação
├── auth.service.ts
└── ...

src/
├── server.ts                 # Configuração Fastify
├── routes/                   # Rotas da API
└── ...

prisma/
└── schema.prisma             # Schema do banco de dados
```

## 🌐 Rotas da API

### Autenticação
- `POST /auth/login` - Fazer login
- `POST /auth/register` - Registrar novo usuário
- `GET /auth/me` - Obter usuário atual
- `POST /auth/refresh` - Renovar token

### Empresas
- `GET /company` - Listar empresas
- `POST /company` - Criar empresa

### Vagas
- `GET /job` - Listar vagas
- `POST /job` - Criar vaga
- `PUT /job/:id` - Atualizar vaga
- `DELETE /job/:id` - Deletar vaga

### Candidatos
- `GET /candidate` - Listar candidatos
- `POST /candidate` - Criar candidato

### Match
- `POST /match` - Gerar match automático

## 🚀 Deploy

### Vercel (Frontend)

1. Conectar repositório GitHub ao Vercel
2. Adicionar variáveis de ambiente no Vercel Dashboard
3. Deploy automático ao fazer push para main

### Heroku/Railway (Backend)

Instruções específicas para cada plataforma.

## 📝 Scripts Disponíveis

### Frontend
```bash
pnpm dev          # Executar em desenvolvimento
pnpm build        # Build para produção
pnpm start        # Iniciar servidor de produção
pnpm lint         # Verificar linting
pnpm db:push      # Sincronizar banco Prisma
pnpm db:studio    # Abrir Prisma Studio
```

### Backend
```bash
pnpm dev          # Executar em desenvolvimento
pnpm build        # Build para produção
pnpm start        # Iniciar servidor
pnpm prisma:migrate  # Executar migrações
pnpm prisma:studio   # Abrir Prisma Studio
```

## 🔑 Variáveis de Ambiente Necessárias

### Google OAuth
1. Ir em [Google Cloud Console](https://console.cloud.google.com/)
2. Criar novo projeto
3. Ativar Google+ API
4. Criar OAuth 2.0 credentials (Web application)
5. Copiar Client ID e Secret

### NextAuth Secret
```bash
openssl rand -base64 32
```

## 🐛 Troubleshooting

### Erro de conexão com API
- Verificar se backend está rodando na porta 3333
- Verificar NEXT_PUBLIC_API_URL está correto

### Erro de autenticação
- Verificar NEXTAUTH_SECRET está configurado
- Verificar JWT_SECRET no backend

### Erro de banco de dados
- Verificar se DATABASE_URL está correto
- Executar `pnpm prisma migrate dev` no backend

## 📞 Suporte

Entre em contato para dúvidas ou problemas: [Email/Contato]

## 📄 Licença

[Especificar licença]

---

**Desenvolvido com ❤️**
