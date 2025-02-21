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
  { name: "Visão geral", section:"Visão geral", href: siteConfig.baseLinks.overview, icon: Home },
  { name: "Mercado", section:"Mercado", href: siteConfig.baseLinks.market, icon: ChartCandlestick },
  { name: "Rebanho", section:"Rebanho", href: siteConfig.baseLinks.herd, icon: FileStack },
  { name: "Pastagens", section:"Pastagens", href: siteConfig.baseLinks.herd, icon: MapPlus },
  { name: "Finanças", section:"Finanças", href: siteConfig.baseLinks.herd, icon: CircleDollarSign },
  { name: "Histórico de atividades", section:"Histórico", href: siteConfig.baseLinks.herd, icon: Activity },
  { name: "Relatórios", section:"Relatórios", href: siteConfig.baseLinks.herd, icon: FileChartColumn },
  { name: "Minha conta", section:"Configurações", href: siteConfig.baseLinks.settings.billing, icon: UsersRound },
  { name: "Meu plano", section:"Configurações", href: siteConfig.baseLinks.settings.billing, icon: UsersRound },
  { name: "Gestão de acessos", section:"Configurações", href: siteConfig.baseLinks.settings.users, icon: UsersRound },
] as const;