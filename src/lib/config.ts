export const SiteConfig = {
  title: "Éclats d'Éden",
  tagline: "Sucré · Salé",
  description:
    "Crêperie & restaurant à Grand Baie, Île Maurice. Galettes de sarrasin sans gluten, crêpes sucrées, burgers Wagyu et salades tropicales, sur le Sunset Boulevard.",
  address: "Sunset Boulevard, Grand Baie, Île Maurice",
  addressLines: ["Sunset Boulevard", "Grand Baie", "Île Maurice"],
  phone: "+230 5744 1889",
  phoneUrl: "tel:+23057441889",
  whatsappUrl: "https://wa.me/23057441889",
  instagram: "https://www.instagram.com/eclatsdeden",
  instagramHandle: "@eclatsdeden",
  facebook: "https://www.facebook.com/people/Éclats-dEden/61551937037481/",
  tiktok: "https://www.tiktok.com/@eclatsdeden",
  tripadvisor:
    "https://www.tripadvisor.fr/Restaurant_Review-g488103-d34302577-Reviews-Eclats_d_Eden-Grand_Baie.html",
  email: "contact@eclatsdeden.mu",
  cuisines: ["Française", "Crêperie", "Desserts", "Créole"],
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.5!2d57.58!3d-20.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSunset+Boulevard+Grand+Baie!5e0!3m2!1sfr!2smu!4v1700000000000",
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Eclats+d'Eden+Sunset+Boulevard+Grand+Baie+Mauritius",
} as const

/** Note et volume d'avis relevés sur la fiche Tripadvisor. */
export const TripadvisorRating = {
  score: 5,
  reviews: 6,
  url: SiteConfig.tripadvisor,
} as const
