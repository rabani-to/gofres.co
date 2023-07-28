/**
 * @type { import("next").NextConfig }
 */
const withNextra = require("nextra")({
  experimental: {
    serverComponentsExternalPackages: ["styled-components"],
  },
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})

module.exports = withNextra()
