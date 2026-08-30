"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, PhoneCall } from "lucide-react"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav"
import { TopBar } from "./TopBar"
import { navigationData, type NavItem } from "./navigationData"
import { SiteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpenMenu(null), [pathname])

  const isActive = (item: NavItem) =>
    item.link === "/" ? pathname === "/" : pathname.startsWith(item.link)

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-lagoon-100 bg-white/90 shadow-[0_8px_30px_-18px_rgb(28_77_104/0.5)] backdrop-blur-xl"
            : "border-transparent bg-white/70 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "container flex items-center justify-between gap-4 transition-all duration-300",
            scrolled ? "h-[4.75rem]" : "h-24"
          )}
        >
          <Logo size={scrolled ? 60 : 76} />

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationData.map((item) =>
              item.children ? (
                <MegaMenu
                  key={item.link}
                  item={item}
                  active={isActive(item)}
                  open={openMenu === item.link}
                  onOpenChange={(v) => setOpenMenu(v ? item.link : null)}
                />
              ) : (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    isActive(item)
                      ? "bg-lagoon-500 text-white shadow-sm"
                      : "text-lagoon-800/80 hover:bg-lagoon-50 hover:text-lagoon-700"
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SiteConfig.phoneUrl}
              className="hidden items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-bold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:bg-fuchsia-600 sm:inline-flex"
            >
              <PhoneCall className="h-4 w-4" />
              Réserver par téléphone
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

function MegaMenu({
  item,
  active,
  open,
  onOpenChange,
}: {
  item: NavItem
  active: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()

  // Fermeture différée : traverser l'espace entre le bouton et le panneau ne
  // doit pas refermer le menu.
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => onOpenChange(false), 140)
  }
  const cancelClose = () => clearTimeout(closeTimer.current)

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        onOpenChange(true)
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={item.link}
        aria-expanded={open}
        onFocus={() => onOpenChange(true)}
        className={cn(
          "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all",
          active || open
            ? "bg-lagoon-500 text-white shadow-sm"
            : "text-lagoon-800/80 hover:bg-lagoon-50 hover:text-lagoon-700"
        )}
      >
        {item.title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </Link>

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="animate-pop-in overflow-hidden rounded-[1.75rem] border-2 border-lagoon-100 bg-white p-3 shadow-pop-lg">
            <div className="grid grid-cols-2 gap-1">
              {item.children?.map((child) => (
                <Link
                  key={child.link}
                  href={child.link}
                  onClick={() => onOpenChange(false)}
                  className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-lagoon-50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mango-100 text-lg transition-transform group-hover:scale-110">
                    {child.emoji}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-lagoon-800">{child.title}</span>
                    {child.hint && (
                      <span className="block truncate text-xs text-muted-foreground">{child.hint}</span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/menu"
              onClick={() => onOpenChange(false)}
              className="mt-2 block rounded-2xl bg-gradient-to-r from-lagoon-500 to-palm-500 px-4 py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Voir toute la carte →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
