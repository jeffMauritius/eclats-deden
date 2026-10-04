import type { Metadata } from "next"
import { SiteConfig } from "@/lib/config"
import { scheduleData } from "@/lib/schedule-data"

export const SITE_URL = "https://eclatsdeden.com"

const DEFAULT_IMAGE = "/photos/terrasse-parasols.webp"

type PageSeo = {
  title: string
  description: string
  /** Équivalent dans l'autre langue, pour les balises hreflang. */
  alternate?: { fr: string; en: string }
  locale?: "fr" | "en"
  image?: string
}

/** Title / description par page (cf. pack SEO `seo/meta.json`). */
export const pageSeo = {
  "/": {
    title: "Restaurant Grand Baie | Brunch & Crêperie – Éclats d’Éden",
    description:
      "Éclats d’Éden à Grand Baie : restaurant, brunch et crêperie au Sunset Boulevard. Galettes, salades, burgers, jus frais et cuisine maison.",
    alternate: { fr: "/", en: "/en" },
  },
  "/menu": {
    title: "Menu Restaurant Grand Baie | Éclats d’Éden",
    description:
      "Découvrez la carte d’Éclats d’Éden à Grand Baie : galettes de sarrasin, burgers, salades, poisson frais, crêpes, gaufres et jus maison.",
  },
  "/galerie": {
    title: "Photos du restaurant à Grand Baie | Éclats d’Éden",
    description:
      "Découvrez Éclats d’Éden en images : terrasse à Grand Baie, galettes, salades, jus frais, desserts et langouste grillée.",
  },
  "/contact": {
    title: "Restaurant Sunset Boulevard Grand Baie | Contact",
    description:
      "Retrouvez Éclats d’Éden au Sunset Boulevard à Grand Baie. Adresse, horaires, téléphone, WhatsApp et informations pratiques.",
  },
  "/brunch-grand-baie": {
    title: "Brunch Grand Baie | Éclats d’Éden – Île Maurice",
    description:
      "Envie d’un brunch à Grand Baie ? Galettes, crêpes, gaufres, jus pressés minute et café vous attendent chez Éclats d’Éden.",
    alternate: { fr: "/brunch-grand-baie", en: "/en/brunch-grand-baie" },
    image: "/photos/gaufre-smoothies.webp",
  },
  "/galettes-sans-gluten-grand-baie": {
    title: "Galettes sans gluten Grand Baie | Éclats d’Éden",
    description:
      "À Grand Baie, découvrez nos galettes préparées avec de la farine de sarrasin naturellement sans gluten, garnies à la commande.",
    image: "/photos/galette-complete.webp",
  },
  "/langouste-grand-baie": {
    title: "Langouste Grand Baie | Éclats d’Éden",
    description:
      "Langouste grillée à Grand Baie, préparée sur commande et selon arrivage chez Éclats d’Éden au Sunset Boulevard.",
    image: "/photos/langouste-assiette.webp",
  },
  "/en": {
    title: "Restaurant in Grand Baie | Brunch & Crêpes – Éclats d’Éden",
    description:
      "Restaurant in Grand Baie at Sunset Boulevard. Enjoy brunch, buckwheat galettes, burgers, salads, fresh juices, crêpes and homemade dishes.",
    alternate: { fr: "/", en: "/en" },
    locale: "en",
  },
  "/en/brunch-grand-baie": {
    title: "Brunch in Grand Baie Mauritius | Éclats d’Éden",
    description:
      "Looking for brunch in Grand Baie? Enjoy buckwheat galettes, crêpes, waffles, fresh juices and coffee at Éclats d’Éden.",
    alternate: { fr: "/brunch-grand-baie", en: "/en/brunch-grand-baie" },
    locale: "en",
    image: "/photos/gaufre-smoothies.webp",
  },
} satisfies Record<string, PageSeo>

export type SeoPath = keyof typeof pageSeo

/** Metadata Next complète d'une page : title absolu, canonical, hreflang, Open Graph. */
export function pageMetadata(path: SeoPath): Metadata {
  const page: PageSeo = pageSeo[path]
  const locale = page.locale ?? "fr"

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: path,
      languages: page.alternate
        ? { fr: page.alternate.fr, en: page.alternate.en, "x-default": page.alternate.fr }
        : undefined,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_GB" : "fr_FR",
      siteName: SiteConfig.title,
      title: page.title,
      description: page.description,
      url: path,
      images: [page.image ?? DEFAULT_IMAGE],
    },
  }
}

const DAY_EN: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
}

/** Horaires schema.org dérivés de `scheduleData`, pour rester synchronisés avec le site. */
function openingHoursSpecification() {
  const groups = new Map<string, { opens: string; closes: string; days: string[] }>()
  for (const d of scheduleData) {
    if (!d.open || !d.close) continue
    const key = `${d.open}-${d.close}`
    const group = groups.get(key) ?? { opens: d.open, closes: d.close, days: [] }
    group.days.push(DAY_EN[d.day])
    groups.set(key, group)
  }
  return Array.from(groups.values()).map((g) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: g.days,
    opens: g.opens,
    closes: g.closes,
  }))
}

/** Fiche établissement pour les moteurs de recherche. */
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: SiteConfig.title,
  url: `${SITE_URL}/`,
  description: SiteConfig.description,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  servesCuisine: SiteConfig.cuisines,
  priceRange: "Rs 150 – Rs 800",
  telephone: SiteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sunset Boulevard",
    addressLocality: "Grand Baie",
    addressCountry: "MU",
  },
  openingHoursSpecification: openingHoursSpecification(),
  hasMenu: `${SITE_URL}/menu`,
  acceptsReservations: true,
  sameAs: [SiteConfig.instagram, SiteConfig.facebook, SiteConfig.tiktok, SiteConfig.tripadvisor],
}

/** Questions fréquentes affichées sur l'accueil (et reprises en JSON-LD FAQPage). */
export const homeFaq = [
  {
    question: "Où manger à Grand Baie ?",
    answer:
      "Éclats d’Éden vous accueille au Sunset Boulevard à Grand Baie pour le petit-déjeuner, le brunch, le déjeuner ou une pause gourmande.",
  },
  {
    question: "Où bruncher à Grand Baie ?",
    answer:
      "Éclats d’Éden propose notamment des galettes de sarrasin, crêpes, gaufres, jus de fruits frais, café et plats salés à déguster en terrasse.",
  },
  {
    question: "Le restaurant possède-t-il une terrasse ?",
    answer: "Oui. Éclats d’Éden dispose d’une terrasse ombragée au Sunset Boulevard à Grand Baie.",
  },
  {
    question: "Les galettes sont-elles sans gluten ?",
    answer:
      "Les galettes sont préparées avec de la farine de sarrasin naturellement sans gluten. En cas d’allergie sévère ou de maladie cœliaque, signalez-le à l’équipe avant de commander.",
  },
  {
    question: "Peut-on réserver ?",
    answer: "Oui. Vous pouvez contacter directement Éclats d’Éden par téléphone ou WhatsApp.",
  },
  {
    question: "Peut-on manger de la langouste à Grand Baie chez Éclats d’Éden ?",
    answer:
      "La langouste grillée est proposée sur commande et selon arrivage. Il est recommandé de contacter le restaurant à l’avance.",
  },
]

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
