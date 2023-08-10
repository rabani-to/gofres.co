/**
 * @type { (conf: import("next").NextConfig ) => void }
 */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})

module.exports = withNextra({})
