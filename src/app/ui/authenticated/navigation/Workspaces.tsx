"use client"

import { Button } from "@/components/Button"
import { cx, focusRing } from "@/lib/utils"
import { ChevronsUpDown } from "lucide-react"

import { DropdownWorkspaces } from "./DropdownWorkspaces"

interface UserProfileDesktopProps {
  isCollapsed?: boolean
}

export const WorkspacesDesktop = ({
  isCollapsed,
}: UserProfileDesktopProps) => {
  return (
    <DropdownWorkspaces>
      <Button
        aria-label="Workspaces"
        variant="ghost"
        className={cx(
          isCollapsed ? "justify-center" : "justify-between",
          focusRing,
          "group flex w-full items-center rounded-md px-1 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200/50 data-[state=open]:bg-gray-200/50 hover:dark:bg-gray-800/50 data-[state=open]:dark:bg-gray-900",
        )}
      >
        {isCollapsed ? (
          // h-8 to avoid layout shift with icon shown in isCollapsibled == false
          <div className="flex items-center">
            <ChevronsUpDown
              className="size-5 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
        ) : (
          <span className="flex items-center gap-x-4 px-1">
            <span className={cx(isCollapsed ? "hidden" : "block")}>
              Bosque da Alvorada
            </span>
          </span>
        )}
        {!isCollapsed && (
          <ChevronsUpDown
            className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-400"
            aria-hidden="true"
          />
        )}
      </Button>
    </DropdownWorkspaces>
  )
}

export const WorkspacesMobile = () => {
  return (
    <DropdownWorkspaces align="end">
        <Button
        aria-label="Workspaces"
        variant="ghost"
        className={cx(
        "group flex items-center rounded-lg gap-x-2 px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-900 hover:bg-gray-200 data-[state=open]:bg-gray-200 hover:dark:bg-gray-800 data-[state=open]:dark:bg-gray-800",
        )}
        >
        <span className="flex items-center px-1">
            <span>
            Bosque da Alvorada
            </span>
        </span>
        <ChevronsUpDown
            className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-400"
            aria-hidden="true"
        />
        </Button>
    </DropdownWorkspaces>
  )
}


