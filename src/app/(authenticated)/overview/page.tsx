"use client"

import React from "react"


export type PeriodValue = "previous-period" | "last-year" | "no-comparison"

export default function Overview() {

  return (
    <>
      <section aria-labelledby="market">
        <h1
          id="market"
          className="scroll-mt-10 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Visão geral
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">

        </div>
      </section>
    </>
  )
}
