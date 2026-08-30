import { type MenuItem as MenuItemType } from "@/lib/menu-data"

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="flex items-start justify-between gap-5 border-b border-dashed border-lagoon-900/10 py-3.5 last:border-0">
      <div className="min-w-0 flex-1">
        <h4 className="flex flex-wrap items-center gap-2 font-display text-base font-bold text-lagoon-800">
          {item.name}
          {item.tag && (
            <span className="rounded-full bg-mango-200 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-mango-800">
              {item.tag}
            </span>
          )}
        </h4>
        {item.description && (
          <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{item.description}</p>
        )}
      </div>

      {item.price !== undefined ? (
        <span className="shrink-0 rounded-full bg-lagoon-50 px-3 py-1 font-display text-base font-extrabold text-lagoon-700">
          {item.price} Rs
        </span>
      ) : item.note ? (
        <span className="shrink-0 whitespace-nowrap text-sm font-semibold italic text-fuchsia-500">
          {item.note}
        </span>
      ) : null}
    </li>
  )
}
