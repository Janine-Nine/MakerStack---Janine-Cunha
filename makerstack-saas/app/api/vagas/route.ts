import { NextResponse } from "next/server";

export async function GET() {

  const vagas = [

    {
      id: 1,
      titulo: "Desenvolvedor Full Stack",
      nivel: "Sênior",
      modelo: "Remoto",
      tipo: "CLT",
      salario: "R$ 8.000 - R$ 12.000",
      empresa: "Enviagora RH",
      candidatos: 12,
      status: "Aberta",
      localizacao: "Brasil",
      tecnologias: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL"
      ],
      descricao:
        "Atuação em plataforma SaaS de RH com IA."
    },

    {
      id: 2,
      titulo: "UX/UI Designer",
      nivel: "Pleno",
      modelo: "Híbrido",
      tipo: "CLT",
      salario: "R$ 5.000 - R$ 7.000",
      empresa: "Enviagora RH",
      candidatos: 8,
      status: "Em análise",
      localizacao: "São Paulo",
      tecnologias: [
        "Figma",
        "Design System",
        "UX Research"
      ],
      descricao:
        "Criação de interfaces modernas e acessíveis."
    },

    {
      id: 3,
      titulo: "QA Tester",
      nivel: "Júnior",
      modelo: "Remoto",
      tipo: "CLT",
      salario: "R$ 3.500 - R$ 4.500",
      empresa: "Enviagora RH",
      candidatos: 6,
      status: "Aberta",
      localizacao: "Brasil",
      tecnologias: [
        "Cypress",
        "Jest",
        "Testes Automatizados"
      ],
      descricao:
        "Garantir qualidade e estabilidade da plataforma."
    },

    {
      id: 4,
      titulo: "Analista de Dados",
      nivel: "Pleno",
      modelo: "Presencial",
      tipo: "CLT",
      salario: "R$ 6.000 - R$ 8.500",
      empresa: "Enviagora RH",
      candidatos: 15,
      status: "Aberta",
      localizacao: "Porto Alegre",
      tecnologias: [
        "Power BI",
        "SQL",
        "Python"
      ],
      descricao:
        "Análise estratégica orientada a dados."
    }

  ];

  return NextResponse.json({

    success: true,

    total: vagas.length,

    vagas

  });

}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { titulo, descricao, empresa } = body;

    const response = await fetch("http://localhost:3333/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titulo,
        description: descricao,
        companyId: empresa || "default-company-id", // Ajustar conforme necessário
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ success: true, vaga: data });
    } else {
      return NextResponse.json({ success: false, error: "Erro ao criar vaga" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Erro interno" }, { status: 500 });
  }
}

export async function PUT(
  request: Request
) {

  const body = await request.json();

  return NextResponse.json({

    success: true,

    message:
      "Vaga atualizada com sucesso.",

    vagaAtualizada: body

  });

}

export async function DELETE(
  request: Request
) {

  const body = await request.json();

  return NextResponse.json({

    success: true,

    message:
      `Vaga ${body.id} removida com sucesso.`

  });

}