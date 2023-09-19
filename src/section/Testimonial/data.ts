import person1 from '../../assets/person-1.webp';
import person2 from '../../assets/person-2.webp';
import person3 from '../../assets/person-3.webp';
import person4 from '../../assets/person-4.webp';
export interface Comments {
  message: string;
  name: string;
  subName: string;
  img: string;
}
export const testimonialData = [
  {
    id: 1,
    message:
      "I can't express enough how thrilled I am with the seamless home buying process from this company.",
    image: person1,
    name: 'Sarah M.',
    subName: 'New Homeowner',
  },
  {
    id: 2,
    message:
      'Their expertise and strategic approach ensured I got a great price for my property in record time.',
    image: person2,
    name: 'Michael T.',
    subName: 'Satisfied Seller',
  },
  {
    id: 3,
    message:
      'As first-time homebuyers, we were nervous about the whole process. However, this team was patient and informative',
    image: person3,
    name: 'Emily  H.',
    subName: 'Happy First-Time Buyers',
  },
  {
    id: 4,
    message:
      "This is the second property I've purchased with this company, and once again, they exceeded my expectations.",
    image: person4,
    name: 'John S.',
    subName: 'Repeat Customer',
  },
];
