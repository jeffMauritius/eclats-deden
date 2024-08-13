const SchedulePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="absolute m-auto h-screen w-2/5 rounded-2xl border bg-[url('/maurice.jpeg')] bg-cover ">
          <div className="relative imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}">
            <div className="m-10 h-full rounded-2xl  bg-white opacity-60 ">
              <h1 className="p-5 text-center font-display text-4xl font-bold text-amber-500">
                Horaires d'ouverture
              </h1>
                <div className="grid gap-6  md:grid-cols-2">
                    <div className="rounded border p-5">
                    <div className="font-body text-lg">
                        <p>Adresse: 9 rue de la république, 13001 Marseille</p>
                        <p>Telephone: 04 91 33 33 33</p>
                        <p>Mail:
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage
