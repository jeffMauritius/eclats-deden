"use client"

import { useEffect, useRef, useState } from "react"
import { type MenuCategory } from "@/lib/menu-data"
import { cn } from "@/lib/utils"

export function MenuCategoryNav({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "")
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    for (const cat of categories) {
      const el = document.getElementById(cat.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [categories])

  // La pastille active reste visible dans la barre qui défile horizontalement.
  useEffect(() => {
    const btn = barRef.current?.querySelector<HTMLElement>(`[data-cat="${activeId}"]`)
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [activeId])

  return (
    <nav className="sticky top-[7.25rem] z-30 border-y border-lagoon-100 bg-white/90 py-3 backdrop-blur-xl">
      <div ref={barRef} className="no-scrollbar container overflow-x-auto">
        <div className="flex min-w-max gap-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              data-cat={cat.id}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all",
                activeId === cat.id
                  ? "bg-fuchsia-500 text-white shadow-pop"
                  : "bg-lagoon-50 text-lagoon-800/75 hover:bg-lagoon-100"
              )}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
