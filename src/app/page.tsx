import CodeExample from "@/app/ui/main/CodeExample"
import Cta from "@/app/ui/main/Cta"
import Features from "@/app/ui/main/Features"
import Footer from "@/app/ui/main/Footer"
import { GlobalDatabase } from "@/app/ui/main/GlobalDatabase"
import Hero from "@/app/ui/main/Hero"
import LogoCloud from "@/app/ui/main/LogoCloud"
import { Navbar } from "@/app/ui/main/Navbar"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <LogoCloud />
      <GlobalDatabase />
      <CodeExample />
      <Features />
      <Cta />
      <Footer />
    </main>
  )
}
