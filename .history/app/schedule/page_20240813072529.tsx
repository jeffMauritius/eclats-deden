const SchedulePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="absolute m-auto h-screen w-2/5 rounded-2xl border bg-[url('/maurice.jpeg')] bg-cover ">
          <div className="relative imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}">
            <div className="m-10 h-full rounded-2xl  bg-white opacity-50 ">
              <h1 className="p-5 text-center font-display text-4xl font-bold text-amber-500">
                Horaires d'ouverture
              </h1>
              <div className="grid gap-6  md:grid-cols-2">
                <div className="rounded border p-5">
                  <div className="text-center">
                    <h1 className="font-display text-2xl font-bold">
                      Localisation
                    </h1>
                    <p className="font-body text-lg">
                      1 rue de la paix, 75001 Paris
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded border p-10">
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Lundi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Mardi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Mercredi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Jeudi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Vendredi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
                      <div>Samedi</div>
                      <div className="font-body text-lg">9h-18h</div>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed p-3  font-display text-2xl ">
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
    </div>
  )
}

export default SchedulePage
