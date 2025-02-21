"use client"

import React from "react"
import { cx } from '@/lib/utils'
import { Card } from "@/components/Card"
import { ArrowUp, ArrowDown, ExternalLink } from "lucide-react"
import { PiCow, PiFarm } from "react-icons/pi"
import { RiArrowDownSFill, RiArrowUpSFill } from '@remixicon/react'

const data = [
  {
    name: 'Animais Ativos',
    value: '28',
    change: '6,1%',
    changeType: 'positive',
    href: '#',
  },
  {
    name: 'Peso Médio',
    value: '327 kg',
    change: '9,2%',
    changeType: 'negative',
    href: '#',
  },
  {
    name: 'Ganho Médio Diário',
    value: '1,04 kg',
    change: '1,2%',
    changeType: 'positive',
    href: '#',
  },
  {
    name: 'Preço da Arroba',
    value: 'R$ 324,60',
    change: '3,1%',
    changeType: 'negative',
    href: '#',
  },
];

export type PeriodValue = "previous-period" | "last-year" | "no-comparison"

export default function Overview() {

  return (
    <>
      <h1 className="text-xl py-1 mb-4 font-semibold text-gray-900 dark:text-gray-50">
        Olá, Geovane
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
        {/* Primeira linha: 4 Cards */}
        {data.map((item) => (
          <Card key={item.name} className="p-0">
            <div className="px-4 py-4">
              <dd className="flex items-start justify-between space-x-2">
                <span className="truncate text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
                <span
                className={cx(
                  item.changeType === 'positive'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500'
                    : 'bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500',
                  'inline-flex items-center gap-x-1 rounded-md px-1.5 py-0.5 text-xs font-medium',
                )}
              >
                {item.changeType === 'positive' ? (
                  <RiArrowUpSFill
                    className="-ml-0.5 size-4 shrink-0"
                    aria-hidden={true}
                  />
                ) : (
                  <RiArrowDownSFill
                    className="-ml-0.5 size-4 shrink-0"
                    aria-hidden={true}
                  />
                )}
                {item.change}
              </span>
              </dd>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
            </div>
            <div className="flex justify-end border-t border-gray-200 px-4 py-3 dark:border-gray-900">
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                ver mais
              </a>
            </div>
          </Card>
        ))}

        {/* Segunda linha: 2 Cards ocupando 2 colunas cada */}
        <Card className="col-span-1 sm:col-span-2 p-4">Card 5</Card>
        <Card className="col-span-1 sm:col-span-2 p-4">Card 6</Card>

        {/* Terceira linha: 1 Card ocupando todas as 4 colunas */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-4">Card 7</Card>

      </div>

    </>
  )
}
