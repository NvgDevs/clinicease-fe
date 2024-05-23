import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { Skeleton } from '@/app/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/app/components/ui/table'

export function PatientDetailsSkeleton() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          Paciente: <Skeleton className="h-4 w-[70px]" />
        </DialogTitle>
        <DialogDescription>Detalhes do Paciente</DialogDescription>
      </DialogHeader>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Nome</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[70px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[120px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Endereço</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">CPF</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[90px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-4 w-[90px]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
