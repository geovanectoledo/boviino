"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown";

import * as React from "react";
import { ModalAddWorkspace } from "./ModalAddWorkspace";

const workspaces = [
  {
    value: "bosque-da-alvorada",
    name: "Bosque da Alvorada",
    initials: "BA",
    role: "Proprietário",
    color: "text-orange-500 dark:text-orange-500",
  },
  {
    value: "sitio-nova-campestre",
    name: "Sítio Nova Campestre",
    initials: "NC",
    role: "Gestor",
    color: "text-cyan-500 dark:text-cyan-500",
  },
  {
    value: "fazenda-santa-nice",
    name: "Fazenda Santa Nice",
    initials: "SN",
    role: "Membro",
    color: "text-fuchsia-600 dark:text-fuchsia-500",
  },
];

export type DropdownWorkspacesProps = {
  children: React.ReactNode;
  align?: "center" | "start" | "end";
};

export function DropdownWorkspaces({
  children,
  align = "start",
}: DropdownWorkspacesProps) {
  const dropdownTriggerRef = React.useRef<null | HTMLButtonElement>(null);
  const focusRef = React.useRef<null | HTMLButtonElement>(null);

  const handleDialogItemSelect = () => {
    focusRef.current = dropdownTriggerRef.current;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="!min-w-58">
        <DropdownMenuLabel>Propriedades ({workspaces.length})</DropdownMenuLabel>
        {workspaces.map((workspace) => (
          <DropdownMenuItem key={workspace.value}>
            <div className="flex w-full items-center gap-x-2.5">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {workspace.name}
                </p>
                <p className="text-xs font-base text-gray-500 dark:text-gray-500">
                  {workspace.role}
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <ModalAddWorkspace
          onSelect={handleDialogItemSelect}
          onOpenChange={() => {}} // Adiciona onOpenChange para evitar o erro
          itemName="Adicionar propriedade"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}