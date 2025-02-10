import "../global.css"

import { Navbar } from "@/app/ui/authenticated/navigation/Navbar"
import { Submenu } from "@/app/ui/authenticated/navigation/Submenu"

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Submenu />
        <main>
          <div className="relative">
            <div className="p-6 sm:px-6 lg:px-20">
              {children}
            </div>
          </div>
        </main>
    </div>
  )
}