import "@/styles/globals.css"
import { Inter } from "next/font/google"

const nextFont = Inter({
  display: "swap",
  subsets: [],
  weight: ["400", "500", "600", "800"],
})

export default function App({ Component, pageProps }: any) {
  return (
    <main className={nextFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
