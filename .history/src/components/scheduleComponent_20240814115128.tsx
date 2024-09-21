const ScheduleComponent = () => {
  return (
    <div>
      <div className="rounded p-5  font-extrabold text-amber-500 md:p-10">
        <div className="flex justify-between p-3  font-display text-2xl ">
          <div>Lundi</div>
          <div className="font-body text-lg">9h-18h</div>
        </div>
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
