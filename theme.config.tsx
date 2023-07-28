import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"
import { Inter } from "next/font/google"
import Logo from "components/Logo"

const InterFont = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
})

const config: DocsThemeConfig = {
  head: (
    <>
      <style>
        {`
          body,
          html {
            font-family: ${InterFont.style.fontFamily};
          }
        `}
      </style>
    </>
  ),
  logo: <Logo width="4rem" />,
  project: {
    link: "https://github.com/rabani-to/gofres.co",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/rabani-to/gofres.co",
  footer: {
    text: "Nextra Docs Template",
  },
}

export default config
