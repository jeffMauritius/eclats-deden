import { Metadata } from "next"
import Image from "next/image"
import { menuCategories } from "@/lib/menu-data"
import { MenuSection } from "@/components/menu/MenuSection"
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav"

export const metadata: Metadata = {
  title: "Menu",
  description: "Découvrez notre carte — galettes, crêpes, burgers, salades et boissons",
}

export default function MenuPage() {
  return (
    <>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/menu/hero.jpg"
          alt="Éclats d'Éden — Notre Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Notre Menu
            </h1>
            <p className="text-white/90 mt-3 text-lg drop-shadow max-w-lg mx-auto px-4">
              Des saveurs locales et bretonnes, préparées avec passion sur le Sunset Boulevard
            </p>
          </div>
        </div>
      </div>
      <MenuCategoryNav categories={menuCategories} />
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  )
}
