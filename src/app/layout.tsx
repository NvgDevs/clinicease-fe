import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme/theme-provider'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
