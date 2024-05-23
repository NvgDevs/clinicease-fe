'use server'

import { api } from '@/app/lib/axios'

export interface GetPatientsResponse {
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

interface GetPatientsParams {
  pageIndex?: number | null
  patientName?: string | null
  email?: string | null
  cpf?: string | null
  phone?: string | null
}

export async function getPatients({
  patientName,
}: GetPatientsParams): Promise<GetPatientsResponse> {
  const response = await api.get<GetPatientsResponse>('/patients', {
    params: {
      patientName,
    },
  })

  return response.data
}
