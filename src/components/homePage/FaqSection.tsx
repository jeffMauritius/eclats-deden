import { homeFaq } from "@/lib/seo"

/** FAQ rendue en HTML natif (<details>) pour que les réponses restent dans le HTML servi. */
export function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center font-display text-4xl font-extrabold text-lagoon-800 md:text-5xl">
          Questions fréquentes
        </h2>
        <div className="mt-10 space-y-3">
          {homeFaq.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-lagoon-900/5 open:shadow-pop"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-lagoon-800">
                {f.question}
                <span className="text-2xl text-fuchsia-500 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-lagoon-900/75">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
