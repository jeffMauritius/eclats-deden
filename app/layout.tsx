import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SiteConfig } from "@/lib/config"
import { JsonLd, restaurantJsonLd, SITE_URL } from "@/lib/seo"
import { Baloo_2, Outfit } from "next/font/google"
import type { Metadata, Viewport } from "next"
import { PropsWithChildren } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SiteConfig.title} — Crêperie & restaurant à Grand Baie`,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
  keywords: [
    "crêperie Grand Baie",
    "restaurant Île Maurice",
    "galette sarrasin Maurice",
    "Sunset Boulevard Grand Baie",
    "burger Wagyu Maurice",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SiteConfig.title,
    title: `${SiteConfig.title} — Crêperie & restaurant à Grand Baie`,
    description: SiteConfig.description,
    images: ["/photos/terrasse-parasols.webp"],
  },
  icons: {
    icon: "/logo-eclats-512.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#22a9e0",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className={`${outfit.variable} ${baloo.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd data={restaurantJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
