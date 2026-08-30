"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Photo } from "@/lib/photos"

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const isOpen = index !== null

  const go = useCallback(
    (delta: number) => {
      if (index === null) return
      onNavigate((index + delta + photos.length) % photos.length)
    },
    [index, photos.length, onNavigate]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    document.addEventListener("keydown", onKey)
    // Empêche la page de défiler derrière la visionneuse.
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [isOpen, onClose, go])

  if (index === null) return null
  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-lagoon-900/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          go(-1)
        }}
        aria-label="Photo précédente"
        className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          go(1)
        }}
        aria-label="Photo suivante"
        className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <figure
        className="animate-pop-in relative flex max-h-[88vh] w-full max-w-4xl flex-col items-center px-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="rounded-[1.5rem] object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {photo.alt}
          <span className="mt-1 block text-xs text-white/50">
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
