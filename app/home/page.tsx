"use client"

import CardComponent from "@/components/homePage/CardComponent"
import { useClientMediaQuery } from "@/lib/isMobileDevice"
import Image from "next/image"

const QRCard = () => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 border border-gray-800 shadow-lg p-3">
    <h3 className="mb-3 text-lg font-bold text-center text-white">
      Consultez notre carte<br />en scannant le QR code ci-dessous
    </h3>
    <Image
      src="/qr-carte.png"
      alt="QR code carte menu"
      width={128}
      height={128}
      className="mx-auto size-32"
      style={{ display: "block" }}
      priority
    />
  </div>
)

const HomePage = () => {
  const isMobile = useClientMediaQuery("(max-width: 600px)")
  return (
    <div className="grid md:grid-cols-3 gap-5">
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
      <div className="grid min-h-96 grid-cols-2 md:grid-cols-1 gap-4 rounded-lg">
        <CardComponent
          buttonTitle={"NOS GALETTES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"galettes"}
        />
        <QRCard />
        <CardComponent
          buttonTitle={"NOS CRÊPES"}
          imageUrl={`bg-[url('/crepes.webp')] bg-cover`}
          pageUrl={"crepes"}
        />
      </div>
    </div>
  )
}

export default HomePage
