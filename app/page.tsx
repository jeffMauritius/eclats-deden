import { HeroSection } from "@/components/homePage/HeroSection"
import { FeaturedCategories } from "@/components/homePage/FeaturedCategories"
import { CTASection } from "@/components/homePage/CTASection"
import { InfoStrip } from "@/components/homePage/InfoStrip"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <CTASection />
      <InfoStrip />
    </>
  )
}
