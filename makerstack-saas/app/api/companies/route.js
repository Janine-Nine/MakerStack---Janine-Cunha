import { NextResponse } from 'next/server';

let companies = [];

export async function GET() {
  return NextResponse.json(companies);
}

export async function POST(req) {
  const { name, industry } = await req.json();

  if (!name) {
    return NextResponse.json({ error: 'Nome obrigatório' }, { status: 400 });
  }

  const company = {
    id: Date.now(),
    name,
    industry,
    createdAt: new Date(),
  };

  companies.push(company);

  return NextResponse.json(company);
}