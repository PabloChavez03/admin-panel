import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SideMenu } from './components/widgets/SideMenu'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin panel by yours products'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <SideMenu />
          {children}
        </div>
      </body>
    </html>
  )
}
