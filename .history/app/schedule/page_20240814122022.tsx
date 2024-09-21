import NavigationMenuMobileComponent from "@/components/layout/NavigationMenuMobile"
import ScheduleComponent from "@/components/scheduleComponent"

const SchedulePage = () => {
  return (
    <div>
      <NavigationMenuMobileComponent />
      <div className="flex justify-center">
        <div className="m-auto  rounded-2xl border bg-[url('/plage3.jpg')] bg-cover md:w-3/5 ">
          <div className="m-10 h-full rounded-2xl  bg-white opacity-70 ">
            <h1 className="p-5 text-center font-display text-4xl font-bold text-amber-500">
              {"Horaires d'ouverture"}
            </h1>
            <ScheduleComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage
