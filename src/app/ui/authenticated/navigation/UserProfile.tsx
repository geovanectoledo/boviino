"use client"

import { Button } from "@/components/Button"
import { cx, focusRing } from "@/lib/utils"
import { ChevronsUpDown, UsersRound } from "lucide-react"

import { DropdownUserProfile } from "./DropdownUserProfile"

interface UserProfileDesktopProps {
  isCollapsed?: boolean
}

export const UserProfileDesktop = ({
  isCollapsed,
}: UserProfileDesktopProps) => {
  return (
    <DropdownUserProfile>
      <Button
        aria-label="User settings"
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
            <UsersRound
              className="size-5 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
        ) : (
          <span className="flex items-center px-1">
            <span className={cx(isCollapsed ? "hidden" : "block")}>
              Geovane Toledo
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
    </DropdownUserProfile>
  )
}

export const UserProfileMobile = () => {
  return (
    <DropdownUserProfile align="end">
      <Button
        aria-label="User settings"
        variant="ghost"
        className={cx(
          "group flex items-center rounded-lg p-2 text-sm font-medium bg-gray-200/50 dark:bg-gray-900 hover:bg-gray-200 data-[state=open]:bg-gray-200 hover:dark:bg-gray-800 data-[state=open]:dark:bg-gray-800",
        )}
      >
        <UsersRound
          className="size-4 shrink-0 text-gray-700 dark:text-gray-300"
          aria-hidden="true"
        />
      </Button>
    </DropdownUserProfile>
  )
}
