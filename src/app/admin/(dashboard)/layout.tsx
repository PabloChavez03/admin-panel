import type { Metadata } from 'next'
import { SideMenu } from '../../components/widgets/SideMenu'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin panel by yours products'
}

export default function AdminLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <SideMenu />
      {children}
    </div>
  )
}
