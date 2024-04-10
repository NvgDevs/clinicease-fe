'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <Link
      {...rest}
      data-current={pathname === rest.href}
      className="data-[current=true]:text-foreground hover:text-foreground text-muted-foreground flex items-center gap-1.5 text-sm font-medium"
    >
      {children}
    </Link>
  )
}
