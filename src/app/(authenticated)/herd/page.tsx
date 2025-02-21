"use client";

import { Card } from "@/components/Card"
import { columns } from "@/app/ui/authenticated/data-table/columns"
import { DataTable } from "@/app/ui/authenticated/data-table/DataTable"
import { usage } from "@/data/data"

export default function Herd() {
  return (
    <>
    <h1 className="text-xl py-1 mb-4 font-semibold text-gray-900 dark:text-gray-50">
      Meus animais
    </h1>
    <Card>
      <div>
        <DataTable data={usage} columns={columns} />
      </div>
    </Card>
    </>
  )
}
