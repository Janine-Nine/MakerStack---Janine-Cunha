#!/bin/bash

# ============================================
# SCRIPT DE INICIALIZAÇÃO RÁPIDA
# MakerStack SaaS RH
# ============================================

echo \"🚀 Iniciando MakerStack SaaS RH...\"
echo \"\"

# Cores
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Verificar se pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo -e \"${RED}❌ pnpm não está instalado${NC}\"
    echo \"Instale com: npm install -g pnpm\"
    exit 1
fi

echo -e \"${GREEN}✓ pnpm encontrado${NC}\"

# Verificar se .env.local existe
if [ ! -f .env.local ]; then
    echo -e \"${YELLOW}⚠️  .env.local não encontrado${NC}\"
    echo \"Criando .env.local a partir de .env.example...\"
    cp .env.example .env.local
    echo -e \"${YELLOW}⚠️  Edite .env.local com suas credenciais${NC}\"
    echo \"Pressione Enter para continuar...\"
    read -r
fi

# Instalar dependências
echo \"\"
echo -e \"${YELLOW}📦 Instalando dependências...${NC}\"
pnpm install

# Gerar Prisma Client
echo \"\"
echo -e \"${YELLOW}🗄️  Gerando Prisma Client...${NC}\"
pnpm prisma generate

# Build
echo \"\"
echo -e \"${YELLOW}🔨 Compilando projeto...${NC}\"
pnpm build

# Mensagens finais
echo \"\"
echo -e \"${GREEN}✅ Projeto pronto para desenvolvimento!${NC}\"
echo \"\"
echo \"Para iniciar o servidor de desenvolvimento, execute:\"
echo -e \"${YELLOW}pnpm dev${NC}\"
echo \"\"
echo \"Em seguida, acesse:\"
echo -e \"${YELLOW}http://localhost:3000${NC}\"
