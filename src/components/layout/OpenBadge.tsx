"use client"

import { useEffect, useState } from "react"
import { getOpenState, type OpenState } from "@/lib/schedule-data"
import { cn } from "@/lib/utils"

/**
 * Pastille « ouvert / fermé ». Calculée côté client uniquement : rendue au
 * serveur elle figerait l'état dans le HTML statique de Vercel.
 */
export function OpenBadge({ className }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null)

  useEffect(() => {
    const tick = () => setState(getOpenState())
    tick()
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])

  if (!state) return null

  return (
    <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", className)}>
      <span className="relative flex h-2 w-2">
        {state.isOpen && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-palm-300 opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            state.isOpen ? "bg-palm-300" : "bg-coral-300"
          )}
        />
      </span>
      {state.label}
    </span>
  )
}
