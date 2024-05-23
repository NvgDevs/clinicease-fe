import { getPatientsMock } from './mock'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const name = searchParams.get('patientName')

  if (!name) {
    return Response.json(getPatientsMock)
  }

  const filteredPatients = getPatientsMock.patients.filter((patient) =>
    patient.name.includes(name),
  )

  return Response.json({ ...getPatientsMock, patients: filteredPatients })
}
