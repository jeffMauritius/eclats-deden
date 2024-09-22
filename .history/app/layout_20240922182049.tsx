// app/layout.
import { Header } from "@/components/layout/Header"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { SiteConfig } from "@/lib/config"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { PropsWithChildren } from "react"
import { Providers } from "./Providers"
import "./globals.css"
import { Title } from "@/components/layout/Title"
import { Footer } from "@/components/layout/Footer"

const montserratFont = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${montserratFont.className} h-full`}
      suppressHydrationWarning
    >
      <head />

      <body
        className={cn(
          `flex flex-col h-screen bg-background font-sans antialiased p-5`,
        )}
      >
        <Providers>
          <div className="relative flex flex-col">
            <Title title="Éclats d'Éden" />
            <div>
              <Header />
            </div>
            {children}
            <div className="mt-5 md:col-span-3">
              <Footer />
            </div>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
