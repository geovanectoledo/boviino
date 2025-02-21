"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/app/siteConfig";

export function PageHeader() {
  const pathname = usePathname();

  // Converte `siteConfig` em um MAP para facilitar a busca
  const flattenRoutes = (config: any): Record<string, { label: string; section: string; hasPage: boolean }> => {
    let result: Record<string, { label: string; section: string; hasPage: boolean }> = {};

    Object.keys(config).forEach((key) => {
      const value = config[key];

      if (typeof value === "object" && value !== null && "href" in value) {
        result[value.href] = { 
          label: value.label, 
          section: value.section || "Início",
          hasPage: true // Indica que essa rota tem uma página associada
        };
      } else if (typeof value === "object") {
        result = { ...result, ...flattenRoutes(value) };
      }
    });

    return result;
  };

  const routeMap = flattenRoutes(siteConfig.baseLinks);

  // Divide a URL em segmentos
  const pathSegments = pathname.split("/").filter(Boolean);

  // Gera o breadcrumb excluindo pastas sem página real
  const breadcrumbs = pathSegments
    .map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const routeData = routeMap[href];

      return {
        name: routeData?.label || segment, // Usa o label mapeado ou mantém o segmento original
        href,
        isLast: index === pathSegments.length - 1,
        hasPage: routeData?.hasPage || false, // Verifica se a rota possui página real
      };
    })
    .filter((crumb) => crumb.hasPage); // Remove os itens que não têm página real

  return (
    <div className="w-full bg-gray-900 text-white px-6 lg:px-20 py-4">
      {/* TÍTULO DA PÁGINA BASEADO NA SEÇÃO */}
      <h1 className="text-xl font-semibold">
        {routeMap[pathname]?.section || "Olá, Geovane"}
      </h1>

      {/* BREADCRUMB (ABAIXO DO TÍTULO) */}
      <nav className="mt-2 flex items-center text-xs font-medium text-white">
        
        {breadcrumbs.map((crumb) => (
          <span key={crumb.href} className="flex items-center">
            {crumb.isLast ? (
              <span className="text-gray-300">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-gray-400 text-white">
                {crumb.name}
              </Link>
            )}
            <ChevronRight className="ml-3 mr-3 size-3" aria-hidden={true} />
          </span>
        ))}
      </nav>
    </div>
  );
}