import Image from "next/image"
import Link from "next/link"
import { Leaf, Sun, WheatOff } from "lucide-react"

const arguments_ = [
  {
    icon: WheatOff,
    title: "Sarrasin sans gluten",
    text: "Nos galettes sont faites à la farine de sarrasin, naturellement sans gluten.",
    color: "bg-palm-100 text-palm-700",
  },
  {
    icon: Leaf,
    title: "Produits d'ici",
    text: "Marlin fumé, ananas, fruits de saison : le meilleur du marché mauricien.",
    color: "bg-mango-100 text-mango-700",
  },
  {
    icon: Sun,
    title: "Du matin au coucher du soleil",
    text: "Petit-déjeuner, déjeuner ou pause gourmande — la cuisine reste ouverte.",
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
]

export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-lagoon-100/60 py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-pop-lg ring-8 ring-white sm:aspect-[4/3]">
            <Image
              src="/photos/terrasse-ombragee.webp"
              alt="La terrasse ombragée d'Éclats d'Éden, tables turquoise sous les parasols"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 hidden aspect-square w-40 overflow-hidden rounded-[1.5rem] shadow-pop ring-8 ring-white sm:block md:w-52">
            <Image
              src="/photos/panneau-directions.webp"
              alt="Le panneau de direction coloré à l'entrée"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-500">
            Le lieu
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-lagoon-800 md:text-5xl">
            Une parenthèse à l&apos;ombre des palmiers
          </h2>
          <p className="mt-5 text-lg text-lagoon-900/70">
            Au bout d&apos;une allée fleurie du Sunset Boulevard, une petite maison blanche et
            turquoise, quelques tables sous les parasols, et l&apos;odeur des galettes qui cuisent.
            On vient pour un café, on repart trois heures plus tard.
          </p>

          <div className="mt-8 space-y-4">
            {arguments_.map((a) => (
              <div key={a.title} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-lagoon-900/5">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${a.color}`}>
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-lagoon-800">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/galerie"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lagoon-500 px-6 py-3.5 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-lagoon-600"
          >
            📸 Visiter en photos
          </Link>
        </div>
      </div>
    </section>
  )
}
