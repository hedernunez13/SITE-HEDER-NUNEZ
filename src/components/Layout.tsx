import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
