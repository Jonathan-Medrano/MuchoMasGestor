import { Outlet } from "react-router-dom"
import NavBarPublic from "@components/public/NavbarPublic"
import Footer from "@components/public/Footer"

export default function PublicLayout() {
  return (
    <>
      <NavBarPublic />
      <main className="flex flex-col min-h-screen w-full select-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
