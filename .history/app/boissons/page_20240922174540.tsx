import NavigationMenuMobileComponent from "@/components/layout/NavigationMenuMobile"
import MenuComponent from "@/components/menu/MenuComponent"

export default function Boissons() {
  return (
    <div>
      <NavigationMenuMobileComponent />
      <div className="grid gap-6 p-5 md:grid-cols-2">
        <div className="rounded-2xl border">
          <video autoPlay muted loop id="myVideo" className="rounded-2xl">
            <source src="/boissons.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="rounded-2xl border">
          <MenuComponent menuTitle={"NOS BOISSONS"} type="boissons" />
        </div>
      </div>
    </div>
  )
}
