export type Category = 'clothes' | 'bags' | 'pants' | 'shirts' | 'jumpers';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "p-1",
    name: "The Founder's Hoodie",
    description: "Premium heavy-weight cotton blend. Made for late nights and early mornings.",
    price: 125,
    category: "jumpers",
    imageUrl: "/placeholder.png",
    isNew: true
  },
  {
    id: "p-2",
    name: "Executive Briefcase",
    description: "Sleek vegan leather briefcase to carry your contracts and cash.",
    price: 180,
    category: "bags",
    imageUrl: "/placeholder.png",
  },
  {
    id: "p-3",
    name: "Hustler Cargo Pants",
    description: "Utility meets luxury. Multiple pockets for your multiple streams of income.",
    price: 145,
    category: "pants",
    imageUrl: "/placeholder.png"
  },
  {
    id: "p-4",
    name: "Silk Blend Button-Up",
    description: "Look sharp in the boardroom. Breathable luxury silk blend.",
    price: 110,
    category: "shirts",
    imageUrl: "/placeholder.png",
    isNew: true
  },
  {
    id: "p-5",
    name: "Coinchasers Signature Tee",
    description: "The classic logo tee. Wear your ambition on your chest.",
    price: 55,
    category: "clothes",
    imageUrl: "/placeholder.png"
  },
  {
    id: "p-6",
    name: "Capital Duffle Bag",
    description: "Perfect for weekend business trips. Spacious and durable.",
    price: 210,
    category: "bags",
    imageUrl: "/placeholder.png",
    isNew: true
  },
  {
    id: "p-7",
    name: "Investment Track Pants",
    description: "Comfortable enough for travel, stylish enough for the streets.",
    price: 95,
    category: "pants",
    imageUrl: "/placeholder.png"
  },
  {
    id: "p-8",
    name: "The Visionary Sweater",
    description: "Knit sweater with subtle gold detailing.",
    price: 160,
    category: "jumpers",
    imageUrl: "/placeholder.png"
  }
];
