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
        </div>
        <div className="col-span-1 rounded-2xl border">
          <MenuComponent
            menuTitle={"NOS CRÊPES SUCRÉES"}
            type="crepes-sucrees"
          />
        </div>
      </div>
    </div>
  )
}
