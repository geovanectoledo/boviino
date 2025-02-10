"use client"

import { Logos } from "../../logos/Logos"

import {
  WorkspacesDropdownMobile,
} from "./SidebarWorkspacesDropdown"
import { UserProfileMobile } from "./UserProfile"

export function Navbar() {

  return (
    <>
      <div className="top-0 z-40 flex h-16 shrink-0 items-center justify-between bg-white px-4 sm:gap-x-6 sm:px-4 lg:px-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="px-2 sm:px-2 lg:px-0">
            <div className="text-gray-900 dark:text-gray-200">
              <Logos.BoviinoLarge className="hidden sm:block lg:block w-26" />
              <Logos.BoviinoSmall className="block sm:hidden lg:hidden w-5" />
            </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <WorkspacesDropdownMobile />
          <UserProfileMobile />
        </div>
      </div>
    </>
  )
}
