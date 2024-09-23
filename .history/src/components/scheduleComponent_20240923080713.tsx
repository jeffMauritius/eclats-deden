import { ScheduleData } from "./data"

type Schedule = {
  id: number
  day: string
  start: string
  end: string
}

const ScheduleComponent = () => {
  return (
    <div>
      <div className="rounded p-5  font-extrabold text-amber-500 md:p-10">
        {ScheduleData.map((schedule: Schedule) => (
          <div
            key={schedule.id}
            className="flex justify-between  p-3 md:text-2xl"
          >
            <div>{schedule.day}</div>
            <div className="text-sm md:text-lg">
              {schedule.start} {schedule.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleComponent
