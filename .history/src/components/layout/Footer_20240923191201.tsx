import Link from "next/link"
import { Typography } from "../ui/typography"
import { MapPin } from "lucide-react"
import { PhoneCall } from "lucide-react"
import { Clock } from "lucide-react"
import { Instagram } from "lucide-react"

export const Footer = () => {
  const phone_url = "tel:+23058588829"
  return (
    <footer className="w-6/8 z-40 border-card bg-background">
      <div className="m-auto w-full max-w-4xl px-2 ">
        <div className="flex w-full items-center justify-center">
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link className="flex hover:underline md:gap-4" href="/location">
              <MapPin />
              <p className="hidden md:block">
                La Cuvette Beach, Grand Baie, Île Maurice
              </p>
            </Link>
            <div className="flex hover:underline md:hidden md:gap-4">
              <a href={phone_url}>
                <PhoneCall />
              </a>
            </div>

            <Link className="flex hover:underline md:block md:gap-4" href="">
              <PhoneCall />
              <p className="hidden md:block">+230 5858 8829</p>
            </Link>
            <Link className="flex hover:underline md:gap-4" href="/schedule">
              <Clock />
              <p className="hidden md:block">{`Horaires d'ouverture`}</p>
            </Link>
            <Link
              className="flex hover:underline md:gap-4"
              href="https://www.instagram.com/eclatsdeden?igsh=MXNyM2UxaDQycHpwcA=="
            >
              <Instagram />
              <p className="hidden md:block">{`Instagram`}</p>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-3">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Eclats d&rsquo;Eden
          </Typography>
        </div>
      </div>
    </footer>
  )
}
