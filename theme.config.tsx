import type { DocsThemeConfig } from "nextra-theme-docs"
import FrescoByRadish from "@/components/FrescoByRadish"

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Fresco",
    }
  },
  logo: <FrescoByRadish />,
  project: {
    link: "https://github.com/rabani-to/gofres.co",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/rabani-to/gofres.co",
  footer: {
    text: "Radish - Fresco Docs",
  },
}

export default config
