export interface Empresa {
  id: string;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  descricao: string;
  quantidadeFuncionarios: number;
  setor: string;
  logo?: string;
  site?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Departamento {
  id: string;
  nome: string;
  gestor: string;
  quantidadeFuncionarios: number;
}

export interface Filial {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
}
