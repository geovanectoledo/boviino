import { siteConfig } from "@/app/siteConfig"
import {
  Home,
  FileStack,
  MapPlus,
  CircleDollarSign,
  ChartCandlestick,
  Activity,
  FileChartColumn,
  UsersRound,
  CopyPlus,
} from "lucide-react"

// Definição do menu exportado
export const menuItems = [
  { name: "Visão geral", href: siteConfig.baseLinks.overview, icon: Home },
  { name: "Rebanho", href: siteConfig.baseLinks.details, icon: FileStack },
  { name: "Pastagens", href: siteConfig.baseLinks.details, icon: MapPlus },
  { name: "Finanças", href: siteConfig.baseLinks.details, icon: CircleDollarSign },
  { name: "Mercado", href: siteConfig.baseLinks.details, icon: ChartCandlestick },
  { name: "Histórico", href: siteConfig.baseLinks.details, icon: Activity },
  { name: "Relatórios", href: siteConfig.baseLinks.details, icon: FileChartColumn },
  { name: "Usuários", href: siteConfig.baseLinks.users, icon: UsersRound },
  { name: "Novo manejo", href: siteConfig.baseLinks.details, icon: CopyPlus },
] as const;