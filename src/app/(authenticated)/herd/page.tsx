import { columns } from "@/app/ui/authenticated/data-table/columns"
import { DataTable } from "@/app/ui/authenticated/data-table/DataTable"
import { usage } from "@/data/data"

export default function Example() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Meus animais
      </h1>
      <div className="mt-6 sm:mt-6 lg:mt-6">
        <DataTable data={usage} columns={columns} />
      </div>
    </>
  )
}
