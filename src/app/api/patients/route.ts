import { getPatientsMock } from './mock'

export async function GET() {
  return Response.json(getPatientsMock)
}
