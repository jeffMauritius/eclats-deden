import type { Metadata } from "next"
import { LandingPage } from "@/components/seo/LandingPage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/brunch-grand-baie")

export default function BrunchPage() {
  return (
    <LandingPage
      badge="☀️ Brunch & petit-déjeuner"
      emoji="🧇"
      title="Brunch à Grand Baie, à l’ombre des palmiers"
      intro={
        <>
          Vous cherchez <strong>où bruncher à Grand Baie</strong> ? Éclats d’Éden vous accueille au
          Sunset Boulevard pour un moment gourmand en terrasse, entre galettes de sarrasin, crêpes,
          gaufres, jus pressés minute et café.
        </>
      }
      image={{ src: "/photos/gaufre-smoothies.webp", alt: "Gaufre gourmande et smoothies colorés servis en terrasse" }}
      sections={[
        {
          title: "Un brunch sucré ou salé",
          body: (
            <p>
              Chez Éclats d’Éden, chacun compose son moment selon son envie. Côté salé, retrouvez nos
              galettes de sarrasin, salades généreuses et autres suggestions de la carte. Côté sucré,
              place aux crêpes, gaufres et desserts, accompagnés d’un café, d’un thé ou d’un jus de
              fruits frais.
            </p>
          ),
        },
        {
          title: "Petit-déjeuner à Grand Baie",
          body: (
            <p>
              Pour démarrer la journée tranquillement, installez-vous sous les parasols du Sunset
              Boulevard. Vous pouvez venir simplement pour un café et une douceur, ou prolonger avec un
              brunch plus complet.
            </p>
          ),
        },
        {
          title: "Des jus pressés minute",
          body: (
            <p>
              Notre bar à jus propose des jus de fruits frais préparés à la commande, avec un ou
              plusieurs fruits selon votre envie. Une option idéale pour accompagner un brunch sous le
              soleil mauricien.
            </p>
          ),
        },
        {
          title: "Une terrasse au cœur de Grand Baie",
          body: (
            <p>
              Éclats d’Éden se trouve au Sunset Boulevard, à Grand Baie. L’adresse est pensée comme une
              parenthèse décontractée : une petite maison blanche et turquoise, des palmiers et une
              terrasse ombragée.
            </p>
          ),
        },
      ]}
      primaryLink={{ href: "/menu", label: "Voir la carte", emoji: "🥞" }}
      related={[
        { href: "/galettes-sans-gluten-grand-baie", label: "Galettes de sarrasin", emoji: "🥞" },
        { href: "/langouste-grand-baie", label: "Langouste sur commande", emoji: "🦞" },
        { href: "/contact", label: "Nous trouver", emoji: "📍" },
      ]}
    />
  )
}
