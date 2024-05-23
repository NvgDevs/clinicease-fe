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
import { getPatients } from '@/api-actions/get-patients'
import { Button } from '@/app/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import PatientsTableSkeleton from './patients-table-skeleton'
import { useSearchParams } from 'next/navigation'

export default function Patitents() {
  const searchParams = useSearchParams()

  const patientName = searchParams.get('patientName')
  const email = searchParams.get('email')
  const cpf = searchParams.get('cpf')
  const phone = searchParams.get('phone')

  const { data: result, isLoading: isLoadingPatients } = useQuery({
    queryKey: ['patients', patientName, email, cpf, phone],
    queryFn: async () => await getPatients({ patientName, email, cpf, phone }),
  })

  function handlePaginate(pageIndex: number) {
    console.log('paginate')
  }

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
              {isLoadingPatients && <PatientsTableSkeleton />}
              {result?.patients.map((patient) => (
                <PatientsTableRow key={patient.id} patient={patient} />
              ))}
            </TableBody>
          </Table>
        </div>

        {result && (
          <Pagination
            pageIndex={result.meta.pageIndex}
            totalCount={result.meta.totalCount}
            perPage={result.meta.perPage}
            onPageChange={handlePaginate}
          />
        )}
      </div>
    </div>
  )
}
