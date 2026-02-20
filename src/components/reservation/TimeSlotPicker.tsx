"use client"

import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface TimeSlotPickerProps {
  date: string
  value?: string
  onChange: (slot: string) => void
}

export function TimeSlotPicker({ date, value, onChange }: TimeSlotPickerProps) {
  const [slots, setSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!date) return
    setLoading(true)
    fetch(`/api/available-slots?date=${date}`)
      .then((res) => res.json())
      .then((data) => setSlots(data.availableSlots ?? []))
      .catch(() => setSlots([]))
      .finally(() => setLoading(false))
  }, [date])

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground py-4">
        <Loader2 className="h-4 w-4 animate-spin" />
        Chargement des créneaux...
      </div>
    )
  }

  if (slots.length === 0) {
    return (
      <div className="py-4">
        <Label>Créneau horaire</Label>
        <p className="text-sm text-muted-foreground mt-2">
          Aucun créneau disponible pour cette date. Essayez une autre date.
        </p>
      </div>
    )
  }

  return (
    <div>
      <Label>Créneau horaire</Label>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2">
        {slots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => onChange(slot)}
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium border transition-colors",
              value === slot
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border hover:border-primary/50 hover:bg-muted"
            )}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  )
}
