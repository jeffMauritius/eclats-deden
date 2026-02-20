import Link from "next/link"
import { MapPin, PhoneCall, Clock, Instagram } from "lucide-react"
import { SiteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-playfair text-lg font-bold text-primary mb-4">
              Éclats d&apos;Éden
            </h3>
            <p className="text-sm text-muted-foreground">
              Crêperie &amp; Restaurant
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Sunset Boulevard, Grand Baie
            </p>
            <p className="text-sm text-muted-foreground">
              Île Maurice
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={SiteConfig.phoneUrl}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                {SiteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Nous trouver
              </Link>
              <a
                href={SiteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Lundi</span>
                <span className="text-accent font-medium">Fermé</span>
              </div>
              <div className="flex justify-between">
                <span>Mar — Ven</span>
                <span>08h — 17h</span>
              </div>
              <div className="flex justify-between">
                <span>Sam — Dim</span>
                <span>10h — 17h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Éclats d&apos;Éden — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
