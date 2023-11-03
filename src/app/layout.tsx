import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work Experience Week',
  description: 'An app to help with Work Experience Week',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dwpdigital">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
