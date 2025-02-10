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
} from "lucide-react"

// Definição do menu exportado
export const menuItems = [
  { name: "Visão geral", href: siteConfig.baseLinks.overview, icon: Home },
  { name: "Mercado", href: siteConfig.baseLinks.market, icon: ChartCandlestick },
  { name: "Rebanho", href: siteConfig.baseLinks.herd, icon: FileStack },
  { name: "Pastagens", href: siteConfig.baseLinks.herd, icon: MapPlus },
  { name: "Finanças", href: siteConfig.baseLinks.herd, icon: CircleDollarSign },
  { name: "Histórico", href: siteConfig.baseLinks.herd, icon: Activity },
  { name: "Relatórios", href: siteConfig.baseLinks.herd, icon: FileChartColumn },
  { name: "Usuários", href: siteConfig.baseLinks.users, icon: UsersRound },
] as const;