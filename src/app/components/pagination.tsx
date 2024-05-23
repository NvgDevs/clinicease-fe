'use client'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './ui/pagination'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => void
}

export default function Pagination({
  pageIndex,
  totalCount,
  perPage,
  // onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  function onPageChange(page: number) {
    console.log(page)
  }

  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items
      </span>

      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-sm font-medium">
              Página {pageIndex + 1} de {pages}
            </div>

            <div className="flex items-center gap-2">
              <PaginationLink
                onClick={() => {
                  onPageChange(0)
                }}
                disabled={pageIndex === 0}
              >
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">Primeira página</span>
              </PaginationLink>

              <PaginationPrevious
                onClick={() => {
                  onPageChange(pageIndex - 1)
                }}
                disabled={pageIndex === 0}
              />

              <PaginationNext
                onClick={() => {
                  onPageChange(pageIndex + 1)
                }}
                disabled={pages <= pageIndex + 1}
              />

              <PaginationLink
                onClick={() => {
                  onPageChange(pages - 1)
                }}
                disabled={pages <= pageIndex + 1}
              >
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Última página</span>
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
