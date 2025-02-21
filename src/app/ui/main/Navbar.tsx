"use client"

import { siteConfig } from "@/app/siteConfig"
import { Button } from "@/components/Button"
import useScroll from "@/lib/use-scroll"
import { cx } from "@/lib/utils"
import {
  X,
  Menu,
} from "lucide-react"

import Link from "next/link"
import { Logos } from "./Logos"
import React from "react"

export function Navbar() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])


  return (
    <header
      className={cx(
        "fixed inset-x-3 top-2 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-52" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home.href} aria-label="Home">
            <span className="sr-only">Boviino</span>
            <div className="text-gray-900 dark:text-gray-200">
              <Logos.BoviinoLarge className="w-28 mb-2" />
            </div>
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link href={siteConfig.baseLinks.about.href}>
                <Button className="hidden font-semibold md:flex" variant="ghost">
                  {siteConfig.baseLinks.about.label}
                </Button>
              </Link>
              <Link href={siteConfig.baseLinks.pricing.href}>
                <Button className="hidden h-10 font-semibold md:flex" variant="ghost">
                  {siteConfig.baseLinks.pricing.label}
                </Button>
              </Link>
              <Link href={siteConfig.baseLinks.changelog.href}>
                <Button className="hidden h-10 font-semibold md:flex" variant="ghost">
                  {siteConfig.baseLinks.changelog.label}
                </Button>
              </Link>
            </div>
          </nav>
          <div className="flex gap-x-2">
            <Link href={siteConfig.baseLinks.login.href}>
              <Button className="hidden font-semibold md:flex">
                {siteConfig.baseLinks.login.label}
              </Button>
            </Link>
          </div>
          <div className="flex gap-x-2 md:hidden">
            <Link href={siteConfig.baseLinks.login.href}>
              <Button className="font-semibold">{siteConfig.baseLinks.login.label}</Button>
            </Link>
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about.href}>{siteConfig.baseLinks.about.label}</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.pricing.href}>{siteConfig.baseLinks.pricing.label}</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog.href}>{siteConfig.baseLinks.changelog.label}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
