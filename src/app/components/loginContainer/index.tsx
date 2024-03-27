import Image from 'next/image'
import { type ReactNode } from 'react'

interface LoginContainerProps {
  children: ReactNode
}

export function LoginContainer({ children }: LoginContainerProps) {
  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden lg:block lg:flex lg:items-center lg:justify-center lg:py-12">
        <Image
          src="/assets/images/ClinicEase_Logo.png"
          alt="Image"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
