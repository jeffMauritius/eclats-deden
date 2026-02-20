import { type MenuItem as MenuItemType } from "@/lib/menu-data"

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-border/30 last:border-0">
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
        )}
        {item.note && (
          <p className="text-sm text-accent italic mt-0.5">{item.note}</p>
        )}
      </div>
      {item.price && (
        <span className="font-semibold text-primary whitespace-nowrap">
          {item.price} Rs
        </span>
      )}
    </div>
  )
}
