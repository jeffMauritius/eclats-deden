import type { Metadata } from "next"
import { LandingPage } from "@/components/seo/LandingPage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/en/brunch-grand-baie")

export default function EnBrunchPage() {
  return (
    <LandingPage
      locale="en"
      badge="☀️ Brunch & breakfast"
      emoji="🧇"
      title="Brunch in Grand Baie"
      intro={
        <>
          Looking for <strong>brunch in Grand Baie, Mauritius</strong>? Éclats d’Éden welcomes you to
          its shaded terrace at Sunset Boulevard for buckwheat galettes, sweet crêpes, waffles,
          freshly pressed juices and coffee.
        </>
      }
      image={{ src: "/photos/gaufre-smoothies.webp", alt: "Waffle and colourful smoothies served on the terrace" }}
      sections={[
        {
          title: "Sweet or savoury brunch",
          body: (
            <p>
              Choose a savoury galette or salad, then add a crêpe, waffle or dessert for something
              sweet. Our fresh juices are pressed to order.
            </p>
          ),
        },
        {
          title: "Breakfast in Grand Baie",
          body: (
            <p>
              Stop by for a simple coffee and sweet treat, or stay longer for a relaxed breakfast or
              brunch in the heart of Grand Baie.
            </p>
          ),
        },
      ]}
      primaryLink={{ href: "/menu", label: "View the menu", emoji: "🥞" }}
      related={[
        { href: "/en", label: "About Éclats d’Éden", emoji: "🌺" },
        { href: "/brunch-grand-baie", label: "Version française", emoji: "🇫🇷" },
      ]}
    />
  )
}
