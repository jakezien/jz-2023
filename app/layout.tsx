import './globals.css'
import type { Metadata } from 'next'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jake Zien',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en h-full" style={{"height":"100%"}}>
      <body className="text-stone-800 h-full">
        <main className='h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
