import { env } from '../env'

export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = baseUrl + path

  return await fetch(url, init)
}
