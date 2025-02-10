"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/Dropdown"
import { Button } from "@/components/Button"
import { cx } from "@/lib/utils"
import {
    Plus,
  } from "lucide-react"
import React from "react"
import { ModalAddWorkspace } from "./ModalAddWorkspace"

const activities = [
  {
    id: "1",
    name: "Pesagem",
  },
  {
    id: "2",
    name: "Reprodução",
  },
  // Add more activities...
]

export const ActivitiesDropdownDesktop = () => {
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
      {/* sidebar (lg+) */}
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={setDropdownOpen}
        modal={false}
      >
        <DropdownMenuTrigger asChild>

          <div className={cx("flex items-center p-2 transition")}>
            <Button className="mt-4 w-full gap-x-2 text-sm font-semibold sm:mt-0 sm:w-fit">
              <Plus className="-ml-1 size-5 shrink-0" aria-hidden="true" />
              <span>Atividade</span>
            </Button>
          </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent
          hidden={hasOpenDialog}
          onCloseAutoFocus={(event) => {
            if (focusRef.current) {
              focusRef.current.focus()
              focusRef.current = null
              event.preventDefault()
            }
          }}
        >
          <DropdownMenuLabel>
            Atividades de manejo
          </DropdownMenuLabel>

          {activities.map((activity) => (
            <div className="flex w-full items-center gap-x-2.5 max-h-60 overflow-y-auto" key={activity.id}>
              <ModalAddWorkspace
                onSelect={handleDialogItemSelect}
                onOpenChange={handleDialogItemOpenChange}
                itemName={activity.name}
              />
            </div>
          ))}

        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ActivitiesDropdownMobile = () => {
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

          <div className={cx("flex items-center p-2 transition")}>
            <Button className="mt-4 w-full gap-x-2 text-sm font-semibold sm:mt-0 sm:w-fit">
              <Plus className="-ml-1 size-5 shrink-0" aria-hidden="true" />
              <span>Atividade</span>
            </Button>
          </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
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
          <DropdownMenuLabel>
            Atividades de manejo
          </DropdownMenuLabel>
          <DropdownMenuGroup className="max-h-60 overflow-y-auto">

          {activities.map((activity) => (
            <div className="flex w-full items-center gap-x-2.5" key={activity.id}>
              <ModalAddWorkspace
                onSelect={handleDialogItemSelect}
                onOpenChange={handleDialogItemOpenChange}
                itemName={activity.name}
              />
            </div>
          ))}

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
