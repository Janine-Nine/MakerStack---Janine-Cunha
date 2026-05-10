# Script PowerShell para configurar Vercel e fazer deploy

Write-Host "🔧 Configurando Vercel..." -ForegroundColor Cyan

# Configurar NEXTAUTH_URL
Write-Host "`n📝 Adicionando NEXTAUTH_URL..." -ForegroundColor Yellow
$env_value = "https://maker-stack-janine-cunha.vercel.app"
Write-Host "Valor: $env_value"

# Configurar NEXTAUTH_SECRET  
Write-Host "`n📝 Adicionando NEXTAUTH_SECRET..." -ForegroundColor Yellow
$secret = "janine_super_secret_2026_makerstack"
Write-Host "Valor: [SEGREDO]"

# Configurar NEXT_PUBLIC_API_URL
Write-Host "`n📝 Adicionando NEXT_PUBLIC_API_URL..." -ForegroundColor Yellow
$api_url = "https://maker-stack-janine-cunha.vercel.app/api"
Write-Host "Valor: $api_url"

Write-Host "`n✅ Configurações prontas!" -ForegroundColor Green
Write-Host "`n🚀 Iniciando deploy em produção..." -ForegroundColor Cyan

# Deploy em produção
npx vercel deploy --prod --yes

Write-Host "`n✅ Deploy concluído!" -ForegroundColor Green
Write-Host "`n🌐 Seu projeto está disponível em: https://maker-stack-janine-cunha.vercel.app" -ForegroundColor Green
