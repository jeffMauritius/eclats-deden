export type DaySchedule = {
  day: string
  short: string
  /** Libellé affiché. */
  hours: string
  /** Heures au format 24h pour le calcul « ouvert maintenant ». */
  open?: string
  close?: string
}

export const scheduleData: DaySchedule[] = [
  { day: "Lundi", short: "Lun", hours: "Fermé" },
  { day: "Mardi", short: "Mar", hours: "08h — 17h", open: "08:00", close: "17:00" },
  { day: "Mercredi", short: "Mer", hours: "08h — 17h", open: "08:00", close: "17:00" },
  { day: "Jeudi", short: "Jeu", hours: "08h — 17h", open: "08:00", close: "17:00" },
  { day: "Vendredi", short: "Ven", hours: "08h — 17h", open: "08:00", close: "17:00" },
  { day: "Samedi", short: "Sam", hours: "10h — 17h", open: "10:00", close: "17:00" },
  { day: "Dimanche", short: "Dim", hours: "10h — 17h", open: "10:00", close: "17:00" },
]

/** Groupement compact pour les blocs « horaires » du footer et de l'accueil. */
export const scheduleSummary = [
  { label: "Mardi — Vendredi", hours: "08h — 17h" },
  { label: "Samedi — Dimanche", hours: "10h — 17h" },
  { label: "Lundi", hours: "Fermé" },
]

const DAY_ORDER = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

/**
 * Heure locale à Maurice (UTC+4, pas de changement d'heure) — le serveur et les
 * visiteurs peuvent être ailleurs, donc on ne se fie jamais au fuseau du client.
 */
function mauritiusNow(date = new Date()) {
  const utc = date.getTime() + date.getTimezoneOffset() * 60_000
  return new Date(utc + 4 * 60 * 60_000)
}

export function getTodaySchedule(date = new Date()): DaySchedule {
  const local = mauritiusNow(date)
  const name = DAY_ORDER[local.getDay()]
  return scheduleData.find((s) => s.day === name) ?? scheduleData[0]
}

export type OpenState = {
  isOpen: boolean
  today: DaySchedule
  /** Message court prêt à afficher, ex. « Ouvert jusqu'à 17h ». */
  label: string
}

export function getOpenState(date = new Date()): OpenState {
  const local = mauritiusNow(date)
  const today = getTodaySchedule(date)

  if (!today.open || !today.close) {
    return { isOpen: false, today, label: "Fermé aujourd'hui" }
  }

  const minutes = local.getHours() * 60 + local.getMinutes()
  const [oh, om] = today.open.split(":").map(Number)
  const [ch, cm] = today.close.split(":").map(Number)
  const openM = oh * 60 + om
  const closeM = ch * 60 + cm

  if (minutes < openM) {
    return { isOpen: false, today, label: `Ouvre à ${today.open.replace(":", "h")}` }
  }
  if (minutes >= closeM) {
    return { isOpen: false, today, label: "Fermé pour aujourd'hui" }
  }
  return { isOpen: true, today, label: `Ouvert jusqu'à ${today.close.replace(":", "h")}` }
}
