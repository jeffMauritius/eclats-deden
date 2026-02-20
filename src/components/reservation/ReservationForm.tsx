"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { reservationSchema, type ReservationFormData } from "@/lib/reservation-validation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { TimeSlotPicker } from "./TimeSlotPicker"
import { GuestCounter } from "./GuestCounter"
import { CalendarDays, Loader2 } from "lucide-react"

export function ReservationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guestCount: 2,
    },
  })

  const selectedDate = watch("date")
  const selectedTimeSlot = watch("timeSlot")
  const guestCount = watch("guestCount")

  const today = new Date().toISOString().split("T")[0]
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 2)
  const maxDateStr = maxDate.toISOString().split("T")[0]

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error ?? "Erreur lors de la réservation")
      }
      const reservation = await res.json()
      router.push(`/reservation/confirmation?id=${reservation.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card className="border-border/30">
        <CardContent className="p-6 space-y-6">
          <h2 className="font-playfair text-xl font-bold text-primary flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Date & Heure
          </h2>

          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              min={today}
              max={maxDateStr}
              {...register("date")}
              className="mt-1"
            />
            {errors.date && (
              <p className="text-sm text-destructive mt-1">{errors.date.message}</p>
            )}
          </div>

          {selectedDate && (
            <TimeSlotPicker
              date={selectedDate}
              value={selectedTimeSlot}
              onChange={(slot) => setValue("timeSlot", slot)}
            />
          )}
          {errors.timeSlot && (
            <p className="text-sm text-destructive">{errors.timeSlot.message}</p>
          )}

          <GuestCounter
            value={guestCount ?? 2}
            onChange={(count) => setValue("guestCount", count)}
          />
          {errors.guestCount && (
            <p className="text-sm text-destructive">{errors.guestCount.message}</p>
          )}
        </CardContent>
      </Card>

      <Card className="border-border/30">
        <CardContent className="p-6 space-y-4">
          <h2 className="font-playfair text-xl font-bold text-primary">
            Vos coordonnées
          </h2>

          <div>
            <Label htmlFor="customerName">Nom complet</Label>
            <Input id="customerName" {...register("customerName")} className="mt-1" />
            {errors.customerName && (
              <p className="text-sm text-destructive mt-1">{errors.customerName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="customerEmail">Email</Label>
            <Input id="customerEmail" type="email" {...register("customerEmail")} className="mt-1" />
            {errors.customerEmail && (
              <p className="text-sm text-destructive mt-1">{errors.customerEmail.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="customerPhone">Téléphone</Label>
            <Input id="customerPhone" type="tel" {...register("customerPhone")} className="mt-1" />
            {errors.customerPhone && (
              <p className="text-sm text-destructive mt-1">{errors.customerPhone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="specialRequests">Demandes spéciales (optionnel)</Label>
            <Textarea id="specialRequests" {...register("specialRequests")} className="mt-1" rows={3} />
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Réservation en cours...
          </>
        ) : (
          "Confirmer la réservation"
        )}
      </Button>
    </form>
  )
}
