import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Star } from "lucide-react"
import { SiteConfig, TripadvisorRating } from "@/lib/config"
import { FloatingEmoji } from "@/components/decor/WaveDivider"
import { OpenBadge } from "@/components/layout/OpenBadge"

const collage = [
  { src: "/photos/terrasse-parasols.webp", alt: "La terrasse et ses parasols turquoise", className: "col-span-2 row-span-3", priority: true },
  { src: "/photos/galette-complete.webp", alt: "Galette complète avec œuf au plat", className: "col-span-2 row-span-2", priority: true },
  { src: "/photos/jus-carambole.webp", alt: "Jus de fruits frais décorés de carambole", className: "col-span-2 row-span-3" },
  { src: "/photos/gaufre-smoothies.webp", alt: "Gaufre gourmande et smoothies colorés", className: "col-span-2 row-span-2" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white/80 via-transparent to-transparent pb-16 pt-10 md:pb-24 md:pt-16">
      {/* Taches de couleur en arrière-plan */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mango-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-palm-200/40 blur-3xl" />

      <FloatingEmoji emoji="🌴" className="left-[4%] top-24 text-4xl opacity-40 md:text-5xl" />
      <FloatingEmoji emoji="🥥" className="right-[6%] top-16 text-3xl opacity-40 md:text-4xl" delay={1.5} />
      <FloatingEmoji emoji="🐚" className="bottom-16 left-[8%] text-3xl opacity-30" delay={3} />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-lagoon-700 shadow-sm ring-1 ring-lagoon-100">
              <OpenBadge />
            </span>
            <a
              href={TripadvisorRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-lagoon-700 shadow-sm ring-1 ring-lagoon-100 transition-transform hover:-translate-y-0.5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-mango-400 text-mango-400" />
              ))}
              <span className="ml-1">{TripadvisorRating.score}/5 sur Tripadvisor</span>
            </a>
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-lagoon-800 sm:text-6xl xl:text-7xl">
            Restaurant &amp;
            <span className="mx-2 inline-block -rotate-2 rounded-2xl bg-fuchsia-500 px-3 pb-1 text-white shadow-pop">
              crêperie
            </span>
            <br className="hidden sm:block" />
            à <span className="text-gradient-tropic">Grand Baie</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-lagoon-900/70 lg:mx-0">
            Crêpes sucrées, galettes de sarrasin sans gluten, burgers Wagyu et grandes salades
            tropicales — à déguster sous les parasols du{" "}
            <strong className="font-semibold text-lagoon-800">Sunset Boulevard</strong>.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={SiteConfig.phoneUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-7 py-4 text-base font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
            >
              <PhoneCall className="h-5 w-5" />
              Réserver par téléphone
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-lagoon-500 bg-white px-7 py-4 text-base font-bold text-lagoon-700 transition-all hover:-translate-y-1 hover:bg-lagoon-50"
            >
              🥞 Découvrir la carte
            </Link>
          </div>

          <p className="mt-6 text-sm text-lagoon-900/60">
            Une question ?{" "}
            <a href={SiteConfig.phoneUrl} className="font-bold text-lagoon-700 underline decoration-mango-300 decoration-2 underline-offset-4">
              {SiteConfig.phone}
            </a>
          </p>
        </div>

        {/* Collage photo */}
        <div className="relative">
          <div className="grid grid-cols-4 grid-rows-5 gap-3 [aspect-ratio:1/1.05] sm:gap-4">
            {collage.map((p, i) => (
              <div
                key={p.src}
                className={`animate-pop-in relative overflow-hidden rounded-[1.5rem] shadow-pop ring-4 ring-white ${p.className}`}
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority={p.priority}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
