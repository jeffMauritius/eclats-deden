import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SiteConfig } from "@/lib/config"
import { Montserrat, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { PropsWithChildren } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: SiteConfig.title,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${playfair.variable} h-full`}
    >
      <head />
      <body className="min-h-screen flex flex-col font-montserrat bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
