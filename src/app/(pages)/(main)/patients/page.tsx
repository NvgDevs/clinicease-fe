'use client'

import PatientsTableFilter from './patients-table-filter'
import { Button } from '@/app/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { PatientsTable } from './create/patitents-table'

export default function Patitents() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
        <Link href="/patients/create">
          <Button variant="default">
            <PlusCircle className="mr-2 h-4 w-4" /> Novo paciente
          </Button>
        </Link>
      </div>

      <div className="space-y-2.5">
        <PatientsTableFilter />
        <PatientsTable />
      </div>
    </div>
  )
}
