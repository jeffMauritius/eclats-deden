const SchedulePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="absolute m-auto h-screen w-2/5 rounded-2xl border bg-[url('/plage.jpeg')] bg-cover ">
          <div className="relative imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}">
            <div className="m-10 h-full rounded-2xl  bg-white opacity-70 ">
              <h1 className="p-5 text-center font-display text-4xl font-bold text-amber-500">
                Horaires d'ouverture
              </h1>

              <div>
                <div className="rounded  p-10 font-extrabold text-cyan-400">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage
