import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SiteConfig } from "@/lib/config"
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
  metadataBase: new URL("https://eclatsdeden.com"),
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

/** Fiche établissement pour les moteurs de recherche. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SiteConfig.title,
  description: SiteConfig.description,
  image: "https://eclatsdeden.com/photos/terrasse-parasols.webp",
  servesCuisine: SiteConfig.cuisines,
  priceRange: "Rs 150 – Rs 800",
  telephone: SiteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sunset Boulevard",
    addressLocality: "Grand Baie",
    addressCountry: "MU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [SiteConfig.instagram, SiteConfig.facebook, SiteConfig.tiktok, SiteConfig.tripadvisor],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className={`${outfit.variable} ${baloo.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
