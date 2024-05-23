import { Header } from '@/app/components/header'
import SuspenseWrapper from '@/app/components/suspense-wrapper'
import { type ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 p-8 pt-6">
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </div>
    </div>
  )
}
