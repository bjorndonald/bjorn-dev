import Navbar from '@/app/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from './Footer'

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Bjorn-Donald  Bassey',
  description: 'Dev to the stars ⭐⭐⭐',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container px-4 relative mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}
