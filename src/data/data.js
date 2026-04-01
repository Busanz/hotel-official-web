import roomStandard from '../assets/images/standard.jpeg';
import roomDeluxe from '../assets/images/deluxe.jpeg';
import roomDeluxeSuite from '../assets/images/deluxe_suite.jpeg';
import roomSuite from '../assets/images/presidential_suite.jpeg';

export const menuLinks = ['home', 'about us', 'room', 'booking', 'contact'];

export const aboutUsSummery = [
  {
    value: '35+',
    text: 'Years',
  },
  {
    value: '83',
    text: 'Rooms',
  },
  {
    value: '8.3',
    text: 'Rating',
  },
];

export const roomsTypes = [
  {
    id: 1,
    name: 'Standard Room',
    description:
      'A comfortable retreat with everything you need for a restful stay. Clean design, quality linens, and a quiet atmosphere.',
    price: '$149',
    image: roomStandard,
    features: ['Queen Bed', 'City View', 'Free Wi-Fi', 'Mini Bar'],
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description:
      'Elevated comfort with panoramic city views. Spacious interiors with premium furnishings and ambient lighting.',
    price: '$50',
    image: roomDeluxe,
    features: ['King Bed', 'Skyline View', 'Workspace'],
  },
  {
    id: 3,
    name: 'Deluxe Suite',
    description:
      'The pinnacle of luxury. A separate living area, ocean views, and bespoke service for an unforgettable experience.',
    price: '$549',
    image: roomDeluxeSuite,
    features: ['Living Area', 'Ocean View', 'Butler Service', 'Rain Shower'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description:
      'The pinnacle of luxury. A separate living area, ocean views, and bespoke service for an unforgettable experience.',
    price: '$549',
    image: roomSuite,
    features: ['Living Area', 'Ocean View', 'Butler Service', 'Jacuzzi'],
  },
];
