# 🚀 GUIA DE DEPLOYMENT - MAKERSTACK SAAS RH

## 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Conta no GitHub
- Conta no Vercel
- Google OAuth configurado
- Banco de dados configurado (Neon/Supabase)

---

## 🔧 Configuração Inicial

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/makerstack-saas.git
cd makerstack-saas
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Configurar Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite o arquivo com suas credenciais
nano .env.local
```

**Variáveis obrigatórias:**
- `NEXTAUTH_SECRET`: Gere com `openssl rand -base64 32`
- `NEXTAUTH_URL`: URL da aplicação (ex: https://seu-app.vercel.app)
- `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL`: URL do banco de dados

### 4. Preparar Banco de Dados

```bash
pnpm prisma migrate dev --name init
```

---

## 🌐 Deploy no Vercel

### Opção 1: Via Dashboard Vercel (Recomendado)

1. Acesse [https://vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Configure as variáveis de ambiente:
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (será preenchida automaticamente)
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `DATABASE_URL`
   - `OPENAI_API_KEY`
5. Clique em "Deploy"

### Opção 2: Via CLI Vercel

```bash
# Instale o CLI do Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Configurar Domínio Personalizado (opcional)

1. No dashboard Vercel, vá até "Settings > Domains"
2. Adicione seu domínio
3. Configure os DNS records conforme instruído

---

## 📦 GitHub Configuration

### 1. Criar Repositório GitHub

```bash
# Inicialize o repositório (se não houver)
git init

# Adicione o remote
git remote add origin https://github.com/seu-usuario/makerstack-saas.git

# Configure a branch padrão
git branch -M main

# Faça o primeiro commit
git add .
git commit -m "🚀 Initial commit - MakerStack SaaS RH"

# Faça push
git push -u origin main
```

### 2. Proteger a Branch Main

1. Vá para Settings > Branch Protection Rules
2. Clique em "Add rule"
3. Em "Branch name pattern", digite `main`
4. Habilite:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

### 3. Configurar GitHub Actions (CI/CD)

Crie o arquivo `.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run linter
        run: pnpm lint
      
      - name: Build project
        run: pnpm build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 4. Adicionar Secrets do GitHub

1. Vá para Settings > Secrets and variables > Actions
2. Clique em "New repository secret"
3. Adicione:
   - `VERCEL_TOKEN`: Token do Vercel (gere em Vercel Settings > Tokens)
   - `VERCEL_ORG_ID`: ID da organização Vercel
   - `VERCEL_PROJECT_ID`: ID do projeto Vercel

---

## 🧪 Testes Locais

### Executar em Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Testes Unitários

```bash
pnpm test
```

### Linting

```bash
pnpm lint
```

---

## 📝 Checklist de Deploy

- [ ] `.env.local` preenchido com todas as variáveis
- [ ] `NEXTAUTH_SECRET` gerado e configurado
- [ ] Google OAuth configurado
- [ ] Banco de dados Neon/Supabase criado e conectado
- [ ] `pnpm build` executa sem erros
- [ ] Todas as páginas HTML funcionando em `public/index/`
- [ ] Botões de filtro funcionando (candidatos, vagas, testes)
- [ ] Chat assistente respondendo
- [ ] Configurações salvando dados
- [ ] Repositório GitHub criado e configurado
- [ ] Secrets do GitHub adicionados
- [ ] Deploy Vercel realizado com sucesso

---

## 🔍 Verificação de Status

### Verificar Status do Deploy Vercel

```bash
# Listar deployments
vercel list

# Ver logs do último deploy
vercel logs --prod
```

### Verificar Saúde da Aplicação

```bash
# Health check
curl https://seu-app.vercel.app/api/health

# Verificar variáveis de ambiente
vercel env list
```

---

## 🐛 Troubleshooting

### Erro: "NEXTAUTH_URL not set"
**Solução**: Configure `NEXTAUTH_URL` no Vercel com a URL exata de produção

### Erro: "Database connection failed"
**Solução**: Verifique `DATABASE_URL` e confirmea que o banco está acessível

### Erro: "Google OAuth failed"
**Solução**: Confirme que os IDs e secrets do Google estão corretos e o domínio está autorizado

### Páginas HTML não carregam
**Solução**: Verifique que os arquivos estão em `public/index/` e as rotas estão corretas

---

## 📊 Monitoramento

### Configurar Alertas Vercel

1. Vá até Analytics no Vercel Dashboard
2. Configure notificações para:
   - Deployments falhados
   - Erro 500
   - Lentidão > 2s

### Logs em Produção

```bash
vercel logs --prod --tail
```

---

## 🚀 Próximos Passos

1. Configure backup automático do banco de dados
2. Implemente SSL/TLS (já incluído no Vercel)
3. Configure CDN para assets estáticos
4. Implemente rate limiting
5. Configure WAF (Web Application Firewall)
6. Monitore performance com Web Vitals

---

## 📞 Suporte

Para dúvidas sobre deploy:
- Documentação Vercel: https://vercel.com/docs
- Documentação Next.js: https://nextjs.org/docs
- Documentação Prisma: https://www.prisma.io/docs
