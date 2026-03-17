import { AppNavbar } from "@/components/layout/app-navbar"
import { Footer } from "@/components/ui/footer-demo"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-brand-50 via-white to-brand-100">
      <AppNavbar />
      <div className="pt-16 sm:pt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default AppLayout
