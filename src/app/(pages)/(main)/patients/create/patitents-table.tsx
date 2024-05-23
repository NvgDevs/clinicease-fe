'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'
import PatientsTableRow from '../patients-table-row'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getPatients } from '@/api-actions/get-patients'
import PatientsTableSkeleton from '../patients-table-skeleton'
import Pagination from '@/app/components/pagination'

export function PatientsTable() {
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
    <>
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
    </>
  )
}
