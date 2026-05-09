# ⚡ Quick Start - MakerStack SaaS RH

## 🚀 Iniciar em 5 Minutos

### 1. Preparar Ambiente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/makerstack-saas.git
cd makerstack-saas

# Execute o script de setup (Linux/Mac)
chmod +x setup.sh
./setup.sh

# Ou manualmente (Windows/todos):
pnpm install
cp .env.example .env.local
# Edite .env.local com suas credenciais
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 📖 Páginas Disponíveis

### HTML Estáticas (em `/public/index/`)
- **Dashboard**: `http://localhost:3000/index/dashboard.html`
- **Candidatos**: `http://localhost:3000/index/candidatos.html`
  - ✅ Botões de filtro funcionando
  - ✅ Tabela com dados dos candidatos
  
- **Vagas**: `http://localhost:3000/index/vagas.html`
  - ✅ Filtros por nível (Júnior, Pleno, Sênior)
  - ✅ Busca por título
  - ✅ Cards de vagas
  
- **Testes**: `http://localhost:3000/index/testes.html`
  - ✅ Filtros por tipo de teste
  - ✅ Botão \"Enviar Teste\"
  - ✅ Tabela de progresso
  
- **Organograma**: `http://localhost:3000/index/organograma.html`
  - ✅ Cards com estrutura organizacional
  
- **Relatórios**: `http://localhost:3000/index/relatorio.html`
  - ✅ Métricas em cards
  - ✅ Botão exportar PDF
  
- **Chat Assistente**: `http://localhost:3000/index/ChatAssistente.html`
  - ✅ Interface de chat funcional
  - ✅ Simulação de respostas IA
  
- **Configurações**: `http://localhost:3000/index/Configuracoes.html`
  - ✅ Formulários de configuração

### Rotas Next.js (aplicação)
- **Página Principal**: http://localhost:3000
- **Dashboard**: http://localhost:3000/dashboard
- **Login**: http://localhost:3000/login
- **Registro**: http://localhost:3000/register

---

## 🧪 Testar Funcionalidades

### ✅ Candidatos - Testar Filtros
1. Acesse http://localhost:3000/index/candidatos.html
2. Clique nos botões: \"Todos\", \"Aprovados\", \"Em análise\", \"Entrevista\", \"Rejeitados\"
3. Verifique se apenas os candidatos com o status selecionado aparecem

### ✅ Vagas - Testar Filtros e Busca
1. Acesse http://localhost:3000/index/vagas.html
2. Clique em \"Júnior\", \"Pleno\", \"Sênior\" - verifique filtragem
3. Digite no campo de busca (ex: \"Frontend\") - verifique busca em tempo real
4. Clique em \"Me candidatar\" - deve redirecionar para testes

### ✅ Testes - Testar Filtros
1. Acesse http://localhost:3000/index/testes.html
2. Clique em \"DISC\", \"Eneagrama\", \"16 Personalidades\", \"Customizado\"
3. Verifique se os testes são filtrados corretamente
4. Clique em \"+ Enviar Teste\" - deve exibir alerta

### ✅ Chat Assistente
1. Acesse http://localhost:3000/index/ChatAssistente.html
2. Digite uma mensagem no campo de input
3. Pressione Enter ou clique em \"Enviar\"
4. O assistente deve responder após 1 segundo

### ✅ Configurações
1. Acesse http://localhost:3000/index/Configuracoes.html
2. Preencha os campos
3. Clique em \"Salvar\" - deve exibir mensagem de sucesso

---

## 🔧 Variáveis de Ambiente Essenciais

```bash
# Obrigatórias:
NEXTAUTH_SECRET=gerada-com-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=seu-id-aqui
GOOGLE_CLIENT_SECRET=seu-secret-aqui
DATABASE_URL=sua-url-de-banco

# Opcionais:
OPENAI_API_KEY=sua-chave-openai
NEXT_PUBLIC_API_URL=http://localhost:3333
```

---

## 📊 Estructura de Arquivos Importante

```
public/index/
├── index.html
├── candidatos.html          ✅ Funcionando
├── vagas.html               ✅ Funcionando
├── testes.html              ✅ Funcionando
├── organograma.html         ✅ Funcionando
├── relatorio.html           ✅ Funcionando
├── ChatAssistente.html      ✅ Funcionando
├── Configuracoes.html       ✅ Funcionando
├── assests/
│   ├── styles/              (CSS)
│   └── scripts/             (JavaScript)
└── img/                     (Imagens)
```

---

## 🐛 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| \"Cannot find module\" | Execute `pnpm install` |
| Erro 404 nas páginas HTML | Verifique se os arquivos estão em `public/index/` |
| Botões não funcionam | Verifique console do navegador (F12) |
| Erro NEXTAUTH | Configure `NEXTAUTH_SECRET` e `NEXTAUTH_URL` |
| Porta 3000 em uso | Use `pnpm dev -- -p 3001` |

---

## 🚀 Deploy Rápido no Vercel

```bash
# Instale CLI do Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

---

## 📝 Próximos Passos

1. ✅ Testar todas as páginas localmente
2. ✅ Configurar variáveis de ambiente
3. ✅ Testar login com Google
4. ✅ Fazer commit inicial no GitHub
5. ✅ Deploy no Vercel
6. ✅ Compartilhar link de produção

---

## 💡 Dicas

- Use `pnpm build && pnpm start` para simular produção localmente
- Abra Dev Tools (F12) para ver logs e erros
- Limpe cache do navegador se tiver problemas
- Reinicie o servidor se modificar variáveis de ambiente

---

## 📞 Suporte

Documentação completa: Veja `GUIA_DEPLOYMENT.md` e `ESTRUTURA_PROJETO.md`
