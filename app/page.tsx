import { HeroSection } from "@/components/homePage/HeroSection"
import { Marquee } from "@/components/homePage/Marquee"
import { FeaturedCategories } from "@/components/homePage/FeaturedCategories"
import { StorySection } from "@/components/homePage/StorySection"
import { ArdoiseSection } from "@/components/homePage/ArdoiseSection"
import { GalleryPreview } from "@/components/homePage/GalleryPreview"
import { CTASection } from "@/components/homePage/CTASection"
import { InfoStrip } from "@/components/homePage/InfoStrip"
import { WaveDivider } from "@/components/decor/WaveDivider"
import { SpecialtiesSection } from "@/components/homePage/SpecialtiesSection"
import { FaqSection } from "@/components/homePage/FaqSection"
import type { Metadata } from "next"
import { homeFaqJsonLd, JsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata("/")

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeFaqJsonLd} />
      <HeroSection />
      <Marquee />
      <FeaturedCategories />
      <WaveDivider fill="fill-lagoon-100/60" />
      <StorySection />
      <WaveDivider flip fill="fill-lagoon-100/60" />
      <SpecialtiesSection />
      <GalleryPreview />
      <ArdoiseSection />
      <CTASection />
      <FaqSection />
      <WaveDivider fill="fill-lagoon-100/60" />
      <InfoStrip />
    </>
  )
}
