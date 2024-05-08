'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      {...rest}
      data-current={pathname.includes(rest.href.toString())}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    >
      {children}
    </Link>
  )
}
