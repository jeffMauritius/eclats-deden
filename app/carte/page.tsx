import React from 'react';

export default function CartePage() {
  return (
    <div className="min-h-screen bg-black-500 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header avec logo */}
        <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 p-6">
          {/* Logo circulaire */}
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section SALÉ */}
            <div>
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded transform -rotate-2 mb-4">
                <span className="font-bold text-lg">SALÉ</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">GALETTES DE SARRASIN</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Complète</h3>
                      <p className="text-sm text-gray-600">Jambon, Fromage, Oeuf</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 350</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Végé</h3>
                      <p className="text-sm text-gray-600">Tomate, Fromage, Pesto</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 300</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Locale</h3>
                      <p className="text-sm text-gray-600">Poulet mariné, Fromage, Oignons crispy</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 350</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Marlin</h3>
                      <p className="text-sm text-gray-600">Marlin, Oeuf, Fromage, Tomate, Citron</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 400</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">SNACK</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Marlin</h3>
                      <p className="text-sm text-gray-600">servi avec salade de tomates</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Jambon</h3>
                      <p className="text-sm text-gray-600">servi avec salade de tomates</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 350</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Croque-Monsieur Végé</h3>
                      <p className="text-sm text-gray-600">tomates séchées, pesto, fromage</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 350</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Salade Ananas Marlin</h3>
                      <p className="text-sm text-gray-600">servie dans un ananas !</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 500</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Menu salade ananas + croque</h3>
                      <p className="text-sm text-gray-600">Marlin/ Jambon ou Végé</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 750</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section SUCRÉ */}
            <div>
              <div className="inline-block bg-pink-400 text-black px-4 py-2 rounded transform rotate-2 mb-4">
                <span className="font-bold text-lg">SUCRÉ</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">CRÊPES (AU FROMENT) / GAUFRES</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Nutella</h3>
                      <p className="text-sm text-gray-600">Nutella</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Gourmande</h3>
                      <p className="text-sm text-gray-600">Nutella, Banane</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 250</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">L'Eclat</h3>
                      <p className="text-sm text-gray-600">Sucre</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 100</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Soleil</h3>
                      <p className="text-sm text-gray-600">Sucre, Citron</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 150</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">La Fruitée</h3>
                      <p className="text-sm text-gray-600">Confiture / confiture maison + Rs 50</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">L'Eden</h3>
                      <p className="text-sm text-gray-600">Caramel Beurre Salé Maison</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 250</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  Supplément chantilly ........................... Rs 50
                </div>

                <div className="mt-4 border-2 border-gray-400 rounded-full px-4 py-2 text-center">
                  <span className="italic text-sm">L'impro</span><br/>
                  <span className="text-xs">Crêpe sucrée / salée selon l'inspiration du moment</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">AUTRES GOURMANDISES</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Salade de fruits frais</h3>
                      <p className="text-sm text-gray-600">servie dans un ananas !</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 300</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Glace</h3>
                      <p className="text-sm text-gray-600">différents parfums</p>
                    </div>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section BOISSONS */}
        <div className="bg-gray-300 p-6">
          <div className="inline-block bg-green-400 text-black px-4 py-2 rounded transform -rotate-1 mb-4">
            <span className="font-bold text-lg">BOISSONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Soft</h2>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Eau (50 cl) ................................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 50</span>
                </div>
                <div className="flex justify-between ">
                  <span>Eau (plate, gazeuse, 1L) ................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Coca-cola, Fanta, Orangina, Sprite, Fuze Tea (50 cl) ........</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Jus de Fruits Frais 1 fruit ...........................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">mix ................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">+ grenade.........................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 300</span>
                </div>
                <div className="flex justify-between">
                  <span>Jus de canne Nature...........................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span className="ml-8">Citron ou gingembre............</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span>Matcha Latte (framboise, banane, ananas, mangue) ........</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 250</span>
                </div>
                <div className="flex justify-between">
                  <span>Citronnade maison ................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Thé glacé (thé noir ou vert, sirop de canne, rondelle de citron) ...</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span>Café glacé ......................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 200</span>
                </div>
                <div className="flex justify-between">
                  <span>Supplément Nutella ou caramel beurre salé ............</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 50</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Boissons Chaudes</h2>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Expresso ........................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 80</span>
                </div>
                <div className="flex justify-between">
                  <span>Double Expresso ................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Allongé ........................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 100</span>
                </div>
                <div className="flex justify-between">
                  <span>Allongé + lait ..................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 120</span>
                </div>
                <div className="flex justify-between">
                  <span>Cappuccino .......................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Thé ............................................</span>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold">Rs 80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

