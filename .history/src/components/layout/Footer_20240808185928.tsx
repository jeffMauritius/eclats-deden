import Link from "next/link"
import { Typography } from "../ui/typography"
import { MapPin } from "lucide-react"
import { PhoneCall } from "lucide-react"
import { Clock } from "lucide-react"
import { Star } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-6/8 sticky bottom-0 z-40 border-card bg-background">
      <div className="m-auto w-full max-w-4xl px-2 ">
        <div className="flex w-full items-center justify-center">
          <div className="flex gap-8 text-sm text-muted-foreground md:flex-col">
            <Link className="flex hover:underline md:gap-4" href="/information">
              <MapPin />
              <p className="hidden md:block">
                La Cuvette Beach, Grand Baie, Île Maurice
              </p>
            </Link>
            <Link className="flex hover:underline md:gap-4" href="/legal/cgv">
              <PhoneCall />
              <p className="hidden md:block">+230 5798 8786</p>
            </Link>
            <Link className="flex hover:underline md:gap-4" href="/information">
              <Clock />
              <p className="hidden md:block">{`Horaires d'ouverture`}</p>
            </Link>
            <Link className="flex hover:underline md:gap-4" href="/admin">
              <Star />
              <p className="hidden md:block">Notes et avis</p>
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
