// src/data/rooms.ts
export interface Room {
  id: number;
  name: string;
  slug: string;
  descriptionShort: string;
  descriptionLong: string;
  price: number;
  imageUrl: string;
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Chambre Soleil",
    slug: "chambre-soleil",
    descriptionShort: "Chambre lumineuse avec vue sur le jardin, idéale pour deux personnes.",
    descriptionLong: "Notre Chambre Soleil offre un espace chaleureux et lumineux avec une grande fenêtre donnant sur notre magnifique jardin. Parfaite pour les couples ou les voyageurs solo cherchant confort et tranquillité. La décoration soignée et les matériaux naturels créent une atmosphère apaisante pour un séjour mémorable.",
    price: 65,
    imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Wi-Fi gratuit", "Salle de bain privée", "Climatisation", "Bureau", "Coffre-fort", "Vue sur jardin"]
  },
  {
    id: 2,
    name: "Suite Océan",
    slug: "suite-ocean",
    descriptionShort: "Suite spacieuse avec balcon privé et vue panoramique.",
    descriptionLong: "La Suite Océan est notre chambre la plus spacieuse, offrant un confort premium avec un balcon privé où vous pourrez admirer le coucher du soleil. Elle dispose d'un coin salon séparé, d'une salle de bain moderne avec baignoire, et de tous les équipements nécessaires pour un séjour luxueux. Idéale pour les voyageurs exigeants.",
    price: 95,
    imageUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Wi-Fi gratuit", "Salle de bain privée", "Climatisation", "Balcon privé", "Mini-bar", "TV écran plat", "Coffre-fort"]
  },
  {
    id: 3,
    name: "Chambre Forêt",
    slug: "chambre-foret",
    descriptionShort: "Chambre cosy au calme, avec décoration naturelle inspirante.",
    descriptionLong: "La Chambre Forêt vous plonge dans une ambiance naturelle et sereine. Décorée avec des matériaux écologiques et des tons terreux, cette chambre est un havre de paix pour se ressourcer. Elle offre tout le confort moderne tout en conservant un style authentique et chaleureux.",
    price: 55,
    imageUrl: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Wi-Fi gratuit", "Salle de bain privée", "Ventilateur", "Bureau", "Décoration écologique"]
  },
  {
    id: 4,
    name: "Chambre Familiale",
    slug: "chambre-familiale",
    descriptionShort: "Espace généreux pouvant accueillir jusqu'à 4 personnes.",
    descriptionLong: "Notre Chambre Familiale est spécialement conçue pour les familles ou les groupes d'amis. Avec ses deux lits doubles et son espace de vie spacieux, elle offre tout le confort nécessaire pour un séjour convivial. La salle de bain moderne et les nombreux rangements rendent le séjour pratique et agréable.",
    price: 110,
    imageUrl: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200",
    amenities: ["Wi-Fi gratuit", "Salle de bain privée", "Climatisation", "Deux lits doubles", "TV écran plat", "Espace de vie", "Coffre-fort"]
  }
];
