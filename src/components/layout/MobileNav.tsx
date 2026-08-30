"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Instagram, Menu, PhoneCall, MapPin } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { navigationData } from "./navigationData"
import { SiteConfig } from "@/lib/config"
import { scheduleSummary } from "@/lib/schedule-data"
import { OpenBadge } from "./OpenBadge"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-lagoon-500 text-white shadow-pop transition-transform active:scale-95 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-0 bg-gradient-to-b from-lagoon-600 via-lagoon-700 to-lagoon-900 p-0 text-white sm:max-w-md"
      >
        <div className="flex min-h-full flex-col p-6 pt-8">
          <SheetTitle asChild>
            <div className="mb-8 flex items-center gap-3">
              <Image src="/logo-eclats.png" alt="" width={56} height={56} className="shrink-0" />
              <span className="leading-tight">
                <span className="block font-display text-2xl font-bold">Éclats d&apos;Éden</span>
                <OpenBadge className="text-xs font-medium text-white/75" />
              </span>
            </div>
          </SheetTitle>

          <nav className="flex flex-col gap-2">
            {navigationData.map((item, i) => {
              const active = item.link === "/" ? pathname === "/" : pathname.startsWith(item.link)
              return (
                <div key={item.link} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={item.link}
                    onClick={close}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3.5 text-lg font-bold transition-colors",
                      active ? "bg-white text-lagoon-700" : "text-white hover:bg-white/10"
                    )}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    {item.title}
                  </Link>

                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-wrap gap-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.link}
                          href={child.link}
                          onClick={close}
                          className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 transition-colors hover:bg-white/20"
                        >
                          {child.emoji} {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <a
            href={SiteConfig.phoneUrl}
            onClick={close}
            className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-500 px-6 py-4 text-center text-lg font-bold shadow-pop transition-colors hover:bg-fuchsia-600"
          >
            <PhoneCall className="h-5 w-5" />
            Réserver par téléphone
          </a>

          <div className="mt-auto space-y-4 pt-10">
            <div className="rounded-2xl bg-white/10 p-4 text-sm">
              <p className="mb-2 font-display text-base font-bold">Horaires</p>
              {scheduleSummary.map((s) => (
                <div key={s.label} className="flex justify-between py-0.5 text-white/80">
                  <span>{s.label}</span>
                  <span className={cn("font-semibold", s.hours === "Fermé" ? "text-mango-300" : "text-white")}>
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <a
                href={SiteConfig.phoneUrl}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 font-semibold transition-colors hover:bg-white/20"
              >
                <PhoneCall className="h-4 w-4" /> Appeler
              </a>
              <a
                href={SiteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 font-semibold transition-colors hover:bg-white/20"
              >
                <MapPin className="h-4 w-4" /> Itinéraire
              </a>
              <a
                href={SiteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
