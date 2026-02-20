import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo-extracted.png"
        alt="Éclats d'Éden"
        width={50}
        height={33}
        className="object-contain"
        priority
      />
      <span className="font-playfair text-xl font-bold text-primary hidden sm:inline">
        Éclats d&apos;Éden
      </span>
    </Link>
  )
}
