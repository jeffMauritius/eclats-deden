const words = [
  "Galettes de sarrasin",
  "🥞",
  "Sans gluten",
  "🌴",
  "Burgers Wagyu",
  "🍔",
  "Salades tropicales",
  "🥗",
  "Jus pressés minute",
  "🍹",
  "Crêpes sucrées",
  "🍯",
  "Gaufres gourmandes",
  "🧇",
  "Sunset Boulevard",
  "🌅",
]

/** Bandeau défilant, écho aux rayures de la carte papier. */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-lagoon-900/10 bg-fuchsia-500 py-3">
      <div className="flex w-max animate-marquee pause-on-hover">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {words.map((w, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-lg font-bold text-white sm:text-xl"
              >
                {w}
                <span className="text-mango-300">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
