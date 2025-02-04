import type { Metadata } from "next"
import "../global.css"
import { siteConfig } from "../siteConfig"

import { Sidebar } from "@/app/ui/navigation/Sidebar"

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto max-w-screen-2xl">
        <Sidebar />
        <main className="lg:pl-72">
          <div className="relative">
            <div className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7">
              {children}
            </div>
          </div>
        </main>
    </div>
  )
}