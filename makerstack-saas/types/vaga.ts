export type NivelVaga = 'ESTAGIO' | 'JUNIOR' | 'PLENO' | 'SENIOR';

export interface Beneficio {
  id: string;
  nome: string;
}

export interface Vaga {
  id: string;
  titulo: string;
  descricao: string;
  empresa: string;
  localizacao: string;
  salario: number;
  nivel: NivelVaga;
  modalidade: 'PRESENCIAL' | 'HIBRIDO' | 'REMOTO';
  tecnologias: string[];
  beneficios: Beneficio[];
  quantidadeCandidatos: number;
  status: 'ABERTA' | 'FECHADA';
  createdAt: Date;
  updatedAt: Date;
}