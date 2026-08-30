import Image from "next/image"
import { PhoneCall } from "lucide-react"
import { SiteConfig } from "@/lib/config"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-pop-lg">
          <Image
            src="/photos/allee-pause-gourmande.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lagoon-900/90 via-lagoon-800/80 to-lagoon-700/60" />

          <div className="relative px-7 py-16 text-center text-white md:px-16 md:py-20">
            <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
              📞 Réservation par téléphone
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Gardez-nous une table à l&apos;ombre
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              Un appel suffit : dites-nous le jour, l&apos;heure et le nombre de convives.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={SiteConfig.phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-8 py-4 text-lg font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
              >
                <PhoneCall className="h-5 w-5" />
                {SiteConfig.phone}
              </a>
              <a
                href={SiteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
