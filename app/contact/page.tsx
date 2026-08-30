import type { Metadata } from "next"
import Image from "next/image"
import { Clock, Instagram, MapPin, PhoneCall, Star } from "lucide-react"
import { SiteConfig, TripadvisorRating } from "@/lib/config"
import { scheduleData } from "@/lib/schedule-data"
import { TodayHighlight } from "@/components/homePage/TodayHighlight"

export const metadata: Metadata = {
  title: "Contact & accès",
  description:
    "Éclats d'Éden — Sunset Boulevard, Grand Baie, Île Maurice. Horaires, téléphone et plan d'accès.",
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white/80 to-transparent py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-palm-200/40 blur-3xl" />
        <div className="container relative text-center">
          <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
            📍 Sunset Boulevard
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold text-lagoon-800 md:text-6xl">
            Nous <span className="text-gradient-tropic">trouver</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-lagoon-900/70">
            Au bout de l&apos;allée fleurie, la petite maison blanche et turquoise — suivez le
            panneau « Pause gourmande ».
          </p>
        </div>
      </section>

      <div className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Carte + repères visuels */}
          <div className="space-y-6 lg:col-span-3">
            <div className="h-[380px] overflow-hidden rounded-[2rem] shadow-pop ring-1 ring-lagoon-900/5 md:h-[440px]">
              <iframe
                src={SiteConfig.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Éclats d'Éden sur Google Maps"
              />
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-lagoon-800">
                Vous cherchez ça
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/photos/allee-pause-gourmande.webp", alt: "L'allée d'accès bordée de palmiers" },
                  { src: "/photos/panneau-directions.webp", alt: "Le panneau de direction coloré" },
                  { src: "/photos/facade-entree.webp", alt: "La façade blanche et turquoise" },
                ].map((p) => (
                  <div
                    key={p.src}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-pop ring-1 ring-lagoon-900/5"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-[1.75rem] bg-lagoon-800 p-7 text-white shadow-pop">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <MapPin className="h-5 w-5" />
              </span>
              <h2 className="font-display text-xl font-bold">Adresse</h2>
              <address className="mt-2 not-italic text-white/75">
                {SiteConfig.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={SiteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-lagoon-800 transition-transform hover:-translate-y-0.5"
              >
                Lancer l&apos;itinéraire →
              </a>
            </div>

            <a
              href={SiteConfig.phoneUrl}
              className="flex items-center gap-4 rounded-[1.75rem] bg-white p-6 shadow-pop ring-1 ring-lagoon-900/5 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fuchsia-100 text-fuchsia-600">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Téléphone</span>
                <span className="block font-display text-xl font-bold text-lagoon-800">
                  {SiteConfig.phone}
                </span>
              </span>
            </a>

            <a
              href={SiteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[1.75rem] bg-white p-6 shadow-pop ring-1 ring-lagoon-900/5 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lagoon-100 text-lagoon-600">
                <Instagram className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Instagram</span>
                <span className="block font-display text-xl font-bold text-lagoon-800">
                  {SiteConfig.instagramHandle}
                </span>
              </span>
            </a>

            <a
              href={TripadvisorRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[1.75rem] bg-mango-100 p-6 shadow-pop ring-1 ring-mango-200 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white">
                <Star className="h-5 w-5 fill-mango-400 text-mango-400" />
              </span>
              <span>
                <span className="block font-display text-xl font-bold text-lagoon-800">
                  {TripadvisorRating.score}/5 sur Tripadvisor
                </span>
                <span className="block text-sm text-lagoon-900/60">
                  {TripadvisorRating.reviews} avis
                </span>
              </span>
            </a>

            <div className="rounded-[1.75rem] bg-white p-7 shadow-pop ring-1 ring-lagoon-900/5">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-lagoon-100 text-lagoon-600">
                  <Clock className="h-5 w-5" />
                </span>
                <h2 className="font-display text-xl font-bold text-lagoon-800">Horaires</h2>
              </div>
              <ul className="space-y-1.5">
                {scheduleData.map((s) => (
                  <TodayHighlight key={s.day} day={s.day} hours={s.hours} />
                ))}
              </ul>
            </div>

            <a
              href={SiteConfig.phoneUrl}
              className="block rounded-[1.75rem] bg-fuchsia-500 px-6 py-5 text-center font-display text-lg font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
            >
              📞 Réserver par téléphone
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
