import Localization from "@/components/Localization"
import { schedule } from "@/components/schedule"

export default function Information() {
  return (
    <div className="grid gap-6  md:grid-cols-2">
      <div className="rounded border p-5">
        <Localization />
      </div>
      <div>
        <div className="rounded border p-10">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl "
            >
              <div>{day.day}</div>
              <div className="font-body text-lg">{day.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
