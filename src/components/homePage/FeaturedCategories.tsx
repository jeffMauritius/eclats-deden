import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { menuCategories, categoryFrom } from "@/lib/menu-data"

const HIGHLIGHTED = ["galettes", "salades", "burgers", "paninis", "crepes", "boissons"]

const accent = {
  lagoon: "bg-lagoon-500",
  fuchsia: "bg-fuchsia-500",
  mango: "bg-mango-400",
  coral: "bg-coral-400",
  palm: "bg-palm-500",
} as const

export function FeaturedCategories() {
  const cards = HIGHLIGHTED.map((id) => menuCategories.find((c) => c.id === id)!).filter(Boolean)

  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <header className="mb-12 text-center">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-500">
            Sucré · Salé
          </p>
          <h2 className="font-display text-4xl font-extrabold text-lagoon-800 md:text-5xl">
            <span className="title-brush">Ce qu&apos;on aime cuisiner</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lagoon-900/70">
            Des galettes bretonnes garnies de produits mauriciens, de vraies salades généreuses
            et des crêpes à toute heure de la journée.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((cat, i) => {
            const from = categoryFrom(cat)
            return (
              <Link
                key={cat.id}
                href={`/menu#${cat.id}`}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-pop ring-1 ring-lagoon-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-pop-lg"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-lagoon-900/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-xl shadow-sm backdrop-blur">
                    {cat.emoji}
                  </span>
                  {from && (
                    <span
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm ${accent[cat.color]}`}
                    >
                      dès {from} Rs
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-lagoon-800">{cat.title}</h3>
                  {cat.subtitle && (
                    <p className="mt-1 flex-1 text-sm text-muted-foreground">{cat.subtitle}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-fuchsia-500">
                    Voir la carte
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
