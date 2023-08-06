import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import FrescoByRadish from "@/components/FrescoByRadish"
import { SEO, TWITTER_HANDLE } from "./constants/seo"

const config: DocsThemeConfig = {
  logo: <FrescoByRadish />,
  project: {
    link: "https://github.com/rabani-to/fresco",
  },
  chat: {
    link: "https://discord.gg/KpdmyTdNX7",
  },
  editLink: {
    text: "Edit this page on Github →",
  },
  docsRepositoryBase: "https://github.com/rabani-to/gofres.co/tree/master",
  footer: {
    text: `${new Date().getFullYear()} – Fresco, Radish.`,
  },
  useNextSeoProps() {
    const { title } = useConfig()
    const { asPath } = useRouter()

    return {
      titleTemplate: "%s – Fresco",
      title: asPath === "/" ? "Home" : title,
      additionalLinkTags: [
        "/favicon.png",
        "/favicon.svg",
        "/favicon-dark.png",
        "/favicon-dark.svg",
      ].map((href) => {
        const isSVG = href.includes("svg")
        const isDark = href.includes("-dark")
        return {
          rel: "icon",
          type: isSVG ? "image/svg+xml" : "image/png",
          media: isDark ? "(prefers-color-scheme: dark)" : undefined,
          href,
        }
      }),
      twitter: {
        cardType: "summary_large_image",
        handle: TWITTER_HANDLE,
        site: SEO.url,
      },
      openGraph: {
        type: "website",
        url: SEO.url,
        title: SEO.title,
        description: SEO.description,
        images: [
          {
            url: SEO.imageURL,
            alt: SEO.imageURL,
            width: 800,
            height: 800,
          },
        ],
      },
      description: SEO.description,
    }
  },
}

export default config
