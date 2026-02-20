import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Réservation confirmée",
}

export default function ConfirmationPage() {
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto text-center">
        <Card className="border-border/30">
          <CardContent className="p-10">
            <CheckCircle className="h-16 w-16 text-palm-500 mx-auto mb-6" />
            <h1 className="font-playfair text-3xl font-bold text-primary mb-4">
              Réservation envoyée !
            </h1>
            <p className="text-muted-foreground mb-2">
              Votre demande de réservation a bien été enregistrée.
            </p>
            <p className="text-muted-foreground mb-8">
              Vous recevrez une confirmation par email prochainement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/">Retour à l&apos;accueil</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/menu">Voir le menu</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
