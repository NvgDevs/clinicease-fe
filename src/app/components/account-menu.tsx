'use client'

import { ChevronDown, Hospital, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export function AccountMenu() {
  const router = useRouter()

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            Trio Coco
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-auto">
          <DropdownMenuLabel>
            <span>Nathan Vech Balbino</span>
            <p className="text-sm font-normal text-muted-foreground">
              triococo@hotmail.com
            </p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Hospital className="mr-2 h-4 w-4" />
            <span>Perfil da clínica</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-rose-500 dark:text-rose-400"
            asChild
          >
            <button
              onClick={() => {
                router.push('/login')
              }}
              className="w-full"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}
