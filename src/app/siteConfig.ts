export const siteConfig = {
    name: "Boviino",
    url: "",
    description: "The only dashboard you will ever need.",
    baseLinks: {
      home: "/",
      overview: "/overview",
      details: "/details",
      settings: {
        general: "/settings/general",
        billing: "/settings/billing",
        users: "/settings/users",
      },
    },
  }
  
  export type siteConfig = typeof siteConfig
  