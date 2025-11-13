export interface Animal {
  id: string;
  name: string;
  age: string;
  size: string;
  breed: string;
  status: "available" | "adopted";
  image: string;
  description: string;
  personality: string[];
  health: string;
  story: string;
}

export const animals: Animal[] = [
  {
    id: "1",
    name: "Luna",
    age: "2 años",
    size: "Mediano",
    breed: "Mestiza",
    status: "available",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    description: "Luna es una perrita cariñosa y juguetona que adora los niños.",
    personality: ["Juguetona", "Cariñosa", "Sociable"],
    health: "Vacunas al día, esterilizada, desparasitada",
    story: "Luna fue rescatada de la calle cuando era cachorra. Ahora está lista para encontrar su hogar definitivo.",
  },
  {
    id: "2",
    name: "Max",
    age: "4 años",
    size: "Grande",
    breed: "Labrador Mestizo",
    status: "available",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
    description: "Max es un perro leal y protector, ideal para familias activas.",
    personality: ["Leal", "Protector", "Energético"],
    health: "Vacunas al día, esterilizado, excelente salud",
    story: "Max fue abandonado por su familia anterior. Es un compañero fiel que merece una segunda oportunidad.",
  },
  {
    id: "3",
    name: "Michi",
    age: "1 año",
    size: "Pequeño",
    breed: "Gato Doméstico",
    status: "available",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
    description: "Michi es un gatito juguetón y curioso que adora explorar.",
    personality: ["Curioso", "Independiente", "Cariñoso"],
    health: "Vacunas al día, esterilizado, perfecto estado",
    story: "Michi fue encontrado en un parque cuando era muy pequeño. Ahora busca un hogar donde pueda dar todo su amor.",
  },
  {
    id: "4",
    name: "Bella",
    age: "3 años",
    size: "Mediano",
    breed: "Beagle Mestizo",
    status: "adopted",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
    description: "Bella es una perrita tranquila y amorosa, perfecta para apartamentos.",
    personality: ["Tranquila", "Amorosa", "Obediente"],
    health: "Vacunas al día, esterilizada",
    story: "Bella encontró su hogar definitivo con una familia maravillosa.",
  },
  {
    id: "5",
    name: "Rocky",
    age: "5 años",
    size: "Grande",
    breed: "Pastor Alemán Mestizo",
    status: "available",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80",
    description: "Rocky es un perro inteligente y entrenado, excelente guardián.",
    personality: ["Inteligente", "Guardián", "Obediente"],
    health: "Vacunas al día, esterilizado, entrenamiento básico",
    story: "Rocky necesita un hogar con espacio amplio donde pueda correr y jugar.",
  },
  {
    id: "6",
    name: "Nina",
    age: "6 meses",
    size: "Pequeño",
    breed: "Chihuahua Mestizo",
    status: "available",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    description: "Nina es una cachorrita adorable llena de energía y amor.",
    personality: ["Energética", "Juguetona", "Pequeña"],
    health: "Primeras vacunas aplicadas, en proceso de esterilización",
    story: "Nina fue rescatada junto a sus hermanos. Es la más pequeña y cariñosa de todos.",
  },
  {
    id: "7",
    name: "Simba",
    age: "2 años",
    size: "Mediano",
    breed: "Gato Naranja",
    status: "available",
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&q=80",
    description: "Simba es un gato majestuoso y cariñoso que adora las siestas.",
    personality: ["Majestuoso", "Cariñoso", "Tranquilo"],
    health: "Vacunas al día, esterilizado",
    story: "Simba busca un hogar tranquilo donde pueda ser el rey de la casa.",
  },
  {
    id: "8",
    name: "Toby",
    age: "3 años",
    size: "Mediano",
    breed: "Cocker Spaniel Mestizo",
    status: "adopted",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    description: "Toby encontró su familia definitiva y es muy feliz.",
    personality: ["Feliz", "Sociable", "Amigable"],
    health: "Excelente salud",
    story: "Toby fue adoptado recientemente y ahora vive su mejor vida.",
  },
];
