import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Sharanabasavaraj',
  description: 'Professional portfolio showcasing my work and skills',
  keywords: ['portfolio', 'developer', 'web development', 'software engineer', "Data science"],
  authors: [{ name: 'Sharanabasavaraj' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: 'var(--bg-50)', color: 'var(--foreground)' }}>
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: 'var(--bg-50)', color: 'var(--foreground)' }}>
        {children}
      </body>
    </html>
  )
}