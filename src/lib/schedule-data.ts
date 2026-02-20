export type DaySchedule = {
  day: string
  hours: string
}

export const scheduleData: DaySchedule[] = [
  { day: "Lundi", hours: "Fermé" },
  { day: "Mardi", hours: "08h — 17h" },
  { day: "Mercredi", hours: "08h — 17h" },
  { day: "Jeudi", hours: "08h — 17h" },
  { day: "Vendredi", hours: "08h — 17h" },
  { day: "Samedi", hours: "10h — 17h" },
  { day: "Dimanche", hours: "10h — 17h" },
]

export const getTodaySchedule = (): DaySchedule => {
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  const today = days[new Date().getDay()]
  return scheduleData.find((s) => s.day === today) ?? scheduleData[0]
}
