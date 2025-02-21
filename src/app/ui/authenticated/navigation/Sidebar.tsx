"use client"

import { siteConfig } from "@/app/siteConfig"
import React from "react"
import { Logos } from "../../logos/Logos"
import { Tooltip } from "@/components/Tooltip"
import { cx, focusRing } from "@/lib/utils"

import {
  DiamondPlus,
  ScanLine,
  CalendarDays,
} from "lucide-react"
import { 
  TbLayoutSidebarLeftCollapse, 
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb"

import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileSidebar from "./MobileSidebar"
import { WorkspacesDesktop, WorkspacesMobile } from "./Workspaces"
import { UserProfileDesktop, UserProfileMobile } from "./UserProfile"

const navigation = [
  { name: siteConfig.baseLinks.overview.label, href: siteConfig.baseLinks.overview.href, icon: siteConfig.baseLinks.overview.icon },
  { name: "Agenda", href: "#", icon: CalendarDays },
  { name: "Atividades", href: "#", icon: DiamondPlus },
  { name: siteConfig.baseLinks.market.label, href: siteConfig.baseLinks.market.href, icon: siteConfig.baseLinks.market.icon },
  { name: siteConfig.baseLinks.herd.label, href: siteConfig.baseLinks.herd.href, icon: siteConfig.baseLinks.herd.icon },
  { name: siteConfig.baseLinks.pastures.label, href: siteConfig.baseLinks.pastures.href, icon: siteConfig.baseLinks.pastures.icon },
  { name: "Configurações", href: siteConfig.baseLinks.settings.profile.href, icon: siteConfig.baseLinks.settings.profile.icon },
] as const

interface SidebarProps {
  isCollapsed: boolean
  toggleSidebar: () => void
}

export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings.profile.href) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }
  return (
    <>
      {/* sidebar (lg+) */}
      <nav
        className={cx(
          isCollapsed ? "lg:w-20" : "lg:w-56",
          "hidden overflow-x-hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col",
          "ease transform-gpu transition-all duration-100 will-change-transform",
        )}
      >
        <aside className="flex grow flex-col gap-y-4 overflow-y-auto whitespace-nowrap px-3 py-4">

        <div className="h-16 bg-transparent"></div>
  
          <nav
            aria-label="core navigation links"
            className="flex flex-1 flex-col space-y-10"
          >
            <div>
            <ul role="list" className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {isCollapsed ? (
                    <Tooltip
                      side="right"
                      content={item.name}
                      sideOffset={6}
                      showArrow={false}
                      className="z-[999]"
                    >
                      <Link
                        href={item.href}
                        className={cx(
                          isActive(item.href)
                            ? "bg-green-600 dark:bg-green-600 text-white hover:bg-green-500 dark:hover:bg-green-500" // Mantém verde no hover
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 hover:dark:bg-gray-900",
                          "inline-flex items-center rounded-lg p-2 text-sm font-medium transition",
                          focusRing
                        )}
                      >
                        {item.icon ? React.createElement(item.icon, { className: "size-5 shrink-0", "aria-hidden": true }) : null}
                      </Link>
                    </Tooltip>
                  ) : (
                    <Link
                      href={item.href}
                      className={cx(
                        isActive(item.href)
                          ? "text-green-600 dark:text-green-500"
                          : "text-gray-700 dark:text-gray-300",
                        "flex items-center gap-x-4 rounded-lg p-2 text-sm font-medium transition-opacity hover:bg-gray-200/50 hover:dark:bg-gray-900",
                        focusRing,
                      )}
                    >
                      {item.icon ? React.createElement(item.icon, { className: "size-5 shrink-0", "aria-hidden": true }) : null}
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            </div>
          </nav>

          <div>
          <ul role="list" className="mt-1 space-y-2">
            <li>
              {isCollapsed ? (

                  <button
                    className={cx(
                      "group inline-flex gap-x-4 items-center rounded-lg p-2 text-sm font-medium transition-opacity text-gray-500 hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing,
                    )}
                    onClick={toggleSidebar}
                  >
                    <TbLayoutSidebarRightCollapse className="size-5 shrink-0" aria-hidden="true" />
                  </button>

              ) : (
                  <button
                    className={cx(
                      "group inline-flex w-full gap-x-4 items-center rounded-lg p-2 text-sm font-medium transition-opacity text-gray-500 hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing,
                    )}
                    onClick={toggleSidebar}
                  >
                      <TbLayoutSidebarLeftCollapse
                      className="size-5 shrink-0"
                      aria-hidden="true"
                      />
                  Recolher
                </button>
              )}
            </li>
          </ul>
          </div>

        </aside>
      </nav>
      {/* top navbar (xs-lg) */}
      <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center justify-between bg-gray-50 px-4 sm:px-6 lg:px-4 dark:bg-gray-950">
          <div>
            <Logos.BoviinoLarge className="hidden sm:block w-28 mb-2" />
            <Logos.BoviinoSmall className="block sm:hidden h-8 w-auto mt-1 mr-4" />
          </div>

        <div className="flex items-center gap-2">
          <WorkspacesMobile />
          <UserProfileMobile />
          <MobileSidebar />
        </div>
      </div>
    </>
  )
}
