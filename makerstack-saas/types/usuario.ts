export type NivelUsuario = 'ADMIN' | 'RH' | 'GESTOR' | 'COLABORADOR';

export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha?: string;
  telefone: string;
  cargo: string;
  avatar?: string;
  nivel: NivelUsuario;
  ativo: boolean;
  ultimoLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PerfilUsuario {
  bio?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  habilidades: string[];
}