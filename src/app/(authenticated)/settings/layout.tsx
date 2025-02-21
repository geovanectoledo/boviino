"use client";

import React from "react"

import { Card } from "@/components/Card"
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/app/siteConfig"

const navigationSettings = [
  { name: siteConfig.baseLinks.settings.profile.label, href: siteConfig.baseLinks.settings.profile.href },
  { name: siteConfig.baseLinks.settings.billing.label, href: siteConfig.baseLinks.settings.billing.href },
  { name: siteConfig.baseLinks.settings.users.label, href: siteConfig.baseLinks.settings.users.href },
]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const pathname = usePathname()
  return (
    <>

        <h1 className="text-xl py-1 mb-4 font-semibold text-gray-900 dark:text-gray-50">
          Configurações
        </h1>

        <Card>
          <TabNavigation>
            {navigationSettings.map((item) => (
              <TabNavigationLink
                key={item.name}
                asChild
                active={pathname === item.href}
                className="px-5"
              >
                <Link href={item.href}>{item.name}</Link>
              </TabNavigationLink>
            ))}
          </TabNavigation>
          <div className="pt-6">{children}</div>
        </Card>
    </>
  )
}
