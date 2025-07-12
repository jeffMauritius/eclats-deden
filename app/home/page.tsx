"use client"

import CardComponent from "@/components/homePage/CardComponent"
import { useClientMediaQuery } from "@/lib/isMobileDevice"

const QRCard = () => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 border border-gray-800 shadow-lg p-3">
    <h3 className="text-lg font-bold mb-3 text-center text-white">
      Consultez notre carte<br />en scannant le QR code ci-dessous
    </h3>
    <img
      src="/qr-carte.png"
      alt="QR code carte menu"
      className="w-32 h-32 mx-auto"
      style={{ display: "block" }}
    />
  </div>
)

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
          buttonTitle={"NOS GALETTES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"carte"}
        />
        <QRCard />
        <CardComponent
          buttonTitle={"NOS CRÊPES"}
          imageUrl={`bg-[url('/crepes.webp')] bg-cover`}
          pageUrl={"carte"}
        />
      </div>
    </div>
  )
}

export default HomePage
