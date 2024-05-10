'use server'

import { api } from '@/data/api'

interface GetPatientDeatilsResponse {
  id: string
  name: string
  phone: string
  email: string
  address: string
  cpf: string
  birthDate: string
}

export async function getPatientDetails(
  patientId: string,
): Promise<GetPatientDeatilsResponse> {
  const response = await api(`/patients/${patientId}`, {
    next: {
      revalidate: 60,
    },
  })

  const data = await response.json()

  return data
}
