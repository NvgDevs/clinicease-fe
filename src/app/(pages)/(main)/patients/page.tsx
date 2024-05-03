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
import PatientsTableSkeleton from './patients-table-skeleton'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pacientes',
}

export default function Patitents() {
  const isLoadingPatients = false

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>

      <div className="space-y-2.5">
        <PatientsTableFilter />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Nome</TableHead>
                <TableHead className="w-[140px]">Telefone</TableHead>
                <TableHead className="w-[140px]">CPF</TableHead>
                <TableHead className="w-[140px]">Data de Nascimento</TableHead>
                <TableHead className="w-[64px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingPatients && <PatientsTableSkeleton />}
              {!isLoadingPatients &&
                Array.from(new Array(10)).map((_, index) => (
                  <PatientsTableRow key={index} />
                ))}
            </TableBody>
          </Table>
        </div>

        <Pagination
          pageIndex={0}
          totalCount={21}
          perPage={10}
          // onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
