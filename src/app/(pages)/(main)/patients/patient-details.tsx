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

export interface PatientDetailsProps {
  isDetailOpen: boolean
}

export default function PatientDetails({ isDetailOpen }: PatientDetailsProps) {
  if (!isDetailOpen) return

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Paciente: Nathan Ferreira</DialogTitle>
        <DialogDescription>Detalhes do Paciente</DialogDescription>
      </DialogHeader>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Nome</TableCell>
            <TableCell className="flex justify-end">Nathan Ferreira</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              nathanferreira@hotmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Endereço</TableCell>
            <TableCell className="flex justify-end">
              Rua Amendoim Salgado, 116 - Bairro Pastel Doce
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">CPF</TableCell>
            <TableCell className="flex justify-end">444.666.888-96</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">17 99140-7966</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DialogContent>
  )
}
