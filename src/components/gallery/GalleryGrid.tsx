"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { photoCategories, getPhotos, type PhotoCategory } from "@/lib/photos"
import { Lightbox } from "./Lightbox"
import { cn } from "@/lib/utils"

export function GalleryGrid() {
  const [filter, setFilter] = useState<PhotoCategory | "tout">("tout")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const visible = useMemo(() => getPhotos(filter), [filter])

  return (
    <>
      <div className="no-scrollbar -mx-5 mb-10 overflow-x-auto px-5 md:mx-0 md:px-0">
        <div className="flex min-w-max justify-start gap-2 md:justify-center">
          {photoCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setFilter(c.id)
                setOpenIndex(null)
              }}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-bold transition-all",
                filter === c.id
                  ? "bg-fuchsia-500 text-white shadow-pop"
                  : "bg-white text-lagoon-800/80 ring-1 ring-lagoon-900/10 hover:bg-lagoon-50"
              )}
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mosaïque en colonnes : les portraits et paysages s'imbriquent sans trou. */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {visible.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] shadow-pop ring-1 ring-lagoon-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-pop-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={photo.ratio === "landscape" ? 600 : photo.ratio === "square" ? 800 : 1067}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lagoon-900/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {photo.alt}
            </span>
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">Aucune photo dans cette catégorie.</p>
      )}

      <Lightbox
        photos={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  )
}
