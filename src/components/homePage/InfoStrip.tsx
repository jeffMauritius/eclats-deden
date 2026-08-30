import Link from "next/link"
import { Clock, MapPin, PhoneCall, Star } from "lucide-react"
import { SiteConfig, TripadvisorRating } from "@/lib/config"
import { scheduleData } from "@/lib/schedule-data"
import { TodayHighlight } from "./TodayHighlight"

export function InfoStrip() {
  return (
    <section className="bg-lagoon-100/60 py-16 md:py-24">
      <div className="container grid gap-5 lg:grid-cols-3">
        {/* Horaires */}
        <div className="rounded-[1.75rem] bg-white p-7 shadow-pop ring-1 ring-lagoon-900/5 lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-lagoon-100 text-lagoon-600">
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-bold text-lagoon-800">Nos horaires</h3>
          </div>

          <ul className="grid gap-1.5 sm:grid-cols-2">
            {scheduleData.map((s) => (
              <TodayHighlight key={s.day} day={s.day} hours={s.hours} />
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            Heure de l&apos;Île Maurice (UTC+4). Fermeture de la cuisine 30 minutes avant la fermeture.
          </p>
        </div>

        {/* Adresse + contact */}
        <div className="flex flex-col gap-5">
          <div className="flex-1 rounded-[1.75rem] bg-lagoon-800 p-7 text-white shadow-pop">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/10">
              <MapPin className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-bold">Nous trouver</h3>
            <p className="mt-2 text-white/75">
              {SiteConfig.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <a
              href={SiteConfig.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-lagoon-800 transition-transform hover:-translate-y-0.5"
            >
              Ouvrir l&apos;itinéraire →
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
              <span className="block text-sm text-muted-foreground">Appelez-nous</span>
              <span className="block font-display text-xl font-bold text-lagoon-800">
                {SiteConfig.phone}
              </span>
            </span>
          </a>

          <a
            href={TripadvisorRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[1.75rem] bg-mango-100 p-6 shadow-pop ring-1 ring-mango-200 transition-transform hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-mango-500">
              <Star className="h-5 w-5 fill-mango-400 text-mango-400" />
            </span>
            <span>
              <span className="block font-display text-xl font-bold text-lagoon-800">
                {TripadvisorRating.score}/5 sur Tripadvisor
              </span>
              <span className="block text-sm text-lagoon-900/60">
                {TripadvisorRating.reviews} avis · lire &amp; laisser le vôtre
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="container mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-full border-2 border-lagoon-500 bg-white px-7 py-3.5 font-bold text-lagoon-700 transition-all hover:-translate-y-1 hover:bg-lagoon-50"
        >
          Plan d&apos;accès et contact →
        </Link>
      </div>
    </section>
  )
}
