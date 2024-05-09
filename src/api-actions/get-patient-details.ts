import { api } from '@/data/api'

interface GetPatientsResponse {
  patient: {
    id: string
    name: string
    phone: string
    email: string
    address: string
    cpf: string
    birthDate: string
  }
}

export async function getPatientDetails(
  patientId: string,
): Promise<GetPatientsResponse> {
  const response = await api(`/patients/${patientId}`, {
    next: {
      revalidate: 60,
    },
  })

  const data = await response.json()

  return data
}
