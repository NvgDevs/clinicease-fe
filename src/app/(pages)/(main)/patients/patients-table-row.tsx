import { Button } from '@/app/components/ui/button'
import { TableCell, TableRow } from '@/app/components/ui/table'
import { Search } from 'lucide-react'

export default function PatientsTableRow() {
  return (
    <TableRow>
      <TableCell className="font-medium">Nathan Ferreira</TableCell>
      <TableCell className="font-medium">17 99140-7968</TableCell>
      <TableCell className="font-medium">444.888.666-93</TableCell>
      <TableCell className="font-medium">22/11/2000</TableCell>
      <TableCell className="font-medium">
        <Button size="xs" variant="outline">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do paciente</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
