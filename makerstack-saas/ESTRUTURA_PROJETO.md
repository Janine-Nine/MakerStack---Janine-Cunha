# 📁 Estrutura do Projeto MakerStack SaaS RH

## Organização de Pastas

```
makerstack-saas/
├── public/
│   ├── index/                          # Páginas HTML principais
│   │   ├── assests/
│   │   │   ├── styles/                 # Arquivos CSS
│   │   │   │   ├── global.css
│   │   │   │   ├── candidatos.css
│   │   │   │   ├── vagas.css
│   │   │   │   ├── testes.css
│   │   │   │   ├── organograma.css
│   │   │   │   ├── relatorio.css
│   │   │   │   ├── ChatAssistente.css
│   │   │   │   └── Configuracoes.css
│   │   │   └── scripts/                # Arquivos JavaScript
│   │   │       ├── candidatos.js
│   │   │       ├── vagas.js
│   │   │       ├── testes.js
│   │   │       ├── chat-assistente.js
│   │   │       └── configuracoes.js
│   │   ├── img/                        # Imagens e ícones
│   │   │   ├── logo.png
│   │   │   ├── marca.png
│   │   │   └── avatars/
│   │   ├── index.html                  # Página inicial
│   │   ├── dashboard.html
│   │   ├── candidatos.html             # ✅ Botões funcionais
│   │   ├── vagas.html                  # ✅ Botões e busca funcionais
│   │   ├── testes.html                 # ✅ Botões funcionais
│   │   ├── organograma.html            # ✅ Estrutura corrigida
│   │   ├── relatorio.html              # ✅ Estrutura corrigida
│   │   ├── ChatAssistente.html         # ✅ Chat funcional
│   │   └── Configuracoes.html          # ✅ Configurações funcionais
│   └── img/                            # Imagens gerais
│       ├── logo.png
│       ├── marca.png
│       └── avatars/
│
├── app/
│   ├── layout.tsx                      # Layout principal Next.js
│   ├── page.tsx                        # Página inicial
│   ├── api/                            # API routes
│   ├── dashboard/                      # Páginas dashboard
│   ├── components/                     # Componentes React
│   └── ...
│
├── prisma/
│   └── schema.prisma                   # Schema do banco de dados
│
├── services/                           # Serviços da aplicação
│   ├── api.ts
│   ├── authService.ts
│   ├── vagaService.ts
│   └── ...
│
├── types/                              # Types TypeScript
│   ├── usuario.ts
│   ├── vaga.ts
│   ├── empresa.ts
│   └── onboarding.ts
│
├── store/                              # Zustand stores
│   ├── useAuthStore.js
│   └── useJobStore.js
│
├── .env.local                          # Variáveis de ambiente (não versionar)
├── .env.example                        # Exemplo de variáveis
├── .gitignore                          # Git ignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── eslint.config.mjs
└── README.md
```

## 🚀 Funcionalidades Implementadas

### ✅ Candidatos (candidatos.html)
- Filtros por status: **Todos**, **Aprovados**, **Em análise**, **Entrevista**, **Rejeitados**
- Tabela com informações dos candidatos
- Botões de ação (Ver, E-mail)

### ✅ Vagas (vagas.html)
- Filtros por nível: **Todas**, **Júnior**, **Pleno**, **Sênior**
- Busca por título ou cargo
- Cards das vagas com informações detalhadas

### ✅ Testes (testes.html)
- Filtros por tipo: **Todos**, **DISC**, **Eneagrama**, **16 Personalidades**, **Customizado**
- Botão "Enviar Teste"
- Tabela com progresso dos testes

### ✅ Organograma (organograma.html)
- Estrutura organizacional com cards
- Informações de departamentos e colaboradores

### ✅ Relatórios (relatorio.html)
- Cards com métricas
- Botão para exportar PDF

### ✅ Chat Assistente (ChatAssistente.html)
- Interface de chat integrada
- Simulação de respostas do assistente IA
- Campo de input para mensagens

### ✅ Configurações (Configuracoes.html)
- Seções para dados da empresa
- Segurança
- Preferências do usuário

## 📝 Notas Técnicas

- **Scripts JavaScript**: Cada página HTML tem seu próprio script em `assests/scripts/`
- **Estilos CSS**: Estilos globais em `global.css` + estilos específicos por página
- **Navegação**: Links de navegação funcionam entre as páginas HTML
- **Responsividade**: Design mobile-first com CSS
- **Sem dependências externas**: Usando HTML puro, CSS e JavaScript vanilla

## 🔧 Como Usar

1. Abra qualquer arquivo `.html` em um navegador
2. Os botões de filtro funcionam dinamicamente filtrando os dados
3. A busca em vagas funciona em tempo real
4. O chat simulado resonde após 1 segundo

## 📦 Deploy

Para deploy em Vercel:
1. As páginas HTML são servidas como arquivos estáticos em `public/`
2. Configure `next.config.ts` para servir os arquivos estáticos
3. Faça deploy para Vercel conforme instruções abaixo
