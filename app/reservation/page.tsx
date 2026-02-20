import { Metadata } from "next"
import { ReservationForm } from "@/components/reservation/ReservationForm"

export const metadata: Metadata = {
  title: "Réservation",
  description: "Réservez votre table chez Éclats d'Éden, Sunset Boulevard, Grand Baie",
}

export default function ReservationPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
          Réserver une table
        </h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Choisissez votre date, votre créneau et le nombre de convives
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ReservationForm />
      </div>
    </div>
  )
}
