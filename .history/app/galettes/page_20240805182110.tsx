import MenuComponent from "@/components/menu/MenuComponent"

export default function Crepes() {
  return (
    <div className="grid grid-cols-3 gap-6 p-5">
      <div className="rounded-2xl">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="h-screen rounded-2xl"
        >
          <source src="/medias/galettesPage.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-10 top-72 flex justify-center ">
          <p className="rounded-2xl  bg-black p-5 text-3xl text-white opacity-35">
            NOS GALETTES SALÉES
          </p>
        </div>
      </div>
      <div className="col-span-2 rounded-2xl border">
        <MenuComponent menuTitle={"NOS GALETTES SALÉES"} type="galettes" />
      </div>
    </div>
  )
}
