import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { DropdownMenuItem } from "@/components/Dropdown"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import {
  RadioCardGroup,
  RadioCardGroupIndicator,
  RadioCardItem,
} from "@/components/RadioCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"

export const databases: {
  label: string
  value: string
  description: string
  isRecommended: boolean
}[] = [
  {
    label: "Extensivo",
    value: "extensivo",
    description: "Pastejo livre pela fazenda",
    isRecommended: false,
  },
  {
    label: "Intensivo",
    value: "intensivo",
    description: "Pastejo rotacionado em piquetes",
    isRecommended: false,
  },
  {
    label: "Semi-confinamento",
    value: "semi-confinamento",
    description: "Pastejo combinado com suplementação",
    isRecommended: false,
  },
  {
    label: "Confinamento",
    value: "confinamento",
    description: "Alimentação exclusivamente em cocho",
    isRecommended: false,
  },
]

export type ModalProps = {
  itemName: string
  onSelect: () => void
  onOpenChange: (open: boolean) => void
}

export function ModalAddWorkspace({
  itemName,
  onSelect,
  onOpenChange,
}: ModalProps) {
  return (
    <>
      <Dialog onOpenChange={onOpenChange}>
        <DialogTrigger className="w-full text-left">
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault()
              onSelect && onSelect()
            }}
          >
            {itemName}
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <form>
            <DialogHeader>
              <DialogTitle>Adicionar nova propriedade</DialogTitle>
              <DialogDescription className="mt-1 text-sm leading-6">
                Com seu plano grátis, você pode cadastrar até 3 propriedades.
              </DialogDescription>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="property-name" className="font-medium">
                    Nome
                  </Label>
                  <Input
                    id="property-name"
                    name="property-name"
                    placeholder="Minha Fazenda"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="property-cnpj" className="font-medium">
                    CNPJ
                  </Label>
                  <Input
                    id="property-cnpj"
                    name="property-cnpj"
                    placeholder="12.345.678/0001-00"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="property-address" className="font-medium">
                    Endereço
                  </Label>
                  <Input
                    id="property-address"
                    name="property-address"
                    placeholder="Estrada do Moinho, KM 12"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="database-region" className="font-medium">
                    Database region
                  </Label>
                  <Select defaultValue="europe-west-01">
                    <SelectTrigger
                      id="database-region"
                      name="database-region"
                      className="mt-2"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe-west-01">
                        europe-west-01
                      </SelectItem>
                      <SelectItem value="us-east-02">us-east-02</SelectItem>
                      <SelectItem value="us-west-01">us-west-01</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-2 text-xs text-gray-500">
                    For best performance, choose a region closest to your
                    application.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="database" className="font-medium">
                  Sistema de produção
                </Label>
                <RadioCardGroup
                  defaultValue={databases[0].value}
                  className="mt-2 grid grid-cols-1 gap-4 text-sm md:grid-cols-2"
                >
                  {databases.map((database) => (
                    <RadioCardItem key={database.value} value={database.value}>
                      <div className="flex items-start gap-3">
                        <RadioCardGroupIndicator className="mt-0.5" />
                        <div>
                          {database.isRecommended ? (
                            <div className="flex items-center gap-2">
                              <span className="leading-5">
                                {database.label}
                              </span>
                              <Badge>Novo</Badge>
                            </div>
                          ) : (
                            <span>{database.label}</span>
                          )}
                          <p className="mt-1 text-xs text-gray-500">
                          {database.description}
                          </p>
                        </div>
                      </div>
                    </RadioCardItem>
                  ))}
                </RadioCardGroup>
              </div>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Cancelar
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" className="w-full sm:w-fit">
                  Adicionar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
