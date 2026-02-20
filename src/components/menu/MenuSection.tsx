import Image from "next/image"
import { type MenuCategory } from "@/lib/menu-data"
import { MenuItem } from "./MenuItem"

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-32">
      {category.image && (
        <div className="relative h-48 md:h-56 rounded-t-xl overflow-hidden">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              {category.title}
            </h2>
            {category.subtitle && (
              <p className="text-sm text-white/80 font-medium mt-1">{category.subtitle}</p>
            )}
          </div>
        </div>
      )}
      {!category.image && (
        <div className="mb-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
            {category.title}
          </h2>
          {category.subtitle && (
            <p className="text-sm text-accent font-medium mt-1">{category.subtitle}</p>
          )}
        </div>
      )}
      <div className={`bg-card p-6 shadow-sm border border-border/30 ${category.image ? "rounded-b-xl" : "rounded-xl"}`}>
        {category.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
