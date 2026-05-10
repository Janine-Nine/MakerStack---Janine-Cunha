import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  
  const protectedRoutes = [
    '/dashboard',
    '/dashboard/vagas',
    '/dashboard/candidatos',
    '/dashboard/testes',
    '/dashboard/organograma',
    '/dashboard/onboarding',
    '/dashboard/relatorios',
    '/dashboard/empresa',
    '/dashboard/pdf',
    '/chat',
    '/configuracoes'
  ]
  
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(route + '/')
  )

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/chat/:path*',
    '/configuracoes/:path*'
  ],
}