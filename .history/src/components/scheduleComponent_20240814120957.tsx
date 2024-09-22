import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react"
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
          <div
            className="flex justify-between p-3  font-display text-2xl"
            id={schedule.id}
          >
            <div>{schedule.day}</div>
            <div className="font-body text-lg">
              {schedule.start}h - {schedule.end}h
            </div>
          </div>
        ))}

        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Mardi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Mercredi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Jeudi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Vendredi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Samedi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
        <div className="flex justify-between  p-3  font-display text-2xl ">
          <div>Dimanche</div>
          <div className="font-body text-lg">Fermé</div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleComponent