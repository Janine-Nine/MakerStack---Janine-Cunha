export interface EtapaOnboarding {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

export interface Onboarding {
  id: string;
  colaborador: string;
  cargo: string;
  gestorResponsavel: string;
  dataInicio: Date;
  etapas: EtapaOnboarding[];
  progresso: number;
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FINALIZADO';
}