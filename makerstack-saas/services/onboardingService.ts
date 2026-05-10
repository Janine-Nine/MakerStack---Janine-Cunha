import { api } from './api'

export interface Onboarding {
  nome: string
  cargo: string
  status: string
}

export async function listarOnboarding() {
  const response = await api.get('/onboarding')
  return response.data
}

export async function criarOnboarding(data: Onboarding) {
  const response = await api.post('/onboarding', data)
  return response.data
}

export async function atualizarStatus(id: number, status: string) {
  const response = await api.put(`/onboarding/${id}`, {
    status
  })

  return response.data
}