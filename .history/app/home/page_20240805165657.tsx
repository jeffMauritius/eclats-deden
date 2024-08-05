import CardComponent from "@/components/homePage/CardComponent"
import { Footer } from "@/components/layout/Footer"

const HomePage = () => {
  return (
    <div className="grid gap-5 p-5 md:grid-cols-3">
      <div className="col-span-1 rounded-2xl border md:col-span-2">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl pb-10">
          <source src="/snack.mp4" type="video/mp4" />
        </video>
        <Footer />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg">
        <CardComponent
          buttonTitle={"MENU SNACK"}
          imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}
          pageUrl={"snack"}
        />
        <CardComponent
          buttonTitle={"MENU CREPES / GAUFRES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"crepes"}
        />
        <CardComponent
          buttonTitle={"NOS PARTENAIRES"}
          imageUrl={`bg-[url('/partenaires.jpg')] bg-cover`}
          pageUrl={"snack"}
        />
      </div>
    </div>
  )
}

export default HomePage
