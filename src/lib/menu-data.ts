export type MenuItem = {
  name: string
  description?: string
  price?: number
  /** Affiché à la place du prix, ex. « Voir ardoise », « 400 Rs / 100 g ». */
  note?: string
  /** Petit libellé mis en avant sur l'article (« Signature », « Wagyu »…). */
  tag?: string
}

export type MenuGroup = {
  label: string
  items: MenuItem[]
}

export type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  /** Emoji affiché dans la navigation et l'en-tête de section. */
  emoji: string
  /** Couleur de marque appliquée à la section. */
  color: "lagoon" | "fuchsia" | "mango" | "coral" | "palm"
  image?: string
  items?: MenuItem[]
  groups?: MenuGroup[]
  /** Mention affichée en bas de section (supplément, condition de service…). */
  footnote?: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: "planches",
    title: "Planches Apéro",
    subtitle: "À partager, à l'ombre des parasols",
    emoji: "🧀",
    color: "mango",
    image: "/photos/terrasse-bar-jus.webp",
    items: [
      {
        name: "Planche mauricienne",
        description: "Samoussas poulet, fromage ou végétarien — 12 pièces",
        price: 390,
      },
    ],
  },
  {
    id: "galettes",
    title: "Galettes de Sarrasin",
    subtitle: "Notre signature bretonne — sans gluten",
    emoji: "🥞",
    color: "lagoon",
    image: "/photos/galette-complete.webp",
    items: [
      { name: "Complète", description: "Jambon, fromage, œuf", price: 450, tag: "La classique" },
      { name: "Locale", description: "Poulet mariné, fromage, oignons crispy", price: 450 },
      { name: "Végé", description: "Tomates, fromage, pesto", price: 450 },
      {
        name: "Marlin",
        description: "Marlin, œuf, fromage, tomates, citron",
        price: 500,
        tag: "Signature",
      },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    subtitle: "Généreuses et fraîches, ajustées selon la saison",
    emoji: "🥗",
    color: "palm",
    image: "/photos/salade-cesar.webp",
    items: [
      {
        name: "Salade d'ananas au Marlin fumé",
        description:
          "Servie dans un ananas — marlin fumé, tomates, oignons rouges, piment léger (avec frites + 150 Rs)",
        price: 500,
        tag: "L'incontournable",
      },
      {
        name: "Salade César",
        description: "Poulet croustillant, œuf, tomates, croûtons, parmesan, sauce signature",
        price: 590,
      },
      {
        name: "Salade Éclats de Mer",
        description:
          "Crevettes au beurre d'ail, concombres, carottes, fromage frais, tomates, oignons rouges, sauce signature",
        price: 590,
      },
      {
        name: "Salade Soleil Végé",
        description:
          "Œuf, maïs, carottes, concombres, fromage frais, tomates, oignons rouges, sauce signature",
        price: 590,
      },
    ],
    footnote: "Nos salades sont ajustées en fonction de la saison.",
  },
  {
    id: "plats",
    title: "Plats",
    subtitle: "Poisson frais et suggestions du jour",
    emoji: "🐟",
    color: "lagoon",
    image: "/photos/gratin-cocotte.webp",
    items: [
      { name: "Dorade au beurre d'ail", description: "Riz et salade", price: 690 },
      { name: "Tartare de dorade", description: "Frites et salade", price: 720 },
      { name: "Plat du jour", note: "Voir ardoise" },
    ],
  },
  {
    id: "paninis",
    title: "Paninis",
    subtitle: "Tous servis avec des frites",
    emoji: "🥪",
    color: "coral",
    image: "/photos/panini-frites.webp",
    items: [
      {
        name: "Panini Marlin",
        description: "Marlin, fromage, tomates, sauce signature",
        price: 500,
      },
      {
        name: "Panini Poulet",
        description: "Poulet, fromage, tomates, sauce signature",
        price: 400,
      },
      { name: "Panini Végé", description: "Tomates, pesto, fromage", price: 400 },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Sauce signature maison",
    emoji: "🍔",
    color: "fuchsia",
    image: "/menu/burgers.jpg",
    items: [
      {
        name: "Burger de bœuf",
        description: "Steak de bœuf Wagyu, fromage, tomates, oignons caramélisés, sauce signature",
        price: 600,
        tag: "Wagyu",
      },
      {
        name: "Burger de poulet",
        description: "Poulet, fromage, tomates, oignons caramélisés, sauce signature",
        price: 600,
      },
      {
        name: "Burger végétarien",
        description: "Steak végé, fromage, tomates, oignons caramélisés, sauce signature",
        price: 550,
      },
      { name: "Frites", description: "En accompagnement", price: 200 },
    ],
  },
  {
    id: "sur-commande",
    title: "Uniquement sur commande",
    subtitle: "À réserver à l'avance, selon arrivage",
    emoji: "🦞",
    color: "coral",
    image: "/photos/langouste-assiette.webp",
    items: [
      { name: "Langouste", description: "Grillée, selon arrivage", note: "400 Rs / 100 g" },
      { name: "Pièce de bœuf", note: "Sur commande" },
    ],
    footnote: "Appelez-nous pour commander : nous préparons ces plats à la demande.",
  },
  {
    id: "crepes",
    title: "Crêpes au Froment & Gaufres",
    subtitle: "Le sucré, à toute heure",
    emoji: "🍯",
    color: "fuchsia",
    image: "/photos/gaufre-smoothies.webp",
    items: [
      { name: "Nutella", price: 200 },
      { name: "Gourmande", description: "Nutella, banane", price: 250 },
      { name: "L'Éclat", description: "Sucre", price: 150 },
      { name: "Crêpe Soleil", description: "Sucre, citron", price: 200 },
      { name: "Fruitée", description: "Confiture maison", price: 250 },
      { name: "L'Éden", description: "Caramel beurre salé maison", price: 250, tag: "Maison" },
    ],
    footnote: "Chantilly ou boule de glace : + 50 Rs.",
  },
  {
    id: "desserts",
    title: "Desserts",
    emoji: "🍨",
    color: "mango",
    image: "/photos/deco-suspension.webp",
    items: [
      { name: "Salade de fruits frais", price: 290 },
      { name: "Glaces Dione", price: 200 },
      { name: "Tarte au citron meringuée", price: 300 },
      { name: "Inspiration du jour", note: "Voir ardoise" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Jus pressés minute au bar à jus",
    emoji: "🍹",
    color: "lagoon",
    image: "/photos/jus-carambole.webp",
    groups: [
      {
        label: "Sans alcool",
        items: [
          { name: "Eau plate 50 cl", price: 50 },
          { name: "Eau plate 1 L", price: 100 },
          { name: "Eau gazeuse 1 L", price: 150 },
          { name: "Coca-Cola, Coca-Cola Zéro, Fanta, Sprite, FuzeTea", price: 120 },
        ],
      },
      {
        label: "Boissons locales",
        items: [
          { name: "Jus de fruits frais — 1 fruit", price: 200, tag: "Pressé minute" },
          { name: "Jus de fruits frais — 2 fruits", price: 300 },
          { name: "Jus de fruits frais — 3 à 4 fruits", price: 350 },
          { name: "Citronnade maison", price: 150 },
        ],
      },
      {
        label: "Boissons glacées",
        items: [
          {
            name: "Matcha Latte glacé",
            description: "Framboise, banane, ananas, mangue, fruit de la passion",
            price: 250,
          },
          {
            name: "Thé glacé",
            description: "Thé noir ou vert, sirop de canne, rondelle de citron, menthe fraîche",
            price: 200,
          },
          {
            name: "Café glacé",
            description: "Supplément Nutella, caramel ou vanille + 50 Rs",
            price: 200,
          },
        ],
      },
      {
        label: "Boissons chaudes",
        items: [
          { name: "Espresso", price: 110 },
          { name: "Double espresso", price: 200 },
          { name: "Allongé", price: 130 },
          { name: "Allongé + lait", price: 150 },
          { name: "Cappuccino", price: 170 },
          { name: "Thé", price: 100 },
        ],
      },
    ],
  },
]

/** Tous les articles d'une catégorie, groupes aplatis. */
export const categoryItems = (c: MenuCategory): MenuItem[] =>
  c.items ?? c.groups?.flatMap((g) => g.items) ?? []

/** Prix d'appel d'une catégorie, pour les vignettes « à partir de ». */
export const categoryFrom = (c: MenuCategory): number | undefined => {
  const prices = categoryItems(c)
    .map((i) => i.price)
    .filter((p): p is number => typeof p === "number")
  return prices.length ? Math.min(...prices) : undefined
}
