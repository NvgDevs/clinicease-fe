import { api } from '@/data/api'
import { type GetPatientsResponse } from '@/data/types/patient'

export async function getPatients(): Promise<GetPatientsResponse> {
  const response = await api('/patients', {
    next: {
      revalidate: 60,
    },
  })

  const data = await response.json()

  return data
}
