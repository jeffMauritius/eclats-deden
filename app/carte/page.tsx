import React from 'react';

export default function CartePage() {
  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl">
        {/* Header avec logo */}
        <div className="relative p-6 bg-gradient-to-br from-gray-200 to-gray-300">
          {/* Logo circulaire */}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Section SALÉ */}
            <div>
              <div className="mb-4 inline-block rounded px-4 py-2 bg-yellow-400 text-black -rotate-2">
                <span className="text-lg font-bold">SALÉ</span>
              </div>

              <div className="mb-6">
                <h2 className="mb-4 text-xl font-bold text-gray-800">GALETTES DE SARRASIN</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Complète</h3>
                      <p className="text-sm text-gray-600">Jambon, Fromage, Oeuf</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Végé</h3>
                      <p className="text-sm text-gray-600">Tomate, Fromage, Pesto</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Locale</h3>
                      <p className="text-sm text-gray-600">Poulet mariné, Fromage, Oignons crispy</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Marlin</h3>
                      <p className="text-sm text-gray-600">Marlin, Oeuf, Fromage, Tomate, Citron</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 400</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-4 text-xl font-bold text-gray-800">SNACK</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Marlin</h3>
                      <p className="text-sm text-gray-600">servi avec salade de tomates</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Jambon</h3>
                      <p className="text-sm text-gray-600">servi avec salade de tomates</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Végé</h3>
                      <p className="text-sm text-gray-600">tomates séchées, pesto, fromage</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Salade Ananas Marlin</h3>
                      <p className="text-sm text-gray-600">servie dans un ananas !</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Menu salade ananas + croque</h3>
                      <p className="text-sm text-gray-600">Marlin/ Jambon ou Végé</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 750</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section SUCRÉ */}
            <div>
              <div className="mb-4 inline-block rounded px-4 py-2 bg-pink-400 text-black rotate-2">
                <span className="text-lg font-bold">SUCRÉ</span>
              </div>

              <div className="mb-6">
                <h2 className="mb-4 text-xl font-bold text-gray-800">CRÊPES (AU FROMENT) / GAUFRES</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Nutella</h3>
                      <p className="text-sm text-gray-600">Nutella</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Gourmande</h3>
                      <p className="text-sm text-gray-600">Nutella, Banane</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">L&apos;Eclat</h3>
                      <p className="text-sm text-gray-600">Sucre</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Soleil</h3>
                      <p className="text-sm text-gray-600">Sucre, Citron</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">La Fruitée</h3>
                      <p className="text-sm text-gray-600">Confiture / confiture maison + Rs 50</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">L&apos;Eden</h3>
                      <p className="text-sm text-gray-600">Caramel Beurre Salé Maison</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 250</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  Supplément chantilly ........................... Rs 50
                </div>
                <div className="mt-4 rounded-full border-2 border-gray-400 px-4 py-2 text-center">
                  <span className="italic text-sm">L&apos;impro</span><br />
                  <span className="text-xs">Crêpe sucrée / salée selon l&apos;inspiration du moment</span>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="mb-4 text-xl font-bold text-gray-800">AUTRES GOURMANDISES</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Salade de fruits frais</h3>
                      <p className="text-sm text-gray-600">servie dans un ananas !</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Glace</h3>
                      <p className="text-sm text-gray-600">différents parfums</p>
                    </div>
                    <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section BOISSONS */}
        <div className="p-6 bg-gray-300">
          <div className="mb-4 inline-block rounded px-4 py-2 bg-green-400 text-black -rotate-1">
            <span className="text-lg font-bold">BOISSONS</span>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-800">Soft</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Eau (50 cl) ................................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 50</span>
                </div>
                <div className="flex justify-between ">
                  <span>Eau (plate, gazeuse, 1L) ................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Coca-cola, Fanta, Orangina, Sprite, Fuze Tea (50 cl) ........</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Jus de Fruits Frais 1 fruit ...........................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">mix ................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">+ grenade.........................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 300</span>
                </div>
                <div className="flex justify-between">
                  <span>Jus de canne Nature...........................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">Citron ou gingembre............</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span>Matcha Latte (framboise, banane, ananas, mangue) ........</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span>Citronnade maison ................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Thé glacé (thé noir ou vert, sirop de canne, rondelle de citron) ...</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span>Café glacé ......................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span>Supplément Nutella ou caramel beurre salé ............</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 50</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-800">Boissons Chaudes</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Expresso ........................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 80</span>
                </div>
                <div className="flex justify-between">
                  <span>Double Expresso ................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Allongé ........................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Allongé + lait ..................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 120</span>
                </div>
                <div className="flex justify-between">
                  <span>Cappuccino .......................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Thé ............................................</span>
                  <span className="rounded bg-teal-600 px-2 py-1 text-sm font-bold text-white">Rs 80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

