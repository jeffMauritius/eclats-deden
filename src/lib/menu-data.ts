export type MenuItem = {
  name: string
  description?: string
  price?: number
  note?: string
}

export type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  image?: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "planches",
    title: "Planches Apéro",
    image: "/menu/planches.jpg",
    items: [
      {
        name: "Planche mauricienne",
        description: "Samoussas poulet/fromage/végétarien, poulet croustillant, bâtons de mozzarella/camembert pané, onion rings (12 pièces)",
        price: 390,
      },
      {
        name: "Planche de charcuterie",
        description: "Pour 2 personnes",
        price: 600,
      },
    ],
  },
  {
    id: "galettes",
    title: "Galettes de Sarrasin",
    subtitle: "Sans gluten",
    image: "/crepes.jpg",
    items: [
      { name: "Complète", description: "Jambon, fromage, œuf", price: 450 },
      { name: "Locale", description: "Poulet mariné, fromage, oignons crispy", price: 450 },
      { name: "Végé", description: "Tomates, fromage, pesto", price: 450 },
      { name: "Marlin", description: "Marlin, œuf, fromage, tomates, citron", price: 500 },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    image: "/menu/snacks.jpg",
    items: [
      { name: "Croque-Monsieur Marlin", description: "Avec béchamel et salade", price: 400 },
      { name: "Croque-Monsieur Poulet", description: "Avec béchamel et salade", price: 400 },
      { name: "Croque-Monsieur Végétarien", description: "Avec béchamel et salade — tomates, pesto, mozzarella", price: 350 },
      { name: "Panini Marlin", description: "Frites — fromage, tomates, sauce signature", price: 500 },
      { name: "Panini Poulet", description: "Frites — poulet, fromage, tomates, sauce signature", price: 500 },
      { name: "Panini Végétarien", description: "Frites — tomates, pesto, mozzarella", price: 500 },
    ],
  },
  {
    id: "burgers",
    title: "Burgers et Frites",
    image: "/menu/burgers.jpg",
    items: [
      { name: "Burger de Bœuf", description: "Fromage, tomates, oignons caramélisés, steak de bœuf WAGYU, sauce signature", price: 600 },
      { name: "Burger de Poulet", description: "Fromage, tomates, oignons caramélisés, poulet, sauce signature", price: 600 },
    ],
  },
  {
    id: "accompagnements",
    title: "Accompagnements",
    items: [
      { name: "Frites", price: 200 },
    ],
  },
  {
    id: "salades",
    title: "Salades & Plats",
    image: "/menu/salades.jpg",
    items: [
      { name: "Salade Ananas Marlin Fumé", description: "Servie dans un ananas — ananas, marlin, tomates, oignon rouge, sel piment léger", price: 500 },
      { name: "Salade Ananas Marlin Fumé + Croque-Monsieur", description: "Salade ananas marlin fumé accompagnée d'un croque-monsieur", price: 800 },
      { name: "Timbale Océane", description: "Salade et pain grillé — surimi, thon, œufs, mayonnaise", price: 400 },
      { name: "Salade et plat du jour", note: "Voir ardoise" },
    ],
  },
  {
    id: "crepes",
    title: "Crêpes au Froment & Gaufres",
    image: "/crepes.webp",
    items: [
      { name: "Nutella", price: 200 },
      { name: "Gourmande", description: "Nutella banane", price: 250 },
      { name: "L'Éclat", description: "Sucre", price: 150 },
      { name: "Crêpe Soleil", description: "Sucre, citron", price: 200 },
      { name: "Fruitée", description: "Confiture maison", price: 150 },
      { name: "L'Eden", description: "Caramel beurre salé maison", price: 250 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    image: "/menu/desserts.jpg",
    items: [
      { name: "Salade de fruits frais", price: 290 },
      { name: "Inspiration du jour", note: "Voir ardoise" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    image: "/menu/boissons.jpg",
    items: [
      { name: "Eau plate 50cl", price: 50 },
      { name: "Eau plate ou gazeuse 1L", price: 100 },
      { name: "Coca-Cola, Fanta, Orangina, Sprite, FuzeTea", price: 100 },
      { name: "Jus de Fruits Frais — 1 fruit", description: "Boisson locale", price: 200 },
      { name: "Jus de Fruits Frais — mix", description: "Boisson locale", price: 300 },
      { name: "Citronnade maison", description: "Boisson locale", price: 100 },
      { name: "Matcha Latte glacé", description: "Boisson glacée", price: 250 },
      { name: "Thé glacé", description: "Boisson glacée — thé noir ou vert, sirop de canne, rondelle de citron", price: 200 },
      { name: "Café glacé", description: "Boisson glacée" },
      { name: "Supplément Nutella ou Caramel", price: 50 },
      { name: "Expresso", description: "Boisson chaude", price: 100 },
      { name: "Double expresso", description: "Boisson chaude", price: 150 },
      { name: "Allongé", description: "Boisson chaude", price: 120 },
      { name: "Allongé + lait", description: "Boisson chaude", price: 150 },
      { name: "Cappuccino", description: "Boisson chaude", price: 150 },
      { name: "Thé", description: "Boisson chaude", price: 100 },
    ],
  },
]
