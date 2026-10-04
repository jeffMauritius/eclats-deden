import type { Metadata } from "next"
import { LandingPage } from "@/components/seo/LandingPage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/en")

export default function EnHomePage() {
  return (
    <LandingPage
      locale="en"
      badge="🌺 Sunset Boulevard"
      emoji="🌴"
      title="Restaurant, brunch & crêpes in Grand Baie"
      intro={
        <>
          Welcome to <strong>Éclats d’Éden</strong>, a relaxed restaurant and crêperie located at
          Sunset Boulevard in Grand Baie, Mauritius. Join us for breakfast, brunch or lunch on our
          shaded terrace.
        </>
      }
      image={{ src: "/photos/terrasse-parasols.webp", alt: "Shaded terrace with turquoise parasols at Éclats d’Éden" }}
      sections={[
        {
          title: "On the menu",
          body: (
            <p>
              Our menu includes buckwheat galettes, generous salads, burgers, fresh fish, sweet crêpes,
              waffles and freshly pressed juices.
            </p>
          ),
        },
        {
          title: "Breakfast and brunch in Grand Baie",
          body: (
            <p>
              Start your day with coffee, fresh juice and something sweet, or enjoy a more complete
              brunch with a savoury buckwheat galette.
            </p>
          ),
        },
        {
          title: "Buckwheat galettes",
          body: (
            <p>
              Our galettes are made with buckwheat flour, which is naturally gluten-free, and prepared
              to order with a selection of classic and Mauritian-inspired fillings.
            </p>
          ),
        },
        {
          title: "Fresh local flavours",
          body: (
            <p>
              Smoked marlin, seasonal fruit, fresh fish and daily specials bring a Mauritian touch to
              the menu.
            </p>
          ),
        },
        {
          title: "Find us",
          body: <p>Éclats d’Éden is located at Sunset Boulevard, Grand Baie, Mauritius.</p>,
        },
      ]}
      primaryLink={{ href: "/menu", label: "View the menu", emoji: "🥞" }}
      related={[
        { href: "/en/brunch-grand-baie", label: "Brunch in Grand Baie", emoji: "☀️" },
        { href: "/contact", label: "Opening hours & map", emoji: "📍" },
        { href: "/", label: "Version française", emoji: "🇫🇷" },
      ]}
    />
  )
}
