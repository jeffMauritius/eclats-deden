import type { Metadata } from "next"
import { LandingPage } from "@/components/seo/LandingPage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/galettes-sans-gluten-grand-baie")

export default function GalettesPage() {
  return (
    <LandingPage
      badge="🌾 Farine de sarrasin"
      emoji="🥞"
      title="Galettes de sarrasin à Grand Baie"
      intro={
        <>
          Éclats d’Éden propose à Grand Baie une sélection de{" "}
          <strong>galettes préparées à base de farine de sarrasin, naturellement sans gluten</strong>.
        </>
      }
      image={{ src: "/photos/galette-complete.webp", alt: "Galette de sarrasin complète servie chez Éclats d’Éden" }}
      sections={[
        {
          title: "Une signature bretonne à l’Île Maurice",
          body: (
            <>
              <p>
                Notre carte associe la tradition de la galette bretonne à des ingrédients et
                inspirations locales. Retrouvez notamment des recettes au jambon, au poulet mariné, aux
                légumes ou au marlin.
              </p>
              <p>Chaque galette est préparée à la commande.</p>
            </>
          ),
        },
        {
          title: "Naturellement sans gluten",
          body: (
            <p>
              Le sarrasin ne contient naturellement pas de gluten. Cette mention concerne la farine
              utilisée pour les galettes.
            </p>
          ),
        },
        {
          title: "Où manger une galette à Grand Baie ?",
          body: (
            <p>
              Retrouvez-nous au Sunset Boulevard, à Grand Baie, sur notre terrasse à l’ombre des
              palmiers.
            </p>
          ),
        },
      ]}
      notice={
        <p>
          <strong>Important :</strong> si vous êtes atteint de maladie cœliaque ou présentez une
          allergie sévère, signalez-le impérativement à l’équipe avant de commander.
        </p>
      }
      primaryLink={{ href: "/menu#galettes", label: "Voir toutes les galettes", emoji: "🥞" }}
      related={[
        { href: "/brunch-grand-baie", label: "Brunch à Grand Baie", emoji: "☀️" },
        { href: "/langouste-grand-baie", label: "Langouste sur commande", emoji: "🦞" },
        { href: "/contact", label: "Nous contacter", emoji: "📍" },
      ]}
    />
  )
}
