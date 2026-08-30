export type PhotoCategory = "lieu" | "plats" | "sucre" | "boissons" | "ardoise"

export type Photo = {
  src: string
  alt: string
  category: PhotoCategory
  ratio: "portrait" | "landscape" | "square"
}

export const photoCategories: { id: PhotoCategory | "tout"; label: string; emoji: string }[] = [
  { id: "tout", label: "Tout voir", emoji: "✨" },
  { id: "plats", label: "Salé", emoji: "🥗" },
  { id: "sucre", label: "Sucré", emoji: "🍯" },
  { id: "boissons", label: "Boissons", emoji: "🍹" },
  { id: "ardoise", label: "Ardoise du jour", emoji: "🦞" },
  { id: "lieu", label: "Le lieu", emoji: "🌴" },
]

export const photos: Photo[] = [
  // — Le lieu —
  {
    src: "/photos/facade-entree.webp",
    alt: "La façade blanche et turquoise d'Éclats d'Éden sous le soleil de Grand Baie",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/terrasse-parasols.webp",
    alt: "La terrasse ombragée par de grands parasols blancs et turquoise",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/terrasse-ombragee.webp",
    alt: "Espace ombragé avec tables turquoise et chaises métalliques",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/terrasse-lumiere.webp",
    alt: "La terrasse baignée de lumière, parasols ouverts",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/panneau-directions.webp",
    alt: "Le panneau de direction coloré peint à la main, aux couleurs d'Éclats d'Éden",
    category: "lieu",
    ratio: "portrait",
  },
  {
    src: "/photos/entree-panneaux.webp",
    alt: "L'entrée d'Éclats d'Éden et ses pancartes colorées",
    category: "lieu",
    ratio: "portrait",
  },
  {
    src: "/photos/allee-pause-gourmande.webp",
    alt: "L'allée bordée de palmiers qui mène au restaurant, panneau « Pause gourmande »",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/facade-jour.webp",
    alt: "La devanture du restaurant, store turquoise déployé",
    category: "lieu",
    ratio: "portrait",
  },
  {
    src: "/photos/terrasse-bar-jus.webp",
    alt: "Le stand « Bar à jus » sur la terrasse, sous le parasol turquoise",
    category: "lieu",
    ratio: "portrait",
  },
  {
    src: "/photos/vitrine-panoramique.webp",
    alt: "La vitrine gravée « Éclats d'Éden » et la salle derrière",
    category: "lieu",
    ratio: "landscape",
  },
  {
    src: "/photos/deco-suspension.webp",
    alt: "Suspension décorative en osier garnie de fruits tropicaux",
    category: "lieu",
    ratio: "portrait",
  },
  {
    src: "/photos/mascotte.webp",
    alt: "Le petit chien noir et blanc, mascotte des lieux",
    category: "lieu",
    ratio: "portrait",
  },

  // — Salé —
  {
    src: "/photos/galette-complete.webp",
    alt: "Galette de sarrasin complète, œuf au plat au centre, servie sur ardoise",
    category: "plats",
    ratio: "portrait",
  },
  {
    src: "/photos/salade-cesar.webp",
    alt: "Grande salade au poulet, œufs et tomates dans une assiette bleue",
    category: "plats",
    ratio: "square",
  },
  {
    src: "/photos/salade-crevettes.webp",
    alt: "Salade fraîche aux crevettes, carottes râpées, tomates et oignon rouge",
    category: "plats",
    ratio: "portrait",
  },
  {
    src: "/photos/panini-frites.webp",
    alt: "Panini grillé servi avec frites maison et salade verte",
    category: "plats",
    ratio: "square",
  },
  {
    src: "/photos/gratin-cocotte.webp",
    alt: "Gratin servi en cocotte de fonte avec pain grillé et thé",
    category: "plats",
    ratio: "square",
  },

  // — Sucré —
  {
    src: "/photos/gaufre-smoothies.webp",
    alt: "Gaufre gourmande accompagnée de smoothies colorés et d'un café latte",
    category: "sucre",
    ratio: "portrait",
  },

  // — Boissons —
  {
    src: "/photos/jus-carambole.webp",
    alt: "Deux jus de fruits frais décorés d'une étoile de carambole",
    category: "boissons",
    ratio: "portrait",
  },
  {
    src: "/photos/bar-a-jus.webp",
    alt: "Le stand « Bar à jus » en bois peint, au milieu des palmiers",
    category: "boissons",
    ratio: "portrait",
  },

  // — Ardoise du jour —
  {
    src: "/photos/langouste-assiette.webp",
    alt: "Langouste grillée servie avec riz parfumé, crudités et sauce maison",
    category: "ardoise",
    ratio: "portrait",
  },
  {
    src: "/photos/langouste-ardoise.webp",
    alt: "Langouste grillée présentée sur ardoise avec riz et salade",
    category: "ardoise",
    ratio: "portrait",
  },
  {
    src: "/photos/langouste-duo.webp",
    alt: "Langouste grillée et ses accompagnements, servie en terrasse",
    category: "ardoise",
    ratio: "portrait",
  },
  {
    src: "/photos/langouste-croque.webp",
    alt: "Langouste grillée accompagnée d'un croque-monsieur et de riz",
    category: "ardoise",
    ratio: "portrait",
  },
  {
    src: "/photos/langouste-jus-frais.webp",
    alt: "Langouste grillée servie avec des jus de fruits frais",
    category: "ardoise",
    ratio: "portrait",
  },
  {
    src: "/photos/langouste-main.webp",
    alt: "Langouste grillée présentée en salle",
    category: "ardoise",
    ratio: "portrait",
  },
]

export const getPhotos = (category: PhotoCategory | "tout") =>
  category === "tout" ? photos : photos.filter((p) => p.category === category)

/** Sélection utilisée pour l'aperçu de la galerie sur la page d'accueil. */
export const featuredPhotos = [
  "/photos/galette-complete.webp",
  "/photos/terrasse-parasols.webp",
  "/photos/salade-cesar.webp",
  "/photos/jus-carambole.webp",
  "/photos/panneau-directions.webp",
  "/photos/gaufre-smoothies.webp",
  "/photos/panini-frites.webp",
  "/photos/allee-pause-gourmande.webp",
].map((src) => photos.find((p) => p.src === src)!)
