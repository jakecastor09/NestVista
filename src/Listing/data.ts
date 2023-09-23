import list1 from '../assets/list-1.webp';
import list2 from '../assets/list-2.webp';
import list3 from '../assets/list-3.webp';
import list4 from '../assets/list-4.webp';
import list5 from '../assets/list-5.webp';
import list6 from '../assets/list-6.webp';
import list7 from '../assets/list-7.webp';
import list8 from '../assets/list-8.webp';
import list9 from '../assets/list-9.webp';
import list10 from '../assets/list-10.webp';
import list11 from '../assets/list-11.webp';
import list12 from '../assets/list-12.webp';

export interface HomeData {
  id: number;
  image: string;
  price: number;
  name: string;
  address: string;
  square: number;
  bedroom: number;
  bathroom: number;
}

export const dataListing: HomeData[] = [
  {
    id: 1,
    image: list1,
    price: 2800,
    name: 'Serene Standard House',
    address: 'Tranquil Trail Terrace',
    square: 1200,
    bedroom: 6,
    bathroom: 4,
  },
  {
    id: 2,
    image: list2,
    price: 4300,
    name: 'Tranquil Minimalist House',
    address: 'Willowbrook Lane',
    square: 900,
    bedroom: 2,
    bathroom: 3,
  },
  {
    id: 3,
    image: list3,
    price: 1200,
    name: 'Elegant Standard House',
    address: 'Serenity Heights',
    square: 500,
    bedroom: 6,
    bathroom: 8,
  },
  {
    id: 4,
    image: list4,
    price: 8800,
    name: 'Blissful Standard House',
    address: 'Enchanted Elm Avenue',
    square: 1800,
    bedroom: 7,
    bathroom: 4,
  },
  {
    id: 5,
    image: list5,
    price: 11600,
    name: 'Majestic Standard House',
    address: 'Harmony Haven Street',
    square: 1800,
    bedroom: 8,
    bathroom: 3,
  },
  {
    id: 6,
    image: list6,
    price: 12700,
    name: 'Harmony Standard House',
    address: 'Whispering Pines Way',
    square: 1800,
    bedroom: 6,
    bathroom: 4,
  },
  {
    id: 7,
    image: list7,
    price: 700,
    name: 'Enchanted Standard House',
    address: 'Radiant Ridge Road',
    square: 600,
    bedroom: 3,
    bathroom: 2,
  },
  {
    id: 8,
    image: list8,
    price: 900,
    name: 'Radiant Standard House',
    address: 'Majestic Meadows Lane',
    square: 900,
    bedroom: 6,
    bathroom: 2,
  },
  {
    id: 9,
    image: list9,
    price: 1100,
    name: 'Whispering Standard House',
    address: 'Celestial View Crescent',
    square: 1000,
    bedroom: 4,
    bathroom: 2,
  },
  {
    id: 10,
    image: list10,
    price: 2800,
    name: 'Celestial Standard House',
    address: 'Blissful Breeze Boulevard',
    square: 1800,
    bedroom: 4,
    bathroom: 2,
  },
  {
    id: 11,
    image: list11,
    price: 1400,
    name: 'Aurora Standard House',
    address: "Dreamer's Delight Drive",
    square: 1600,
    bedroom: 8,
    bathroom: 4,
  },
  {
    id: 12,
    image: list12,
    price: 1900,
    name: 'Royal Standard House',
    address: 'Sunset Serenade Street',
    square: 1800,
    bedroom: 3,
    bathroom: 1,
  },
];
