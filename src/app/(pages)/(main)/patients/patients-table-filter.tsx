'use client'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Search, X } from 'lucide-react'

export default function PatientsTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros: </span>
      <Input placeholder="Nome" className="h-8 w-auto" />
      <Input placeholder="Email" className="h-8 w-auto" />
      <Input placeholder="Cpf" className="h-8 w-auto" />
      <Input placeholder="Telefone" className="h-8 w-auto" />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" /> Filtrar
      </Button>
      <Button type="button" variant="outline" size="xs" onClick={() => {}}>
        <X className="mr-2 h-4 w-4" /> Limpar
      </Button>
    </form>
  )
}
