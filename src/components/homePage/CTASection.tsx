import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <CalendarDays className="h-12 w-12 mx-auto mb-6 opacity-80" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Réservez votre table
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
          Profitez d&apos;un moment unique face au lagon. Réservez en ligne en quelques clics.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
          <Link href="/reservation">Réserver maintenant</Link>
        </Button>
      </div>
    </section>
  )
}
