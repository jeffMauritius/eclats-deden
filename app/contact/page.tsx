import { Metadata } from "next"
import { MapPin, PhoneCall, Clock, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteConfig } from "@/lib/config"
import { scheduleData } from "@/lib/schedule-data"

export const metadata: Metadata = {
  title: "Contact",
  description: "Retrouvez-nous au Sunset Boulevard, Grand Baie, Île Maurice",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
          Nous trouver
        </h1>
        <p className="text-muted-foreground mt-3">
          Sunset Boulevard, Grand Baie — Île Maurice
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg border border-border/30 h-[400px]">
          <iframe
            src={SiteConfig.googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Éclats d'Éden — Google Maps"
          />
        </div>

        <div className="space-y-6">
          <Card className="border-border/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-muted-foreground">{SiteConfig.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <PhoneCall className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Téléphone</h3>
                  <a
                    href={SiteConfig.phoneUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SiteConfig.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Instagram className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Instagram</h3>
                  <a
                    href={SiteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @eclatsdeden
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-2">Horaires</h3>
                  <div className="space-y-1">
                    {scheduleData.map((s) => (
                      <div key={s.day} className="flex justify-between text-sm gap-8">
                        <span className="text-muted-foreground">{s.day}</span>
                        <span className={s.hours === "Fermé" ? "text-accent font-medium" : "text-foreground"}>
                          {s.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
