"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown"
import {
  ChevronsUpDown,
} from "lucide-react"
import React from "react"
import { ModalAddWorkspace } from "./ModalAddWorkspace"

const workspaces = [
  {
    value: "bosque-da-alvorada",
    name: "Bosque da Alvorada",
    initials: "BA",
    role: "Proprietário",
    color: "text-orange-500 dark:text-orange-500",
  },
  {
    value: "sitio-nova-campestre",
    name: "Sítio Nova Campestre",
    initials: "NC",
    role: "Gestor",
    color: "text-cyan-500 dark:text-cyan-500",
  },
  {
    value: "fazenda-santa-nice",
    name: "Fazenda Santa Nice",
    initials: "SN",
    role: "Membro",
    color: "text-fuchsia-600 dark:text-fuchsia-500",
  },
  // Add more workspaces...
]


export const WorkspacesDropdownMobile = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [hasOpenDialog, setHasOpenDialog] = React.useState(false)
  const dropdownTriggerRef = React.useRef<null | HTMLButtonElement>(null)
  const focusRef = React.useRef<null | HTMLButtonElement>(null)

  const handleDialogItemSelect = () => {
    focusRef.current = dropdownTriggerRef.current
  }

  const handleDialogItemOpenChange = (open: boolean) => {
    setHasOpenDialog(open)
    if (open === false) {
      setDropdownOpen(false)
    }
  }
  return (
    <>
      {/* sidebar (xs-lg) */}
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={setDropdownOpen}
        modal={false}
      >
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-x-2.5 rounded-md p-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-900">
            <div className="flex w-full items-center justify-between gap-x-3 truncate">
              <p className="pl-2 truncate whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                Bosque da Alvorada
              </p>
              <ChevronsUpDown
                className="size-4 shrink-0 text-gray-500"
                aria-hidden="true"
              />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="!min-w-72"
          hidden={hasOpenDialog}
          onCloseAutoFocus={(event) => {
            if (focusRef.current) {
              focusRef.current.focus()
              focusRef.current = null
              event.preventDefault()
            }
          }}
        >
          <DropdownMenuGroup className="max-h-60 overflow-y-auto">
            <DropdownMenuLabel>
              Propriedades ({workspaces.length})
            </DropdownMenuLabel>
            {workspaces.map((workspace) => (
              <DropdownMenuItem key={workspace.value}>
                <div className="flex w-full items-center gap-x-2.5">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {workspace.name}
                    </p>
                    <p className="text-xs font-base text-gray-500 dark:text-gray-500">
                      {workspace.role}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <ModalAddWorkspace
            onSelect={handleDialogItemSelect}
            onOpenChange={handleDialogItemOpenChange}
            itemName="Adicionar propriedade"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
