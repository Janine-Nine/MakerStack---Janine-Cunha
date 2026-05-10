import { api } from './api'

export interface LoginData {
  email: string
  senha: string
}

export async function login(data: LoginData) {
  const response = await api.post('/auth', data)
  return response.data
}

export async function logout() {
  localStorage.removeItem('token')
}

export async function getProfile() {
  const response = await api.get('/auth/profile')
  return response.data
}