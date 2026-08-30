export type NavItem = {
  title: string
  link: string
  emoji: string
  /** Sous-entrées affichées dans le méga-menu du bureau. */
  children?: { title: string; link: string; emoji: string; hint?: string }[]
}

export const navigationData: NavItem[] = [
  { title: "Accueil", link: "/", emoji: "🌺" },
  {
    title: "La carte",
    link: "/menu",
    emoji: "🥞",
    children: [
      { title: "Galettes de sarrasin", link: "/menu#galettes", emoji: "🥞", hint: "Sans gluten · dès 450 Rs" },
      { title: "Salades", link: "/menu#salades", emoji: "🥗", hint: "Généreuses · dès 500 Rs" },
      { title: "Burgers", link: "/menu#burgers", emoji: "🍔", hint: "Wagyu & végé · dès 550 Rs" },
      { title: "Paninis", link: "/menu#paninis", emoji: "🥪", hint: "Avec frites · dès 400 Rs" },
      { title: "Plats", link: "/menu#plats", emoji: "🐟", hint: "Dorade · dès 690 Rs" },
      { title: "Crêpes & gaufres", link: "/menu#crepes", emoji: "🍯", hint: "Sucré · dès 150 Rs" },
      { title: "Boissons", link: "/menu#boissons", emoji: "🍹", hint: "Jus pressés minute" },
      { title: "Sur commande", link: "/menu#sur-commande", emoji: "🦞", hint: "Langouste & pièce de bœuf" },
    ],
  },
  { title: "Galerie", link: "/galerie", emoji: "📸" },
  { title: "Contact", link: "/contact", emoji: "📍" },
]
