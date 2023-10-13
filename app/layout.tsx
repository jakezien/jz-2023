import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Jake Zien',
  // description: 'Generated by create next app',
}
const inter = Inter({weight:['400', '600'], subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en h-full" style={{"height":"100%"}}>
      <body className={"text-stone-800 h-full bg-stone-100 " + inter.className}>
        <main className='h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
