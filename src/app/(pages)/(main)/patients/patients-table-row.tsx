'use client'

import { Button } from '@/app/components/ui/button'
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog'
import { TableCell, TableRow } from '@/app/components/ui/table'
import { Info, Pencil, Trash } from 'lucide-react'
import { useState } from 'react'
import PatientDetails from './patient-details'

export default function PatientsTableRow() {
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

          <PatientDetails isDetailOpen={isDetailOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-medium">Nathan Ferreira</TableCell>
      <TableCell className="font-medium">17 99140-7968</TableCell>
      <TableCell className="font-medium">444.888.666-93</TableCell>
      <TableCell className="font-medium">22/11/2000</TableCell>
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
