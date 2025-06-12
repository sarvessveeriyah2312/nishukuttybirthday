import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Romantic Birthday Website',
  description: 'A beautiful birthday celebration for someone special',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}