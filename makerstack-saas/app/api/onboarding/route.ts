import { NextResponse } from "next/server";

export async function GET() {

  const onboarding = [

    {
      etapa: "Documentação",
      status: "Concluído"
    },

    {
      etapa: "Contrato",
      status: "Em andamento"
    },

    {
      etapa: "Integração",
      status: "Pendente"
    },

    {
      etapa: "Treinamento",
      status: "Pendente"
    }

  ];

  return NextResponse.json({
    success: true,
    etapas: onboarding
  });

}

export async function POST(request: Request) {

  const body = await request.json();

  return NextResponse.json({

    success: true,

    message:
      "Novo onboarding cadastrado com sucesso.",

    data: body

  });

}