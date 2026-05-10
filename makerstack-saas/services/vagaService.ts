import { api } from './api'

export interface Vaga {
  titulo: string
  descricao: string
  salario: string
  modelo: string
  senioridade: string
}

export async function listarVagas() {
  const response = await api.get('/vagas')
  return response.data
}

export async function criarVaga(vaga: Vaga) {
  const response = await api.post('/vagas', vaga)
  return response.data
}

export async function deletarVaga(id: number) {
  const response = await api.delete(`/vagas/${id}`)
  return response.data
}