🏆 MakerStack SaaS RH + IA + Psicometria

Sistema SaaS moderno de Recursos Humanos com Inteligência Artificial, testes psicométricos e análise inteligente de candidatos.

Projeto desenvolvido com foco em recrutamento inteligente, automação de RH, experiência SaaS moderna e arquitetura escalável.

🚀 Visão Geral

O MakerStack SaaS RH é uma plataforma completa para recrutamento e gestão de talentos, combinando:

✅ Inteligência Artificial
✅ Testes Psicométricos
✅ Match Inteligente de Candidatos
✅ Dashboard Analítico
✅ Multi-tenant
✅ Upload de Currículos
✅ Relatórios em PDF
✅ Interface moderna estilo SaaS

A plataforma foi criada para empresas que desejam automatizar processos seletivos e tomar decisões baseadas em dados comportamentais e técnicos.

✨ Principais Funcionalidades
🤖 Inteligência Artificial Aplicada ao RH
Geração automática de Job Descriptions
Match inteligente entre vaga e candidato
Análise comportamental automática
Sugestão de contratação
Ranking de candidatos
Chat assistente de RH com IA
Recomendações estratégicas para recrutadores
🧠 Testes Psicométricos

Sistema próprio de testes comportamentais integrado à plataforma.

✅ Testes disponíveis
DISC
Eneagrama
16 Personalidades (MBTI-style)
Testes customizados
✅ Recursos
Aplicação online
Correção automática
Dashboard de resultados
Barras de progresso
Histórico completo
Relatórios comportamentais
📁 Estrutura do Projeto
makerstack-saas/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── vagas/
│   │   ├── candidatos/
│   │   ├── testes/
│   │   ├── relatorios/
│   │   ├── organograma/
│   │   ├── configuracoes/
│   │   └── chat/
│   │
│   ├── api/
│   │   ├── auth/
│   │   ├── chat/
│   │   ├── match/
│   │   ├── upload/
│   │   ├── pdf/
│   │   └── testes/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── dashboard/
│   ├── ui/
│   ├── charts/
│   ├── forms/
│   ├── psicometria/
│   └── chatbot/
│
├── public/
│   └── index/
│       ├── index.html
│       ├── dashboard.html
│       ├── candidatos.html
│       ├── vagas.html
│       ├── testes.html
│       ├── organograma.html
│       ├── relatorio.html
│       ├── ChatAssistente.html
│       ├── Configuracoes.html
│       │
│       ├── js/
│       ├── styles/
│       └── img/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── types/
├── utils/
├── services/
├── hooks/
├── context/
├── lib/
├── middleware.ts
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
📱 Páginas do Sistema
🏠 Dashboard (dashboard.html)

Painel principal da plataforma.

Recursos:
Cards de métricas
Vagas ativas
Match médio
Testes concluídos
Analytics em tempo real
Gráficos e indicadores
👥 Candidatos (candidatos.html)

Gestão completa de candidatos.

Funcionalidades:
✅ Busca em tempo real
✅ Filtros inteligentes
✅ Status dos candidatos
✅ Cards responsivos
✅ Match IA
✅ Histórico de testes
✅ Contato rápido via e-mail
Filtros:
Todos
Aprovados
Em análise
Entrevista
Rejeitados
💼 Vagas (vagas.html)

Gerenciamento de vagas de emprego.

Recursos:
Cadastro de vagas
Busca dinâmica
Filtros por senioridade
Botão de candidatura
Cards modernos
Descrição automática com IA
Categorias:
Júnior
Pleno
Sênior
🧪 Testes (testes.html)

Sistema psicométrico integrado.

Recursos:
Envio de testes
Acompanhamento de progresso
Correção automática
Resultados comportamentais
Dashboard de desempenho
Tipos:
DISC
Eneagrama
16 Personalidades
Customizados
🧬 Organograma (organograma.html)

Visualização da estrutura organizacional.

Recursos:
Hierarquia visual
Expandir/recolher setores
Estrutura de liderança
Busca por colaboradores
📊 Relatórios (relatorio.html)

Analytics e relatórios estratégicos.

Recursos:
Exportação PDF
Métricas de RH
Indicadores
Relatórios comportamentais
Dados estatísticos
💬 Chat Assistente (ChatAssistente.html)

Assistente virtual de RH.

Recursos:
Respostas automáticas
Simulação de IA
Sugestões inteligentes
Interface moderna
UX estilo chatbot SaaS
⚙️ Configurações (Configuracoes.html)

Gerenciamento do sistema.

Recursos:
Configuração da empresa
Preferências do usuário
Segurança
Alteração de senha
Persistência com localStorage
🛠️ Stack Tecnológica
Frontend
Next.js 14
React
TypeScript
Tailwind CSS
Framer Motion
HTML5
CSS3
JavaScript ES6+
Backend
Node.js
Next.js API Routes
Prisma ORM
Banco de Dados
PostgreSQL
Neon
Supabase
IA e Automação
OpenAI API
IA para RH
NLP
Match comportamental
Deploy & Infraestrutura
Vercel
GitHub
CI/CD
Multi-tenant architecture
🔐 Segurança
Autenticação segura
Multi-tenant
Proteção de rotas
Middleware de autenticação
Dados processados no backend
Variáveis protegidas
⚡ Instalação do Projeto
1️⃣ Clonar repositório
git clone https://github.com/seu-usuario/makerstack-saas.git

cd makerstack-saas
2️⃣ Instalar dependências
pnpm install
3️⃣ Configurar variáveis de ambiente

Crie o arquivo:

.env.local
Exemplo:
NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=seu-secret-aqui

DATABASE_URL="postgresql://..."

OPENAI_API_KEY="sua-chave-openai"

GOOGLE_CLIENT_ID="seu-id"

GOOGLE_CLIENT_SECRET="seu-secret"

NEXT_PUBLIC_API_URL=http://localhost:3000
4️⃣ Rodar migrations
pnpm prisma migrate dev
5️⃣ Iniciar projeto
pnpm dev

Acesse:

http://localhost:3000
🌐 Deploy no Vercel
Instalar CLI
npm install -g vercel
Login
vercel login
Deploy produção
vercel --prod
📡 Principais Endpoints
Método	Endpoint	Descrição
POST	/api/test	Salvar resultado psicométrico
POST	/api/chat	Chat IA
POST	/api/match	Match de candidatos
POST	/api/upload	Upload de currículo
POST	/api/pdf	Gerar relatório
POST	/api/auth	Autenticação
📊 Funcionalidades Implementadas
✅ Frontend
Layout responsivo
Sidebar SaaS
Dashboard moderno
Dark mode preparado
Design System organizado
✅ Sistema RH
Gestão de vagas
Gestão de candidatos
Gestão de testes
Organograma
Relatórios
✅ IA
Match inteligente
Sugestão de candidatos
Chat assistente
Recomendações automáticas
✅ Psicometria
DISC
Eneagrama
MBTI-style
Correção automática
📈 Próximas Evoluções
Integração com LinkedIn
Machine Learning customizado
Aplicativo mobile
Video entrevistas
Gamificação para candidatos
Dashboard analítico avançado
Integração com WhatsApp
Sistema de onboarding
🧱 Arquitetura

O projeto utiliza arquitetura modular baseada em features.

Estrutura:
Frontend desacoplado
APIs independentes
Componentização React
Prisma ORM
Serviços separados
Escalabilidade preparada
📚 Documentação
Documento	Descrição
QUICK_START.md	Início rápido
GUIA_DEPLOYMENT.md	Deploy completo
ESTRUTURA_PROJETO.md	Organização das pastas
API_DOCS.md	Documentação API
CLAUDE.md	Instruções IA/Copilot
🎯 Objetivo do Projeto

Criar uma plataforma SaaS de RH moderna capaz de automatizar processos seletivos com Inteligência Artificial e análise comportamental.

👩‍💻 Desenvolvido por

Janine Cunha
Desenvolvedora Full Stack • IA • Frontend • UX/UI

🚀 Status do Projeto
Status	Situação
MVP	✅ Completo
Frontend	✅ Finalizado
Backend	✅ Estruturado
IA	✅ Integrada
Deploy	✅ Preparado
Responsividade	✅ Completa
🏁 Considerações Finais

O MakerStack SaaS RH foi pensado como um produto real de mercado.

A arquitetura já está preparada para:

crescimento,
escalabilidade,
múltiplas empresas,
integração com IA,
expansão para novos módulos.

**Desenvolvido por:** Janine Cunha
**Projeto:** MakerStack SaaS RH