import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <Separator
        decorative={true}
        className="bg-gradient-to-r from-cyan-100 to-blue-100"
      />

      <div className="flex flex-1 flex-col gap-4 px-16 pt-10">
        <Outlet />
      </div>
    </div>
  )
}
