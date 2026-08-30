import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { photos } from "@/lib/photos"
import { SiteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "La terrasse, les galettes, les salades et les jus frais d'Éclats d'Éden en photos — Sunset Boulevard, Grand Baie.",
}

export default function GaleriePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white/80 to-transparent py-14 md:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-mango-200/40 blur-3xl" />
        <div className="container relative text-center">
          <span className="inline-block -rotate-2 rounded-full bg-mango-400 px-4 py-1.5 text-sm font-bold text-lagoon-900">
            📸 {photos.length} photos
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold text-lagoon-800 md:text-6xl">
            La <span className="text-gradient-sunset">galerie</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-lagoon-900/70">
            Un tour du propriétaire : la terrasse à l&apos;ombre des palmiers, les assiettes qui
            sortent de cuisine et les jus pressés minute.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <GalleryGrid />

        <div className="mt-16 rounded-[2rem] bg-lagoon-800 p-8 text-center text-white md:p-12">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Envie d&apos;y être ?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/75">
            Réservez votre table sur la terrasse, ou passez simplement nous voir.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={SiteConfig.phoneUrl}
              className="rounded-full bg-fuchsia-500 px-7 py-4 font-bold text-white shadow-pop transition-all hover:-translate-y-1 hover:bg-fuchsia-600"
            >
              📞 Réserver par téléphone
            </a>
            <a
              href={SiteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 px-7 py-4 font-bold text-white ring-1 ring-white/20 transition-all hover:-translate-y-1 hover:bg-white/20"
            >
              Nous suivre sur Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
