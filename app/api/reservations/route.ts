import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { reservationSchema } from "@/lib/reservation-validation"
import { sendWhatsAppNotification } from "@/lib/whatsapp-notify"
import { ZodError } from "zod"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = reservationSchema.parse(body)

    const reservation = await prisma.reservation.create({
      data: {
        customerName: validated.customerName,
        customerEmail: validated.customerEmail,
        customerPhone: validated.customerPhone,
        date: new Date(validated.date),
        timeSlot: validated.timeSlot,
        guestCount: validated.guestCount,
        specialRequests: validated.specialRequests ?? null,
      },
    })

    // Notification WhatsApp en arrière-plan (n'empêche pas la réservation si ça échoue)
    sendWhatsAppNotification({
      customerName: validated.customerName,
      customerPhone: validated.customerPhone,
      date: validated.date,
      timeSlot: validated.timeSlot,
      guestCount: validated.guestCount,
      specialRequests: validated.specialRequests,
    }).catch(() => {})

    return NextResponse.json(reservation, { status: 201 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Données invalides", details: error.errors }, { status: 400 })
    }
    console.error("Reservation error:", error)
    return NextResponse.json(
      { error: "Le service de réservation est temporairement indisponible. Veuillez nous appeler au +230 5858 8829." },
      { status: 503 }
    )
  }
}

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-admin-password")
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const date = searchParams.get("date")

    const where: Record<string, unknown> = {}
    if (status) where.status = status
    if (date) where.date = new Date(date)

    const reservations = await prisma.reservation.findMany({
      where,
      orderBy: [{ date: "asc" }, { timeSlot: "asc" }],
    })

    return NextResponse.json(reservations)
  } catch (error) {
    console.error("Error fetching reservations:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
