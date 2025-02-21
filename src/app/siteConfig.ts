import { LuLayoutDashboard, LuChartNoAxesCombined, LuHandCoins, LuSettings } from "react-icons/lu";
import { PiCow, PiFarm } from "react-icons/pi";

export const siteConfig = {
  name: "Boviino",
  url: "",
  description: "O único dashboard que você precisa.",
  baseLinks: {
    home: { href: "/", label: "Início", section: "Geral" },

    // Sessão pública
    about: { href: "/about", label: "Sobre nós", section: "Público" },
    login: { href: "/login", label: "Entrar", section: "Público" },
    register: { href: "/register", label: "Criar conta", section: "Público" },
    forgotPassword: { href: "/forgot-password", label: "Recuperar senha", section: "Público" },
    changelog: { href: "/changelog", label: "Novidades", section: "Público" },
    pricing: { href: "/pricing", label: "Preços", section: "Público" },
    imprint: { href: "/imprint", label: "Imprint", section: "Público" },
    privacy: { href: "/privacy", label: "Política de Privacidade", section: "Público" },
    terms: { href: "/terms", label: "Termos de Uso", section: "Público" },
    onboarding: { href: "/onboarding/products", label: "Onboarding", section: "Público" },

    // Dashboard
    overview: { href: "/overview", label: "Dashboard", icon: LuLayoutDashboard },
    market: { href: "/market", label: "Mercado", icon: LuChartNoAxesCombined },
    herd: { href: "/herd", label: "Rebanho", icon: PiCow },
    pastures: { href: "/pastures", label: "Pastagens", icon: PiFarm },
    finances: { href: "/finances", label: "Finanças", icon: LuHandCoins },
    history: { href: "/history", label: "Histórico de atividades", section: "Gestão" },
    reports: { href: "/reports", label: "Relatórios", section: "Relatórios" },

    // Configurações
    settings: {
      profile: { href: "/settings/profile", label: "Perfil", icon: LuSettings },
      billing: { href: "/settings/billing", label: "Plano", icon: LuSettings },
      users: { href: "/settings/users", label: "Usuários", icon: LuSettings },
    },
  },
} as const;

export type siteConfig = typeof siteConfig;