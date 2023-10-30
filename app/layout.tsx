import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FavoriteContextProvider } from '@/context/FavoriteContext'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans", })

export const metadata: Metadata = {
  title: 'Movies Apps',
  description: 'List movies from https://api.themoviedb.org',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <FavoriteContextProvider>
        <body className={inter.className}>
          <main className="flex flex-col overflow-hidden">
            <NavBar />
              {children}
            <Footer />
          </main>
        </body>
      </FavoriteContextProvider>
    </html>
  )
}
