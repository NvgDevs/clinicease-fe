import { api } from '@/data/api'

interface GetPatientsResponse {
  patients: Array<{
    id: string
    name: string
    phone: string
    cpf: string
    birthDate: string
  }>
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getPatients(): Promise<GetPatientsResponse> {
  const response = await api('/patients', {
    next: {
      revalidate: 60,
    },
  })

  const data = await response.json()

  return data
}
