import NavigationMenuMobileComponent from "@/components/layout/NavigationMenuMobile"
import MenuComponent from "@/components/menu/MenuComponent"

export default function Crepes() {
  return (
    <div>
      <NavigationMenuMobileComponent />
      <div className="grid gap-6 p-5 md:grid-cols-2">
        <div className="rounded-2xl border">
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="min-w-full rounded-2xl"
          >
            <source src="/medias/crepesPage.mp4" type="video/mp4" />
          </video>
          <div className="absolute left-10 top-72 flex justify-center ">
            <p className="rounded-2xl  bg-black p-5 text-4xl text-white opacity-35">
              NOS CRÉPES SUCRÉES
            </p>
          </div>
        </div>
        <div className="col-span-1 rounded-2xl border">
          <MenuComponent
            menuTitle={"NOS CREPES SUCREES"}
            type="crepes-sucrees"
          />
        </div>
      </div>
    </div>
  )
}
