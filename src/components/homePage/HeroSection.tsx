import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-lagoon-800">
      <Image
        src="/plage2.jpg"
        alt="Plage tropicale Île Maurice"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <Image
          src="/logo-extracted.png"
          alt="Éclats d'Éden"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-8 shadow-xl border-4 border-white/30"
        />
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">
          Éclats d&apos;Éden
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
          Crêperie &amp; Restaurant
        </p>
        <p className="text-lg text-white/70 mb-8">
          Sunset Boulevard, Grand Baie — Île Maurice
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
            <Link href="/reservation">Réserver une table</Link>
          </Button>
          <Button asChild size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white/30 backdrop-blur-sm text-lg px-8">
            <Link href="/menu">Voir le menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
