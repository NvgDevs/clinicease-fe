'use client'

import { getPatientDetails } from '@/api-actions/get-patient-details'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/app/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import { PatientDetailsSkeleton } from './patient.details-skeleton'

export interface PatientDetailsProps {
  patientId: string
}

export default function PatientDetails({ patientId }: PatientDetailsProps) {
  const { data: patient, isLoading: isLoadingPatient } = useQuery({
    queryKey: ['patient-dateils', patientId],
    queryFn: async () => await getPatientDetails(patientId),
  })

  return (
    <DialogContent>
      {isLoadingPatient && <PatientDetailsSkeleton />}
      {patient && (
        <>
          <DialogHeader>
            <DialogTitle>Paciente: {patient.name}</DialogTitle>
            <DialogDescription>Detalhes do Paciente</DialogDescription>
          </DialogHeader>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Nome</TableCell>
                <TableCell className="flex justify-end">
                  {patient.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Email</TableCell>
                <TableCell className="flex justify-end">
                  {patient.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Endereço
                </TableCell>
                <TableCell className="flex justify-end">
                  {patient.address}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">CPF</TableCell>
                <TableCell className="flex justify-end">
                  {patient.cpf}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  {patient.phone}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      )}
    </DialogContent>
  )
}
