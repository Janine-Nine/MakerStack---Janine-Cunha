import { NextResponse } from 'next/server';

let users = [];

export async function POST(req) {
  const { email, password, action } = await req.json();

  if (action === 'register') {
    const exists = users.find(u => u.email === email);

    if (exists) {
      return NextResponse.json({ error: 'Usuário já existe' }, { status: 400 });
    }

    const user = { id: Date.now(), email, password };
    users.push(user);

    return NextResponse.json({ message: 'Usuário criado', user });
  }

  if (action === 'login') {
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login OK', user });
  }

  return NextResponse.json({ error: 'Ação inválida' }, { status: 400 });
}