"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { menuItems } from "./MenuItems";

export function Submenu() {
  const pathname = usePathname(); // Obtém a URL atual

  // Encontra o menu correspondente à URL atual (garante que sempre haja um fallback)
  const activeItem = menuItems.find((item) => pathname.startsWith(item.href)) || menuItems[0];

  return (
    <Tabs
      defaultValue={activeItem.name}
      className="sticky pt-2 top-0 z-30 w-full bg-white dark:bg-gray-950 overflow-x-auto scrollbar-hide"
    >
      <TabsList
        variant="line"
        className="px-6 lg:px-20 flex sm:flex-1"
      >
        {menuItems.map((item) => (
          item.href ? ( // Garante que `href` existe antes de renderizar o Link
            <TabsTrigger key={item.name} value={item.name} asChild>
              <Link href={item.href} className="shrink-0">
                {item.name}
              </Link>
            </TabsTrigger>
          ) : null
        ))}
      </TabsList>
    </Tabs>
  );
}