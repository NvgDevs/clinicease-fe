'use client'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Search, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const patientFilterSchema = z.object({
  patientName: z.string().optional(),
  email: z.string().optional(),
  cpf: z.string().optional(),
  phone: z.string().optional(),
})

type PatientFilterSchema = z.infer<typeof patientFilterSchema>

export default function PatientsTableFilter() {
  const searchParams = useSearchParams()

  const router = useRouter()
  const pathname = usePathname()

  const patientName = searchParams.get('patientName')
  const email = searchParams.get('email')
  const cpf = searchParams.get('cpf')
  const phone = searchParams.get('phone')

  const { register, handleSubmit, reset } = useForm<PatientFilterSchema>({
    resolver: zodResolver(patientFilterSchema),
    defaultValues: {
      patientName: patientName ?? '',
      email: email ?? '',
      cpf: cpf ?? '',
      phone: phone ?? '',
    },
  })

  function handleFilter({
    patientName,
    email,
    cpf,
    phone,
  }: PatientFilterSchema) {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    )

    if (patientName) {
      currentSearchParams.set('patientName', patientName)
    } else {
      currentSearchParams.delete('patientName')
    }

    if (email) {
      currentSearchParams.set('email', email)
    } else {
      currentSearchParams.delete('email')
    }

    if (cpf) {
      currentSearchParams.set('cpf', cpf)
    } else {
      currentSearchParams.delete('cpf')
    }

    if (phone) {
      currentSearchParams.set('phone', phone)
    } else {
      currentSearchParams.delete('phone')
    }

    const newSearchParams = currentSearchParams.toString()

    router.push(`${pathname}?${newSearchParams}`)
  }

  function handleClearFilters() {
    reset({
      patientName: '',
      email: '',
      cpf: '',
      phone: '',
    })

    router.push(pathname)
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros: </span>
      <Input
        placeholder="Nome"
        className="h-8 w-auto"
        {...register('patientName')}
      />
      <Input
        placeholder="Email"
        className="h-8 w-auto"
        {...register('email')}
      />
      <Input placeholder="Cpf" className="h-8 w-auto" {...register('cpf')} />
      <Input
        placeholder="Telefone"
        className="h-8 w-auto"
        {...register('phone')}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" /> Filtrar
      </Button>
      <Button
        type="button"
        variant="outline"
        size="xs"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" /> Limpar
      </Button>
    </form>
  )
}
