
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "Lotte Plaza Barber & Salon",
  address: "13955 Metrotech Dr, Chantilly, VA 20151",
  location: "Sully Place Shopping Center",
  phone: "(703) 263-1778",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=13955+Metrotech+Dr+Chantilly+VA+20151",
  hours: {
    weekdays: "9:00 AM - 8:00 PM",
    weekends: "9:00 AM - 7:00 PM"
  },
  facilities: [
    { label: "Wheelchair accessible entrance", icon: "♿" },
    { label: "Wheelchair accessible parking lot", icon: "🚗" },
    { label: "Wheelchair accessible restroom", icon: "🚻" },
    { label: "Restroom available", icon: "✨" },
    { label: "Good for kids", icon: "👨‍👩‍👧‍👦" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'm1',
    name: "Classic Men's Haircut",
    description: "Traditional precision cut finished with a straight razor neck shave and hot towel.",
    price: "$30+",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'm3',
    name: "Executive Skin Fade",
    description: "Ultra-precise taper using foil shavers for a seamless finish. Our highest-demand cut.",
    price: "$45+",
    duration: "45 min",
    category: 'Barber'
  },
  {
    id: 'm2',
    name: "Straight Razor Shave",
    description: "The ultimate luxury. Multi-step hot towel treatment with premium oils and a close razor finish.",
    price: "$35+",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'm4',
    name: "Beard Sculpting & Steam",
    description: "Full beard shaping with aromatic steam treatment and crisp line-up.",
    price: "$25+",
    duration: "20 min",
    category: 'Barber'
  },
  {
    id: 'k1',
    name: "Junior Signature Cut",
    description: "Gentle and stylish grooming for children. We specialize in making kids feel like VIPs.",
    price: "$22+",
    duration: "25 min",
    category: 'Barber'
  },
  {
    id: 'w1',
    name: "Women's Signature Blowout",
    description: "High-volume style including professional wash and premium finishing products.",
    price: "$45+",
    duration: "45 min",
    category: 'Salon'
  },
  {
    id: 'w3',
    name: "Designer Layered Cut",
    description: "Modern styling focused on texture, movement, and face-framing precision.",
    price: "$65+",
    duration: "60 min",
    category: 'Salon'
  },
  {
    id: 'w2',
    name: "Dimension Highlights",
    description: "Full head of highlights designed to add depth and radiance to your natural color.",
    price: "$140+",
    duration: "120 min",
    category: 'Salon'
  },
  {
    id: 'w4',
    name: "Balayage Artistry",
    description: "Hand-painted color for a sun-kissed, low-maintenance, and perfectly blended look.",
    price: "$180+",
    duration: "150 min",
    category: 'Salon'
  },
  {
    id: 't2',
    name: "Keratin Smoothing Therapy",
    description: "Eliminate frizz and reduce styling time for up to 3 months with our silk-infusion formula.",
    price: "$200+",
    duration: "120 min",
    category: 'Treatment'
  },
  {
    id: 't1',
    name: "Deep Moisture Recovery",
    description: "Intensive conditioning mask that repairs heat damage and restores natural shine.",
    price: "$35+",
    duration: "30 min",
    category: 'Treatment'
  },
  {
    id: 't3',
    name: "Organic Scalp Detox",
    description: "Exfoliating treatment with essential oils to promote hair growth and scalp health.",
    price: "$50+",
    duration: "40 min",
    category: 'Treatment'
  }
];