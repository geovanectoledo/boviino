import { siteConfig } from "@/app/siteConfig"
import { Logos } from "../../logos/Logos"
import { Button } from "@/components/Button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer"
import { cx, focusRing } from "@/lib/utils"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: siteConfig.baseLinks.overview.label, href: siteConfig.baseLinks.overview.href, icon: siteConfig.baseLinks.overview.icon },
  { name: siteConfig.baseLinks.market.label, href: siteConfig.baseLinks.market.href, icon: siteConfig.baseLinks.market.icon },
  { name: siteConfig.baseLinks.herd.label, href: siteConfig.baseLinks.herd.href, icon: siteConfig.baseLinks.herd.icon },
  { name: siteConfig.baseLinks.pastures.label, href: siteConfig.baseLinks.pastures.href, icon: siteConfig.baseLinks.pastures.icon },
  { name: "Configurações", href: siteConfig.baseLinks.settings.profile.href, icon: siteConfig.baseLinks.settings.profile.icon },
] as const

export default function MobileSidebar() {
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings.profile.href) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            aria-label="open sidebar"
            className="group flex items-center rounded-lg p-1.5 lg:hidden text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-900 hover:bg-gray-200 data-[state=open]:bg-gray-200 hover:dark:bg-gray-800 data-[state=open]:dark:bg-gray-800"
          >
            <Menu className="size-5 shrink-0 text-gray-700 dark:text-gray-300" aria-hidden="true" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="sm:max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <nav
              aria-label="core mobile navigation links"
              className="flex flex-1 flex-col space-y-10"
            >
              <div>
                <ul role="list" className="mt-1 space-y-1.5">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <DrawerClose asChild>
                        <Link
                          href={item.href}
                          className={cx(
                            isActive(item.href)
                              ? "text-green-600 dark:text-green-500"
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                            "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-base font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900",
                            focusRing,
                          )}
                        >
                          <item.icon
                            className="size-5 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
