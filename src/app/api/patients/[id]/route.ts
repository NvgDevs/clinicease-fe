import { z } from 'zod'
import { patients } from '../mock'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const patientId = z.string().parse(params.id)

  const patient = patients.find((patient) => patient.id === patientId)

  return Response.json(patient)
}
