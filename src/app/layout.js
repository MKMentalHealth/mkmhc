import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MK Mental Health',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <main className={`${inter.className} bg-blue-800`}>{children}</main>
    </html>
  )
}
