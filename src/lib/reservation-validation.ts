import { z } from "zod"

export const reservationSchema = z.object({
  customerName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  customerEmail: z.string().email("Email invalide"),
  customerPhone: z.string().min(8, "Numéro de téléphone invalide"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format de date invalide"),
  timeSlot: z.string().regex(/^\d{2}:\d{2}$/, "Format d'heure invalide"),
  guestCount: z.number().int().min(1, "Minimum 1 personne").max(12, "Maximum 12 personnes"),
  specialRequests: z.string().optional(),
})

export type ReservationFormData = z.infer<typeof reservationSchema>

export const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
]

export const MAX_RESERVATIONS_PER_SLOT = 4

export function getAvailableTimeSlots(date: string): string[] {
  const dayOfWeek = new Date(date).getDay()
  // Monday = closed
  if (dayOfWeek === 1) return []
  // Saturday & Sunday: 10h-21h
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return TIME_SLOTS.filter((slot) => {
      const hour = parseInt(slot.split(":")[0])
      return hour >= 10 && hour <= 21
    })
  }
  // Tue-Fri: 8h-21h
  return TIME_SLOTS.filter((slot) => {
    const hour = parseInt(slot.split(":")[0])
    return hour >= 8 && hour <= 21
  })
}
