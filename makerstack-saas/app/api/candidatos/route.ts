import { NextResponse } from "next/server";

export async function GET() {

  const candidatos = [

    {
      id: 1,
      nome: "Maria Oliveira",
      idade: 24,
      cargo: "Frontend Developer",
      email: "maria@email.com",
      telefone: "(51) 99999-1111",
      cidade: "Porto Alegre",
      nivel: "Pleno",
      experiencia: "3 anos",
      match: "92%",
      status: "Em análise",
      personalidade: "ENTJ",
      disc: "D",
      eneagrama: "Tipo 3"
    },

    {
      id: 2,
      nome: "Lucas Martins",
      idade: 29,
      cargo: "Backend Developer",
      email: "lucas@email.com",
      telefone: "(11) 98888-2222",
      cidade: "São Paulo",
      nivel: "Sênior",
      experiencia: "6 anos",
      match: "88%",
      status: "Aprovado",
      personalidade: "INTJ",
      disc: "C",
      eneagrama: "Tipo 5"
    },

    {
      id: 3,
      nome: "Amanda Costa",
      idade: 22,
      cargo: "UX/UI Designer",
      email: "amanda@email.com",
      telefone: "(21) 97777-3333",
      cidade: "Rio de Janeiro",
      nivel: "Júnior",
      experiencia: "1 ano",
      match: "81%",
      status: "Entrevista",
      personalidade: "ENFP",
      disc: "I",
      eneagrama: "Tipo 7"
    },

    {
      id: 4,
      nome: "Rafael Lima",
      idade: 31,
      cargo: "Analista de Dados",
      email: "rafael@email.com",
      telefone: "(31) 96666-4444",
      cidade: "Belo Horizonte",
      nivel: "Pleno",
      experiencia: "4 anos",
      match: "86%",
      status: "Em análise",
      personalidade: "ISTJ",
      disc: "C",
      eneagrama: "Tipo 1"
    }

  ];

  return NextResponse.json({

    success: true,

    total: candidatos.length,

    candidatos

  });

}

  export async function POST(
  request: Request
) {

  const body = await request.json();

  const novoCandidato = {

    id: Math.floor(Math.random() * 9999),

    nome: body.nome,

    idade: body.idade,

    cargo: body.cargo,

    email: body.email,

    telefone: body.telefone,

    cidade: body.cidade,

    nivel: body.nivel,

    experiencia: body.experiencia,

    status: "Em análise",

    criadoEm: new Date()

  };

  return NextResponse.json({

    success: true,

    message:
      "Candidato cadastrado com sucesso.",

    candidato: novoCandidato

  });

}

// =========================================
// PUT - ATUALIZAR CANDIDATO
// =========================================

export async function PUT(
  request: Request
) {

  const body = await request.json();

  return NextResponse.json({

    success: true,

    message:
      "Candidato atualizado com sucesso.",

    candidatoAtualizado: body

  });

}

// =========================================
// DELETE - REMOVER CANDIDATO
// =========================================

export async function DELETE(
  request: Request
) {

  const body = await request.json();

  return NextResponse.json({

    success: true,

    message:
      `Candidato ${body.id} removido com sucesso.`

  });

}