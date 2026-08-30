import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, PhoneCall, Star } from "lucide-react"
import { SiteConfig, TripadvisorRating } from "@/lib/config"
import { scheduleSummary } from "@/lib/schedule-data"
import { navigationData } from "./navigationData"
import { menuCategories } from "@/lib/menu-data"
import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-lagoon-900 text-white">
      {/* Rappel des rayures de la carte papier */}
      <div className="stripes-lagoon h-2" aria-hidden="true" />

      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo-eclats.png" alt="" width={64} height={64} className="shrink-0" />
              <span className="leading-tight">
                <span className="block font-display text-2xl font-bold">Éclats d&apos;Éden</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-mango-300">
                  Sucré · Salé
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Crêperie et restaurant sur le Sunset Boulevard, à Grand Baie. Galettes de sarrasin,
              burgers, salades et jus pressés minute, à l&apos;ombre des palmiers.
            </p>

            <div className="mt-6 flex gap-2">
              {[
                { href: SiteConfig.instagram, label: "Instagram", icon: Instagram },
                { href: SiteConfig.phoneUrl, label: "Téléphone", icon: PhoneCall },
                { href: SiteConfig.googleMapsLink, label: "Itinéraire", icon: MapPin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-mango-300">Le site</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {navigationData.map((n) => (
                <li key={n.link}>
                  <Link href={n.link} className="transition-colors hover:text-white">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-mango-300">La carte</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {menuCategories.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link href={`/menu#${c.id}`} className="transition-colors hover:text-white">
                    {c.emoji} {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-mango-300">Nous rendre visite</h4>
            <address className="mt-4 not-italic text-sm text-white/70">
              {SiteConfig.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <a
                href={SiteConfig.phoneUrl}
                className="mt-3 block font-semibold text-white transition-colors hover:text-mango-300"
              >
                {SiteConfig.phone}
              </a>
            </address>

            <div className="mt-5 space-y-1.5 text-sm">
              {scheduleSummary.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 text-white/70">
                  <span>{s.label}</span>
                  <span className={cn("font-semibold", s.hours === "Fermé" ? "text-coral-300" : "text-white")}>
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={TripadvisorRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/20"
            >
              <Star className="h-4 w-4 fill-mango-300 text-mango-300" />
              {TripadvisorRating.score}/5 sur Tripadvisor
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Éclats d&apos;Éden — Tous droits réservés</p>
          <p>Fait avec 🥞 à Grand Baie, Île Maurice</p>
        </div>
      </div>
    </footer>
  )
}
