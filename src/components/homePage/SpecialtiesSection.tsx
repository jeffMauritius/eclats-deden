import Image from "next/image"
import Link from "next/link"

const specialties = [
  {
    href: "/brunch-grand-baie",
    title: "Brunch à Grand Baie",
    text: "Crêpes, gaufres, galettes, jus de fruits frais et café : une adresse pour prendre son temps le matin ou en journée.",
    cta: "Bruncher à Grand Baie",
    image: { src: "/photos/gaufre-smoothies.webp", alt: "Gaufre et smoothies servis en terrasse" },
  },
  {
    href: "/galettes-sans-gluten-grand-baie",
    title: "Galettes de sarrasin",
    text: "Préparées avec de la farine de sarrasin, naturellement sans gluten, et garnies à la commande.",
    cta: "Découvrir nos galettes",
    image: { src: "/photos/galette-complete.webp", alt: "Galette de sarrasin complète" },
  },
  {
    href: "/langouste-grand-baie",
    title: "Langouste sur commande",
    text: "Selon arrivage, nous proposons de la langouste grillée sur commande. Pensez à réserver à l’avance.",
    cta: "Découvrir la langouste",
    image: { src: "/photos/langouste-assiette.webp", alt: "Langouste grillée sur commande" },
  },
]

export function SpecialtiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
            ☀️ Du matin au déjeuner
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-lagoon-800 md:text-5xl">
            Où manger à Grand Baie ?
          </h2>
          <p className="mt-4 text-lg text-lagoon-900/70">
            Envie d’un café, d’un petit-déjeuner, d’un brunch ou d’un déjeuner ? Installez-vous en
            terrasse : galette salée, salade fraîche, plat du jour ou pause sucrée. Notre cuisine mêle
            inspiration bretonne et produits mauriciens — marlin fumé, fruits de saison, poisson frais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {specialties.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-pop ring-1 ring-lagoon-900/5 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-lagoon-800">{s.title}</h3>
                <p className="mt-2 text-lagoon-900/70">{s.text}</p>
                <span className="mt-4 inline-block font-bold text-fuchsia-600">{s.cta} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
