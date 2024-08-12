import MenuComponent from "@/components/menu/MenuComponent"

export default function Boissons() {
  return (
    <div className="grid grid-cols-2 gap-6 p-5">
      <div className="rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl">
          <source src="/boissons.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-10 top-72 flex justify-center text-wrap">
          <p className="  rounded-2xl bg-black p-5 text-4xl text-white opacity-35">
            Nos boissons fraiches & chaudes
          </p>
        </div>
      </div>
      <div className="rounded-2xl border">
        <MenuComponent menuTitle={"NOS BOISSONS"} type="boissons" />
      </div>
    </div>
  )
}
