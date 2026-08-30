import Image from "next/image"
import Link from "next/link"

const shots = [
  { src: "/photos/langouste-assiette.webp", alt: "Langouste grillée servie avec riz et crudités" },
  { src: "/photos/gratin-cocotte.webp", alt: "Plat du jour servi en cocotte de fonte" },
  { src: "/photos/langouste-croque.webp", alt: "Langouste grillée accompagnée d'un croque-monsieur" },
]

export function ArdoiseSection() {
  return (
    <section className="relative overflow-hidden bg-lagoon-800 py-16 text-white md:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-palm-500/20 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
            🦞 Ardoise & sur commande
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold md:text-5xl">
            Ce qui ne figure pas sur la carte
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Chaque matin, le chef écrit son ardoise : plat du jour et dessert d&apos;inspiration.
            Et sur commande, à réserver à l&apos;avance : la{" "}
            <strong className="font-semibold text-mango-300">langouste grillée</strong> (400 Rs / 100 g)
            et la pièce de bœuf.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className={`relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-pop-lg ring-4 ring-white/10 ${
                i === 1 ? "sm:mt-8" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu#sur-commande"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-lagoon-800 shadow-pop transition-all hover:-translate-y-1"
          >
            Langouste &amp; plats sur commande →
          </Link>
        </div>
      </div>
    </section>
  )
}
