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
    price: '$43',
    image: roomStandard,
    features: ['Queen Bed', 'City View', 'Free Wi-Fi', 'Mini Bar'],
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description:
      'Elevated comfort with panoramic city views. Spacious interiors with premium furnishings and ambient lighting.',
    price: '$60',
    image: roomDeluxe,
    features: ['King Bed', 'Skyline View', 'Workspace'],
  },
  {
    id: 3,
    name: 'Deluxe Suite',
    description:
      'The pinnacle of luxury. A separate living area, ocean views, and bespoke service for an unforgettable experience.',
    price: '$149',
    image: roomDeluxeSuite,
    features: ['Living Area', 'Ocean View', 'Butler Service', 'Rain Shower'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description:
      'The pinnacle of luxury. A separate living area, ocean views, and bespoke service for an unforgettable experience.',
    price: '$189',
    image: roomSuite,
    features: ['Living Area', 'Ocean View', 'Butler Service', 'Jacuzzi'],
  },
];

export const pageHeaderDetails = [
  {
    name: 'home',
    subtitle: 'Welcome to',
    title: 'Beach Heaven Hotel',
    descriptionLineOne:
      'Where timeless elegance meets modern comfort in sea beast. Experience hospitality that feels like home only better.',
    descriptionLineTwo: '',
  },
  {
    name: 'about us',
    subtitle: 'About us',
    title: 'A Legacy of Exceptional Hospitality',
    descriptionLineOne:
      'Founded in 1987, Beach Haven Hotel has been a landmark of refined luxury for over three decades. Nestled along the coast, our property blends classic architecture with contemporary elegance.',
    descriptionLineTwo:
      "very detail from the hand selected linens to our award winning culinary team is curated to ensure your stay is nothing short of extraordinary. We don't just host guests; we create lasting memories.",
    aligment: false,
  },
  {
    name: 'room',
    subtitle: 'Accommodations',
    title: 'Our Rooms and Suites',
    descriptionLineOne:
      'From cozy retreats to grand suites find the perfect space for your stay.',
    descriptionLineTwo: '',
  },
  {
    name: 'booking',
    subtitle: 'Reservations',
    title: 'Book Your Stay',
    descriptionLineOne:
      "Fill in the details below and we'll confirm your reservation within 24 hours.",
    descriptionLineTwo: '',
  },
  {
    name: 'contact',
    subtitle: 'Get in Touch',
    title: 'Contact Us',
    descriptionLineOne:
      'Have a question or special request? We are here to help make your stay perfect..',
    descriptionLineTwo: '',
  },
];
