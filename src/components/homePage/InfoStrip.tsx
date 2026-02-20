import { MapPin, Clock, PhoneCall } from "lucide-react"
import { SiteConfig } from "@/lib/config"

export function InfoStrip() {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="font-playfair font-bold text-lg">Adresse</h3>
            <p className="text-muted-foreground text-sm">
              Sunset Boulevard<br />Grand Baie, Île Maurice
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="font-playfair font-bold text-lg">Horaires</h3>
            <p className="text-muted-foreground text-sm">
              Mar — Ven : 08h — 17h<br />Sam — Dim : 10h — 17h<br />Lundi : Fermé
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PhoneCall className="h-8 w-8 text-primary" />
            <h3 className="font-playfair font-bold text-lg">Téléphone</h3>
            <a
              href={SiteConfig.phoneUrl}
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              {SiteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
