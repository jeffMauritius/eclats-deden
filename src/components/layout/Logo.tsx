import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "dark",
  size = 48,
}: {
  className?: string
  /** `light` pour un fond sombre (hero), `dark` pour le header opaque. */
  variant?: "light" | "dark"
  size?: number
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Éclats d'Éden — retour à l'accueil"
    >
      <Image
        src="/logo-eclats.png"
        alt=""
        width={size}
        height={size}
        className="shrink-0 drop-shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
        priority
      />
      <span className="hidden leading-none sm:block">
        <span
          className={cn(
            "block font-display text-2xl font-bold leading-tight",
            variant === "light" ? "text-white" : "text-lagoon-700"
          )}
        >
          Éclats d&apos;Éden
        </span>
        <span
          className={cn(
            "block text-xs font-semibold uppercase tracking-[0.22em]",
            variant === "light" ? "text-white/70" : "text-fuchsia-500"
          )}
        >
          Sucré · Salé
        </span>
      </span>
    </Link>
  )
}
