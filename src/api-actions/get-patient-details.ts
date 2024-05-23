'use server'

import { api } from '@/app/lib/axios'

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
  const response = await api.get<GetPatientDeatilsResponse>(
    `/patients/${patientId}`,
  )

  return response.data
}
