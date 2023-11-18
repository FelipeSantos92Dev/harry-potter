import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harry Potter',
  description: 'Guia completo do mundo bruxo de Harry Potter'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="./favicon.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
