import ScheduleData from "../data/scheduleData"

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
          <div className="flex justify-between p-3  font-display text-2xl">
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
