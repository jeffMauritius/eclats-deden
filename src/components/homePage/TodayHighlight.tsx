"use client"

import { useEffect, useState } from "react"
import { getTodaySchedule } from "@/lib/schedule-data"
import { cn } from "@/lib/utils"

/**
 * Une ligne d'horaire. Le jour courant n'est mis en avant qu'après hydratation :
 * le HTML est mis en cache et ne doit pas figer « aujourd'hui ».
 */
export function TodayHighlight({ day, hours }: { day: string; hours: string }) {
  const [today, setToday] = useState<string | null>(null)

  useEffect(() => setToday(getTodaySchedule().day), [])

  const isToday = today === day
  const closed = hours === "Fermé"

  return (
    <li
      className={cn(
        "flex items-center justify-between rounded-xl px-4 py-2.5 transition-colors",
        isToday ? "bg-lagoon-500 text-white" : "odd:bg-lagoon-50/70"
      )}
    >
      <span className="font-medium">
        {day}
        {isToday && <span className="ml-2 text-xs font-bold uppercase opacity-80">Aujourd&apos;hui</span>}
      </span>
      <span
        className={cn(
          "font-bold",
          isToday ? "text-white" : closed ? "text-coral-500" : "text-lagoon-700"
        )}
      >
        {hours}
      </span>
    </li>
  )
}
