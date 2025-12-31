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
  whatsappMessage?: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Habitación Doble Estándar",
    slug: "habitacion-doble-estandar",
    descriptionShort: "Habitación amplia y acogedora con cama matrimonial, ideal para dos personas.",
    descriptionLong: "Habitación cómoda y bien distribuida, equipada con una cama matrimonial y decoración acogedora. Ofrece un ambiente tranquilo y agradable para una estadía confortable. Cuenta con buena iluminación natural, mobiliario básico y limpieza permanente. Ideal para parejas o viajeros que buscan descanso y comodidad. Incluye wifi gratuito, televisión con cable y ropa de cama limpia para una experiencia práctica y relajada.",
    price: 40000,
    imageUrl: "/habitacion-doble-estandar-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Televisión con cable", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación doble estándar con cama matrimonial, wifi gratuito, TV cable, toallas y elementos de aseo. Ambiente cómodo y tranquilo."
  },
  {
    id: 2,
    name: "Habitación Individual Económica",
    slug: "habitacion-individual-economica",
    descriptionShort: "Habitación sencilla y funcional, ideal para estancias cortas.",
    descriptionLong: "Espacio práctico y cómodo, equipado con cama individual y mobiliario básico. Perfecta para viajeros solos que buscan una opción económica y tranquila. Cuenta con buena ventilación, ambiente limpio y ordenado, ideal para descansar después de un día de actividades. Incluye wifi gratuito y ropa de cama limpia para una estancia sencilla y agradable.",
    price: 35000,
    imageUrl: "/habitacion-individual-economica-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación individual económica, con cama individual, wifi gratuito, toallas y elementos de aseo. Ambiente limpio y tranquilo."
  },
  {
    id: 3,
    name: "Habitación Doble con Camas Separadas",
    slug: "habitacion-doble-camas-separadas",
    descriptionShort: "Ideal para amigos o compañeros de viaje.",
    descriptionLong: "Habitación cómoda equipada con dos camas individuales, pensada para quienes viajan juntos y prefieren camas separadas. Cuenta con buena distribución del espacio, luz natural y un ambiente tranquilo para el descanso. Incluye wifi gratuito, televisión con cable y ropa de cama limpia.",
    price: 40000,
    imageUrl: "/habitacion-doble-camas-separadas-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Televisión con cable", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación doble con camas separadas, wifi gratuito, TV cable, toallas y elementos de aseo."
  },
  {
    id: 4,
    name: "Habitación Triple Estándar",
    slug: "habitacion-triple-estandar",
    descriptionShort: "Habitación amplia ideal para familias o grupos pequeños.",
    descriptionLong: "Habitación equipada con una cama matrimonial y una litera, ofreciendo espacio suficiente para una estadía cómoda. Ambiente acogedor, limpio y bien iluminado, ideal para descansar después de un día de viaje. Incluye wifi gratuito, televisión con cable y ropa de cama limpia.",
    price: 50000,
    imageUrl: "/habitacion-triple-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Televisión con cable", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación triple con cama matrimonial y litera, wifi gratuito, TV cable, toallas y elementos de aseo."
  },
  {
    id: 5,
    name: "Habitación Triple",
    slug: "habitacion-triple-tres-camas",
    descriptionShort: "Habitación amplia con tres camas individuales.",
    descriptionLong: "Habitación pensada para grupos de amigos o compañeros de viaje. Dispone de tres camas individuales y buen espacio interior. Cuenta con iluminación natural, ambiente limpio y tranquilo para un descanso adecuado. Incluye wifi gratuito y ropa de cama limpia.",
    price: 45000,
    imageUrl: "/habitacion-triple-tres-camas-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación triple con tres camas individuales, wifi gratuito, toallas y elementos de aseo."
  },
  {
    id: 6,
    name: "Habitación Cuádruple",
    slug: "habitacion-cuadruple",
    descriptionShort: "Ideal para familias o grupos.",
    descriptionLong: "Habitación amplia pensada para grupos o familias. Ofrece un espacio cómodo y bien distribuido para una estadía agradable. Cuenta con buena iluminación natural, ambiente tranquilo y mobiliario funcional. Incluye wifi gratuito y ropa de cama limpia.",
    price: 40000,
    imageUrl: "/habitacion-cuadruple-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Habitación cuádruple, amplia y cómoda, con wifi gratuito, toallas y elementos de aseo."
  },
  {
    id: 7,
    name: "Suite del Hostal",
    slug: "suite-hostal",
    descriptionShort: "Suite cómoda con mayor privacidad y confort.",
    descriptionLong: "Espacio privado y acogedor, ideal para quienes buscan mayor comodidad durante su estadía. Cuenta con cama confortable y mobiliario funcional. Ambiente tranquilo, limpio y bien iluminado, perfecto para descansar. Incluye wifi gratuito, televisión con cable y ropa de cama limpia.",
    price: 40000,
    imageUrl: "/suite-hostal-republica-santiago.png",
    amenities: ["Wifi gratuito", "Televisión con cable", "Ropa de cama", "Toallas", "Elementos de aseo", "Limpieza diaria"],
    whatsappMessage: "Suite del hostal, cómoda y privada, con wifi gratuito, TV cable, toallas y elementos de aseo."
  }
];