"use client"

import CardComponent from "@/components/homePage/CardComponent"
import { Footer } from "@/components/layout/Footer"
import { useClientMediaQuery } from "@/lib/isMobileDevice"

const HomePage = () => {
  const isMobile = useClientMediaQuery("(max-width: 600px)")
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="border md:col-span-2 md:rounded-2xl">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="size-full rounded-2xl"
        >
          <source src="/medias/homePage.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="grid min-h-96 grid-cols-2 gap-4 rounded-lg  md:grid-cols-1">
        <CardComponent
          buttonTitle={"NOS SNACK"}
          imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}
          pageUrl={"snack"}
        />
        <CardComponent
          buttonTitle={"NOS GALETTES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"galettes"}
        />
        <CardComponent
          buttonTitle={"NOS CRÉPES"}
          imageUrl={`bg-[url('/crepes.webp')] bg-cover`}
          pageUrl={"crepes"}
        />
        {isMobile && (
          <CardComponent
            buttonTitle={"NOS BOISSONS"}
            imageUrl={`bg-[url('/boissons.jpg')] bg-cover`}
            pageUrl={"boissons"}
          />
        )}
      </div>
      <div className="mt-5 md:col-span-3">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
