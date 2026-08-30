import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { menuCategories } from "@/lib/menu-data"
import { MenuSection } from "@/components/menu/MenuSection"
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav"
import { FloatingEmoji } from "@/components/decor/WaveDivider"
import { SiteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "La carte",
  description:
    "Galettes de sarrasin sans gluten, crêpes sucrées, burgers Wagyu, salades tropicales et jus pressés minute — la carte d'Éclats d'Éden à Grand Baie.",
}

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white/80 to-transparent py-14 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-mango-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <FloatingEmoji emoji="🥞" className="left-[7%] top-16 text-4xl opacity-40" />
        <FloatingEmoji emoji="🍹" className="right-[8%] top-24 text-4xl opacity-40" delay={2} />

        <div className="container relative text-center">
          <span className="inline-block -rotate-2 rounded-full bg-fuchsia-500 px-4 py-1.5 text-sm font-bold text-white">
            Sucré · Salé
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold text-lagoon-800 md:text-6xl">
            Notre <span className="text-gradient-tropic">carte</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-lagoon-900/70">
            Tout est préparé sur place, à la commande. Prix en roupies mauriciennes (Rs).
            Une allergie, une envie particulière ? Dites-le nous en salle.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SiteConfig.phoneUrl}
              className="rounded-full bg-fuchsia-500 px-6 py-3.5 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
            >
              📞 Réserver par téléphone
            </a>
            <Link
              href="/galerie"
              className="rounded-full border-2 border-lagoon-500 bg-white px-6 py-3.5 font-bold text-lagoon-700 transition-all hover:-translate-y-1 hover:bg-lagoon-50"
            >
              📸 Voir les photos
            </Link>
          </div>
        </div>
      </section>

      <MenuCategoryNav categories={menuCategories} />

      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}

          {/* Les deux faces de la carte présentée en salle */}
          <section className="rounded-[2rem] bg-lagoon-800 p-7 text-white md:p-10">
            <div className="text-center">
              <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
                📄 La carte en salle
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold">
                Version française &amp; version anglaise
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/75">
                Notre carte papier reprend l&apos;ensemble de nos plats, en français au recto et en
                anglais au verso. Les suggestions du jour, elles, sont sur l&apos;ardoise.
              </p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                { src: "/menu/carte-menu-fr.webp", label: "Version française" },
                { src: "/menu/carte-menu-en.webp", label: "English version" },
              ].map((c) => (
                <figure key={c.src}>
                  <div className="relative aspect-[1059/1500] overflow-hidden rounded-2xl bg-white shadow-pop-lg ring-4 ring-white/10">
                    <Image
                      src={c.src}
                      alt={`Carte d'Éclats d'Éden — ${c.label}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 340px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm font-semibold text-white/70">
                    {c.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
