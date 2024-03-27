import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClinicEase',
  description: 'Sistema de Controle de Clinicas e Consultas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary">{children}</body>
    </html>
  )
}
