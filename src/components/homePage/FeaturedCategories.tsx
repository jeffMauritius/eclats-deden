import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Salad, Coffee, IceCream } from "lucide-react"

const categories = [
  {
    title: "Galettes de Sarrasin",
    description: "Sans gluten, à partir de 450 Rs",
    icon: Utensils,
    href: "/menu#galettes",
  },
  {
    title: "Salades & Plats",
    description: "Fraîcheur tropicale, à partir de 400 Rs",
    icon: Salad,
    href: "/menu#salades",
  },
  {
    title: "Burgers",
    description: "Bœuf Wagyu & Poulet, 600 Rs",
    icon: Utensils,
    href: "/menu#burgers",
  },
  {
    title: "Crêpes & Gaufres",
    description: "Sucrées, à partir de 150 Rs",
    icon: IceCream,
    href: "/menu#crepes",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Notre Carte
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href}>
              <Card className="h-full hover:shadow-lg transition-shadow border-border/30 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <cat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-playfair font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
