import type { Metadata } from 'next'
import './globals.css'
import Providers from './components/provider'

export const metadata: Metadata = {
  title: {
    template: '%s | ClinicEase',
    default: 'ClinicEase',
  },
  description: 'Sistema de Controle de Clinicas e Consultas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
