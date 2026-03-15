import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import PageTransition from "../ui/PageTransition"

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
