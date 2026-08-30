/**
 * WhatsApp notification via CallMeBot API (gratuit)
 *
 * Setup (une seule fois) :
 * 1. Envoyer le message "I allow callmebot to send me messages"
 *    au numéro WhatsApp +34 644 31 89 43
 * 2. CallMeBot répond avec votre apikey personnelle
 * 3. Ajouter dans .env :
 *    WHATSAPP_PHONE=23057441889       (numéro du restaurant, sans +)
 *    WHATSAPP_APIKEY=123456            (apikey reçue de CallMeBot)
 */

interface ReservationNotification {
  customerName: string
  customerPhone: string
  date: string
  timeSlot: string
  guestCount: number
  specialRequests?: string | null
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function buildMessage(reservation: ReservationNotification): string {
  const lines = [
    "🔔 *Nouvelle réservation !*",
    "",
    `👤 *Nom :* ${reservation.customerName}`,
    `📞 *Tél :* ${reservation.customerPhone}`,
    `📅 *Date :* ${formatDate(reservation.date)}`,
    `🕐 *Heure :* ${reservation.timeSlot}`,
    `👥 *Personnes :* ${reservation.guestCount}`,
  ]

  if (reservation.specialRequests) {
    lines.push(`💬 *Note :* ${reservation.specialRequests}`)
  }

  return lines.join("\n")
}

export async function sendWhatsAppNotification(
  reservation: ReservationNotification
): Promise<boolean> {
  const phone = process.env.WHATSAPP_PHONE
  const apikey = process.env.WHATSAPP_APIKEY

  if (!phone || !apikey) {
    console.log("WhatsApp notification skipped: WHATSAPP_PHONE or WHATSAPP_APIKEY not set")
    return false
  }

  const message = buildMessage(reservation)
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apikey}`

  try {
    const response = await fetch(url, { method: "GET" })
    if (response.ok) {
      console.log("WhatsApp notification sent successfully")
      return true
    }
    console.error("WhatsApp notification failed:", response.status, await response.text())
    return false
  } catch (error) {
    console.error("WhatsApp notification error:", error)
    return false
  }
}
