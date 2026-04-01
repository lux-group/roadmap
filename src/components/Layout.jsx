import { Outlet, ScrollRestoration } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <ScrollRestoration />
      <Sidebar />
      {/* Push content below mobile top bar */}
      <main className="flex-1 min-w-0 lg:pt-0 pt-16">
        <Outlet />
      </main>
    </div>
  )
}
