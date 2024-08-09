import CardComponent from "@/components/homePage/CardComponent"
import { Footer } from "@/components/layout/Footer"

const HomePage = () => {
  return (
    <div className="grid h-screen gap-5  md:grid-cols-3">
      <div className="col-span-1  md:col-span-2 md:rounded-2xl">
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
      <div className="grid grid-cols-2 gap-4 rounded-lg  md:grid-cols-1">
        <CardComponent
          buttonTitle={"MENU SNACK"}
          imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}
          pageUrl={"snack"}
        />
        <CardComponent
          buttonTitle={"MENU GALETTE"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"galettes"}
        />
        <CardComponent
          buttonTitle={"MENU CRÉPES"}
          imageUrl={`bg-[url('/crepes.webp')] bg-cover`}
          pageUrl={"crepes"}
        />
      </div>
      <div className="grid grid-cols-2 pt-10">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
