import { HeroSection } from "@/components/homePage/HeroSection"
import { Marquee } from "@/components/homePage/Marquee"
import { FeaturedCategories } from "@/components/homePage/FeaturedCategories"
import { StorySection } from "@/components/homePage/StorySection"
import { ArdoiseSection } from "@/components/homePage/ArdoiseSection"
import { GalleryPreview } from "@/components/homePage/GalleryPreview"
import { CTASection } from "@/components/homePage/CTASection"
import { InfoStrip } from "@/components/homePage/InfoStrip"
import { WaveDivider } from "@/components/decor/WaveDivider"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <FeaturedCategories />
      <WaveDivider fill="fill-lagoon-100/60" />
      <StorySection />
      <WaveDivider flip fill="fill-lagoon-100/60" />
      <GalleryPreview />
      <ArdoiseSection />
      <CTASection />
      <WaveDivider fill="fill-lagoon-100/60" />
      <InfoStrip />
    </>
  )
}
