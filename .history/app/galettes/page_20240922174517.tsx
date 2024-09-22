import NavigationMenuMobileComponent from "@/components/layout/NavigationMenuMobile"
import MenuComponent from "@/components/menu/MenuComponent"

export default function Crepes() {
  return (
    <div>
      <NavigationMenuMobileComponent />

      <div className="grid gap-6 p-5 md:grid-cols-2">
        <div className="rounded-2xl">
          <video autoPlay muted loop id="myVideo" className="rounded-2xl">
            <source src="/medias/galettesPage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="col-span-1 rounded-2xl border">
          <MenuComponent
            menuTitle={"NOS GALETTES SALÉES (sans gluten : farine de sarrasin)"}
            type="galettes"
          />
        </div>
      </div>
    </div>
  )
}
