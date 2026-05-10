#!/bin/bash
# Script para configurar variáveis de ambiente no Vercel

echo "🔧 Configurando variáveis de ambiente no Vercel..."

# Adicionar NEXTAUTH_URL para Production
npx vercel env add NEXTAUTH_URL production preview --yes <<EOF
https://maker-stack-janine-cunha.vercel.app
EOF

# Adicionar NEXTAUTH_SECRET para Production
npx vercel env add NEXTAUTH_SECRET production preview --yes <<EOF
janine_super_secret_2026_makerstack
EOF

# Adicionar NEXT_PUBLIC_API_URL para Production
npx vercel env add NEXT_PUBLIC_API_URL production preview --yes <<EOF
https://maker-stack-janine-cunha.vercel.app/api
EOF

echo "✅ Variáveis configuradas com sucesso!"
echo "🚀 Iniciando deploy em produção..."

npx vercel deploy --prod --yes

echo "✅ Deploy concluído!"
echo "🌐 Seu projeto está disponível em: https://maker-stack-janine-cunha.vercel.app"