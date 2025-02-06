import "../global.css"

import Footer from "@/app/ui/main/Footer"
import { Navigation } from "@/app/ui/main/Navbar"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col overflow-hidden">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}