"use client";

import AppLayout from "@/components/AppLayout";
import OrganogramaCard from "@/components/OrganogramaCard";

const setores = [
  {
    setor: "CEO",
    responsavel: "Camilly",
    colaboradores: 2
  },
  {
    setor: "Tecnologia",
    responsavel: "Lucas Ferreira",
    colaboradores: 18
  },
  {
    setor: "RH",
    responsavel: "Amanda Costa",
    colaboradores: 9
  },
  {
    setor: "Marketing",
    responsavel: "Juliana Lima",
    colaboradores: 7
  },
  {
    setor: "Financeiro",
    responsavel: "Carla Oliveira",
    colaboradores: 5
  }
];
export default function OrganogramaPage() {

  return (

    <AppLayout
      title="Organograma"
      subtitle="Estrutura organizacional"
    >

      <div className="organograma-grid">

        {setores.map((item, index) => (
           <OrganogramaCard
            key={index}
            setor={item.setor}
            responsavel={item.responsavel}
            colaboradores={item.colaboradores}
          />

        ))}

      </div>

    </AppLayout>

  );
}

