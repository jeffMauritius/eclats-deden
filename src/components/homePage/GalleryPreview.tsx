import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { featuredPhotos, photos } from "@/lib/photos"

export function GalleryPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <header className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-500">
              En images
            </p>
            <h2 className="font-display text-4xl font-extrabold text-lagoon-800 md:text-5xl">
              Un avant-goût
            </h2>
          </div>
          <Link
            href="/galerie"
            className="group inline-flex items-center gap-2 rounded-full bg-lagoon-500 px-6 py-3.5 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-lagoon-600"
          >
            Voir les {photos.length} photos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {featuredPhotos.map((p, i) => (
            <Link
              key={p.src}
              href="/galerie"
              className={`group relative overflow-hidden rounded-[1.5rem] shadow-pop ring-1 ring-lagoon-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-lagoon-900/0 transition-colors group-hover:bg-lagoon-900/20" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
