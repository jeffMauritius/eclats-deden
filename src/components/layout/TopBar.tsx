import { Instagram, MapPin, PhoneCall } from "lucide-react"
import { SiteConfig } from "@/lib/config"
import { OpenBadge } from "./OpenBadge"

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-lagoon-600 via-lagoon-500 to-palm-500 text-white">
      <div className="container flex h-9 items-center justify-between gap-4 text-xs font-medium">
        <OpenBadge className="text-white/95" />

        <a
          href={SiteConfig.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 sm:flex"
        >
          <MapPin className="h-3.5 w-3.5" />
          Sunset Boulevard, Grand Baie
        </a>

        <div className="flex items-center gap-4">
          <a
            href={SiteConfig.phoneUrl}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">{SiteConfig.phone}</span>
          </a>
          <a
            href={SiteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Éclats d'Éden"
            className="transition-opacity hover:opacity-80"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
