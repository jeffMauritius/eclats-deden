import type { Metadata } from "next"
import { LandingPage } from "@/components/seo/LandingPage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/langouste-grand-baie")

export default function LangoustePage() {
  return (
    <LandingPage
      badge="🦞 Sur commande"
      emoji="🦞"
      title="Langouste grillée à Grand Baie"
      intro={
        <>
          Envie de <strong>langouste à Grand Baie</strong> ? Éclats d’Éden propose de la langouste
          grillée sur commande, selon arrivage.
        </>
      }
      image={{ src: "/photos/langouste-assiette.webp", alt: "Langouste grillée sur commande chez Éclats d’Éden" }}
      sections={[
        {
          title: "Une préparation sur commande",
          body: (
            <p>
              La disponibilité dépend des arrivages. La réservation à l’avance permet à l’équipe de
              confirmer la disponibilité et de préparer votre repas dans les meilleures conditions.
            </p>
          ),
        },
        {
          title: "Au Sunset Boulevard",
          body: (
            <p>
              Dégustez votre langouste sur la terrasse d’Éclats d’Éden, au cœur de Grand Baie.
            </p>
          ),
        },
        {
          title: "Réserver",
          body: (
            <p>
              Contactez directement le restaurant avant votre venue pour connaître la disponibilité et
              le tarif du moment.
            </p>
          ),
        },
      ]}
      primaryLink={{ href: "/menu#sur-commande", label: "Voir la carte", emoji: "📋" }}
      related={[
        { href: "/brunch-grand-baie", label: "Brunch à Grand Baie", emoji: "☀️" },
        { href: "/galettes-sans-gluten-grand-baie", label: "Galettes de sarrasin", emoji: "🥞" },
        { href: "/galerie", label: "Voir les photos", emoji: "📸" },
      ]}
    />
  )
}
