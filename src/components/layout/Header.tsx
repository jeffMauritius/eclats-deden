"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav"
import { navigationData } from "./navigationData"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {navigationData.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.link
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
