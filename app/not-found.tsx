import Link from "next/link"
import Image from "next/image"
import { PhoneCall } from "lucide-react"
import { SiteConfig } from "@/lib/config"
import { FloatingEmoji } from "@/components/decor/WaveDivider"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white/80 to-transparent py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mango-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <FloatingEmoji emoji="🌴" className="left-[8%] top-16 text-5xl opacity-40" />
      <FloatingEmoji emoji="🥥" className="right-[10%] top-24 text-4xl opacity-40" delay={1.5} />

      <div className="container relative max-w-2xl text-center">
        <Image
          src="/logo-eclats.png"
          alt=""
          width={110}
          height={110}
          className="mx-auto animate-float"
        />
        <p className="mt-8 font-display text-7xl font-extrabold text-gradient-sunset">404</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-lagoon-800 md:text-4xl">
          Cette page a filé au soleil
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-lagoon-900/70">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Voici de quoi retrouver
          votre chemin.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={SiteConfig.phoneUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-7 py-4 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
          >
            <PhoneCall className="h-5 w-5" />
            Réserver par téléphone
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-lagoon-500 bg-white px-7 py-4 font-bold text-lagoon-700 transition-all hover:-translate-y-1 hover:bg-lagoon-50"
          >
            Retour à l&apos;accueil
          </Link>
        </div>

        <nav className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { title: "La carte", link: "/menu", emoji: "🥞" },
            { title: "Galerie", link: "/galerie", emoji: "📸" },
            { title: "Contact & accès", link: "/contact", emoji: "📍" },
          ].map((l) => (
            <Link
              key={l.link}
              href={l.link}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-lagoon-800/80 ring-1 ring-lagoon-900/10 transition-colors hover:bg-lagoon-50"
            >
              {l.emoji} {l.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
