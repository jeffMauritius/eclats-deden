import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { PhoneCall } from "lucide-react"
import { SiteConfig } from "@/lib/config"
import { FloatingEmoji } from "@/components/decor/WaveDivider"

export type LandingSection = {
  title: string
  body: ReactNode
}

export type LandingLink = { href: string; label: string; emoji: string }

type LandingPageProps = {
  locale?: "fr" | "en"
  badge: string
  emoji: string
  title: ReactNode
  intro: ReactNode
  image: { src: string; alt: string }
  sections: LandingSection[]
  /** Encadré mis en avant (ex. mention allergènes). */
  notice?: ReactNode
  primaryLink: LandingLink
  /** Pages thématiques liées, pour le maillage interne. */
  related: LandingLink[]
}

const copy = {
  fr: {
    call: "Réserver par téléphone",
    whatsapp: "Écrire sur WhatsApp",
    bookTitle: "Réserver votre table",
    bookText: "Un appel ou un message WhatsApp suffit : dites-nous le jour, l’heure et le nombre de convives.",
    relatedTitle: "À découvrir aussi",
    address: "Sunset Boulevard, Grand Baie, Île Maurice",
  },
  en: {
    call: "Book by phone",
    whatsapp: "Message us on WhatsApp",
    bookTitle: "Book a table",
    bookText: "Call or message us before your visit — just tell us the day, time and number of guests.",
    relatedTitle: "You may also like",
    address: "Sunset Boulevard, Grand Baie, Mauritius",
  },
}

export function LandingPage({
  locale = "fr",
  badge,
  emoji,
  title,
  intro,
  image,
  sections,
  notice,
  primaryLink,
  related,
}: LandingPageProps) {
  const t = copy[locale]

  return (
    <div lang={locale}>
      <section className="relative overflow-hidden bg-gradient-to-b from-white/80 to-transparent py-14 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-mango-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <FloatingEmoji emoji={emoji} className="right-[6%] top-12 text-4xl opacity-40" />

        <div className="container relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <span className="inline-block -rotate-2 rounded-full bg-fuchsia-500 px-4 py-1.5 text-sm font-bold text-white">
              {badge}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-lagoon-800 md:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-lagoon-900/70 lg:mx-0">{intro}</p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={SiteConfig.phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-7 py-4 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
              >
                <PhoneCall className="h-5 w-5" />
                {t.call}
              </a>
              <Link
                href={primaryLink.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-lagoon-500 bg-white px-7 py-4 font-bold text-lagoon-700 transition-all hover:-translate-y-1 hover:bg-lagoon-50"
              >
                {primaryLink.emoji} {primaryLink.label}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-pop-lg ring-1 ring-lagoon-900/5">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="container pb-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s) => (
            <section
              key={s.title}
              className="rounded-[1.75rem] bg-white p-7 shadow-pop ring-1 ring-lagoon-900/5 md:p-9"
            >
              <h2 className="font-display text-2xl font-bold text-lagoon-800 md:text-3xl">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-lagoon-900/75">{s.body}</div>
            </section>
          ))}

          {notice && (
            <aside className="rounded-[1.75rem] bg-mango-100 p-6 text-lagoon-900 ring-1 ring-mango-300">
              {notice}
            </aside>
          )}

          <section className="rounded-[2rem] bg-lagoon-800 p-8 text-center text-white md:p-12">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">{t.bookTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-white/75">{t.bookText}</p>
            <p className="mt-2 text-sm text-white/60">{t.address}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={SiteConfig.phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-7 py-4 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
              >
                <PhoneCall className="h-5 w-5" />
                {SiteConfig.phone}
              </a>
              <a
                href={SiteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 px-7 py-4 font-bold text-white ring-1 ring-white/20 transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                {t.whatsapp}
              </a>
            </div>
          </section>

          <nav aria-label={t.relatedTitle}>
            <h2 className="mb-4 text-center font-display text-xl font-bold text-lagoon-800">
              {t.relatedTitle}
            </h2>
            <ul className="flex flex-wrap justify-center gap-3">
              {related.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-lagoon-700 shadow-sm ring-1 ring-lagoon-100 transition-all hover:-translate-y-0.5 hover:bg-lagoon-50"
                  >
                    {l.emoji} {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
