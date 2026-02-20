import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getAvailableTimeSlots, MAX_RESERVATIONS_PER_SLOT } from "@/lib/reservation-validation"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get("date")

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Format de date invalide (YYYY-MM-DD)" }, { status: 400 })
  }

  const allSlots = getAvailableTimeSlots(date)

  try {
    const reservations = await prisma.reservation.groupBy({
      by: ["timeSlot"],
      where: {
        date: new Date(date),
        status: { not: "CANCELLED" },
      },
      _count: { id: true },
    })

    const bookedCounts = new Map(
      reservations.map((r) => [r.timeSlot, r._count.id])
    )

    const availableSlots = allSlots.filter((slot) => {
      const count = bookedCounts.get(slot) ?? 0
      return count < MAX_RESERVATIONS_PER_SLOT
    })

    return NextResponse.json({ date, availableSlots, allSlots })
  } catch (error) {
    console.error("DB error fetching slots, returning all slots:", error)
    return NextResponse.json({ date, availableSlots: allSlots, allSlots })
  }
}
