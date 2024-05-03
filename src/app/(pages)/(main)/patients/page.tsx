'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'
import PatientsTableFilter from './patients-table-filter'
import PatientsTableRow from './patients-table-row'
import Pagination from '@/app/components/pagination'

export default function Patitents() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>

      <div className="space-y-2.5">
        <PatientsTableFilter />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Data de Nascimento</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from(new Array(10)).map((_, index) => (
                <PatientsTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination
          pageIndex={0}
          totalCount={21}
          perPage={10}
          onPageChange={() => {}}
        />
      </div>
    </div>
  )
}
