export const siteConfig = {
    name: "Boviino",
    url: "",
    description: "The only dashboard you will ever need.",
    baseLinks: {
      home: "/",

      // Links para sessão não logada do site (public)
      about: "/about",
      changelog: "/changelog",
      pricing: "/pricing",
      imprint: "/imprint",
      privacy: "/privacy",
      terms: "/terms",

      // Links para sessão logada do site (authenticated)
      overview: "/overview",
      herd: "/herd",
      market: "/market",
      users: "/users",
      settings: {
        general: "/settings/general",
        billing: "/settings/billing",
      },
    },
  }
  
  export type siteConfig = typeof siteConfig