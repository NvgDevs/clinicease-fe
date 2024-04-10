import Image from 'next/image'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { ClipboardList, Users } from 'lucide-react'
import { ThemeToggle } from './theme/theme-toggle'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <div className="border-b">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center gap-6 px-8">
        <Image
          src="/assets/images/ClinicEase_Logo.png"
          alt="Image"
          width={60}
          height={60}
          quality={100}
        />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-4 lg:gap-6">
          <NavLink href="/patients">
            <Users className="h-4 w-4" />
            Pacientes
          </NavLink>
          <NavLink href="/appointments">
            <ClipboardList className="h-4 w-4" />
            Consultas
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
