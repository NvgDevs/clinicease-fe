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
import { type Metadata } from 'next'
import { getPatients } from '@/api-actions/get-patients'
import { Button } from '@/app/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pacientes',
}

export default async function Patitents() {
  const { patients, meta } = await getPatients()

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
              {patients.map((patient) => (
                <PatientsTableRow key={patient.id} patient={patient} />
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination
          pageIndex={meta.pageIndex}
          totalCount={meta.totalCount}
          perPage={meta.perPage}
          // onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
