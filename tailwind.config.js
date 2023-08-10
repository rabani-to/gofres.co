/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{tsx,md,mdx}",
    "./pages/**/*.{tsx,md,mdx}",
    "./components/*.tsx",
    "./components/**/*.tsx",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
