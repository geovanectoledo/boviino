"use client";

import "../global.css";

import React from "react"

import { cx } from "@/lib/utils"

import { Sidebar } from "@/app/ui/authenticated/navigation/Sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main
        className={cx(
          isCollapsed ? "lg:pl-20" : "lg:pl-56",
          "ease transform-gpu transition-all duration-100 will-change-transform bg-gray-50 dark:bg-gray-950",
          "min-h-screen flex flex-col px-4 lg:pr-4 md:px-6 sm:px-6"
        )}
      >

        <div className="h-4 hidden lg:block bg-transparent"></div>
          {children}
        <div className="h-4 hidden lg:block bg-transparent"></div>

      </main>
    </div>
  )
}
