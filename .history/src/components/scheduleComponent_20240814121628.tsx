import { ScheduleData } from "./data"

type Schedule = {
  id: number
  day: string
  start: number
  end: number
}

const ScheduleComponent = () => {
  return (
    <div>
      <div className="rounded p-5  font-extrabold text-amber-500 md:p-10">
        {ScheduleData.map((schedule: Schedule) => (
          <div
            id={schedule.id}
            className="flex justify-between p-3  font-display text-2xl"
          >
            <div>{schedule.day}</div>
            <div className="font-body text-lg">
              {schedule.start}h - {schedule.end}h
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleComponent
