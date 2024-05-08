export interface PatientData {
  id: string
  name: string
  phone: string
  email: string
  address: string
  cpf: string
  birthDate: string
}

export interface GetPatientsResponse {
  patients: PatientData[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}
