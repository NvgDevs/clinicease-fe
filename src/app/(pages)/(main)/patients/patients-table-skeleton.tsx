import { Button } from '@/app/components/ui/button'
import { Skeleton } from '@/app/components/ui/skeleton'
import { TableCell, TableRow } from '@/app/components/ui/table'
import { Info, Pencil, Trash } from 'lucide-react'

export default function PatientsTableSkeleton() {
  return Array.from({ length: 10 }).map((_, index) => {
    return (
      <TableRow key={index}>
        <TableCell className="w-[64px]">
          <Button disabled size="xs" variant="outline">
            <Info className="h-4 w-4" />
            <span className="sr-only">Detalhes do paciente</span>
          </Button>
        </TableCell>
        <TableCell className="w-[140px]">
          <Skeleton className="h-4 w-[130px]" />
        </TableCell>
        <TableCell className="w-[140px]">
          <Skeleton className="h-4 w-[130px]" />
        </TableCell>
        <TableCell className="w-[140px]">
          <Skeleton className="h-4 w-[130px]" />
        </TableCell>
        <TableCell className="w-[140px]">
          <Skeleton className="h-4 w-[130px]" />
        </TableCell>
        <TableCell className="flex justify-end gap-2 font-medium">
          <Button disabled size="xs" variant="outline">
            <Trash className="h-4 w-4" />
            <span className="sr-only">Deletar paciente</span>
          </Button>
          <Button disabled size="xs" variant="outline">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Deletar paciente</span>
          </Button>
        </TableCell>
      </TableRow>
    )
  })
}
