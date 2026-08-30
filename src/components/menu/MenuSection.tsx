import Image from "next/image"
import { type MenuCategory } from "@/lib/menu-data"
import { MenuItem } from "./MenuItem"

const headerTint = {
  lagoon: "from-lagoon-600/90",
  fuchsia: "from-fuchsia-600/90",
  mango: "from-mango-600/90",
  coral: "from-coral-600/90",
  palm: "from-palm-700/90",
} as const

export function MenuSection({ category }: { category: MenuCategory }) {
  const groups = category.groups ?? [{ label: "", items: category.items ?? [] }]

  return (
    <section id={category.id} className="scroll-mt-40">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-pop ring-1 ring-lagoon-900/5">
        <div className="relative h-44 md:h-56">
          {category.image && (
            <Image
              src={category.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-t via-lagoon-900/30 to-transparent ${headerTint[category.color]}`}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/95 text-2xl shadow-sm backdrop-blur">
              {category.emoji}
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-2xl font-extrabold text-white drop-shadow md:text-3xl">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="mt-0.5 text-sm text-white/85 drop-shadow">{category.subtitle}</p>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {groups.map((group, gi) => (
            <div key={group.label || gi} className={gi > 0 ? "mt-7" : ""}>
              {group.label && (
                <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-500">
                  {group.label}
                </h3>
              )}
              <ul>
                {group.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}

          {category.footnote && (
            <p className="mt-6 rounded-2xl bg-mango-100 px-4 py-3 text-sm font-medium text-mango-800">
              {category.footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
