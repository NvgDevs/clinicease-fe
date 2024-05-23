import { Suspense } from 'react'

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}

export default SuspenseWrapper
