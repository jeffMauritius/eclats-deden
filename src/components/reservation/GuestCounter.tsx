"use client"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Users } from "lucide-react"

interface GuestCounterProps {
  value: number
  onChange: (count: number) => void
}

export function GuestCounter({ value, onChange }: GuestCounterProps) {
  return (
    <div>
      <Label className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        Nombre de personnes
      </Label>
      <div className="flex items-center gap-4 mt-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.max(1, value - 1))}
          disabled={value <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-2xl font-bold w-12 text-center">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.min(12, value + 1))}
          disabled={value >= 12}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
