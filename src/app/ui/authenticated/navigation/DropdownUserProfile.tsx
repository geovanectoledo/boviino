"use client"

import { siteConfig } from "@/app/siteConfig"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown"
import ThemeSwitch from "@/components/ThemeSwitch"
import Link from "next/link"
import * as React from "react"

export type DropdownUserProfileProps = {
  children: React.ReactNode
  align?: "center" | "start" | "end"
}

export function DropdownUserProfile({
  children,
  align = "start",
}: DropdownUserProfileProps) {

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent align={align} className="!min-w-58">
          <DropdownMenuLabel>geovanectoledo@gmail.com</DropdownMenuLabel>
          <DropdownMenuLabel><ThemeSwitch /></DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Configurações</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href={siteConfig.baseLinks.settings.profile.href}>
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href={siteConfig.baseLinks.settings.billing.href}>
              Plano
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href={siteConfig.baseLinks.settings.users.href}>
              Usuários
            </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
