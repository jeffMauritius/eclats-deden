import { cn } from "@/lib/utils"

/**
 * Vague décorative entre deux sections. `fill` est la couleur de la section
 * qui suit, `className` porte celle de la section qui précède.
 */
export function WaveDivider({
  fill = "fill-background",
  className,
  flip = false,
}: {
  fill?: string
  className?: string
  flip?: boolean
}) {
  return (
    <div className={cn("relative -mb-px leading-[0]", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn("block h-[50px] w-full md:h-[80px]", fill, flip && "rotate-180")}
      >
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,95 1440,45 L1440,90 L0,90 Z" />
      </svg>
    </div>
  )
}

/** Petits éléments tropicaux flottants, purement décoratifs. */
export function FloatingEmoji({
  emoji,
  className,
  delay = 0,
}: {
  emoji: string
  className?: string
  delay?: number
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute animate-float select-none", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {emoji}
    </span>
  )
}
