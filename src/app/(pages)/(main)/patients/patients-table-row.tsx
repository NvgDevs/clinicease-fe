'use client'

import { Button } from '@/app/components/ui/button'
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog'
import { TableCell, TableRow } from '@/app/components/ui/table'
import { Info, Pencil, Trash } from 'lucide-react'
import { Suspense, useState } from 'react'
import PatientDetails from './patient-details'
import { PatientDetailsSkeleton } from './patient.details-skeleton'

interface PatientsTableRowProps {
  patient: {
    id: string
    name: string
    phone: string
    cpf: string
    birthDate: string
  }
}

export default function PatientsTableRow({ patient }: PatientsTableRowProps) {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false)

  return (
    <TableRow>
      <TableCell className="font-medium">
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogTrigger asChild>
            <Button size="xs" variant="outline">
              <Info className="h-4 w-4" />
              <span className="sr-only">Detalhes do paciente</span>
            </Button>
          </DialogTrigger>

          {isDetailOpen && (
            <Suspense fallback={<PatientDetailsSkeleton />}>
              <PatientDetails patientId={patient.id} />
            </Suspense>
          )}
        </Dialog>
      </TableCell>
      <TableCell className="font-medium">{patient.name}</TableCell>
      <TableCell className="font-medium">{patient.name}</TableCell>
      <TableCell className="font-medium">{patient.cpf}</TableCell>
      <TableCell className="font-medium">{patient.birthDate}</TableCell>
      <TableCell className="flex justify-end gap-2 font-medium">
        <Button size="xs" variant="outline">
          <Trash className="h-4 w-4" />
          <span className="sr-only">Deletar paciente</span>
        </Button>
        <Button size="xs" variant="outline">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Deletar paciente</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
