import CompareSvg from '@/assets/svgs/compare';
import FacebookSvg from '@/assets/svgs/facebook';
import HelpSvg from '@/assets/svgs/help';
import InstagramSvg from '@/assets/svgs/instagram';
import PersonSvg from '@/assets/svgs/person';
import PinterestSvg from '@/assets/svgs/pinterest';
import RedditSvg from '@/assets/svgs/reddt';
import SupportSvg from '@/assets/svgs/suport';
import TrackOrderSvg from '@/assets/svgs/track-order';
import TwitterSvg from '@/assets/svgs/twitter';
import YoutubeSvg from '@/assets/svgs/youtube';

export const menuLinksData = [
  {
    id: 5,
    svg: <PersonSvg color="#5F6C72" />,
    text: 'Profile',
    link: '',
  },
  {
    id: 1,
    svg: <TrackOrderSvg color="#5F6C72" />,
    text: 'Track Order',
    link: '/track-order',
  },
  {
    id: 2,
    svg: <CompareSvg color="#5F6C72" />,
    text: 'Compare',
    link: '#',
  },
  {
    id: 3,
    svg: <SupportSvg color="#5F6C72" />,
    text: 'Customer Support',
    link: '#',
  },
  {
    id: 4,
    svg: <HelpSvg color="#5F6C72" />,
    text: 'Need Help',
    link: '#',
  },
];

export const socialLinksData = [
  {
    id: 1,
    svg: (color) => <TwitterSvg color={color} />,
    link: '#',
  },
  {
    id: 2,
    svg: (color) => <FacebookSvg color={color} />,
    link: '#',
  },
  {
    id: 3,
    svg: (color) => <PinterestSvg color={color} />,
    link: '#',
  },
  {
    id: 4,
    svg: (color) => <RedditSvg color={color} />,
    link: '#',
  },
  {
    id: 5,
    svg: (color) => <YoutubeSvg color={color} />,
    link: '#',
  },
  {
    id: 6,
    svg: (color) => <InstagramSvg color={color} />,
    link: '#',
  },
];

export const mobileCategoryData = [
  {
    id: 1,
    name: 'Computer & Laptop',
    value: 'computerLaptop',
  },
  {
    id: 2,
    name: 'Computer Accessories',
    value: 'cmputerAcessories',
  },
  {
    id: 3,
    name: 'SmartPhone',
    value: 'smartPhone',
  },
  {
    id: 4,
    name: 'Headphone',
    value: 'headphone',
  },
  {
    id: 5,
    name: 'Mobile Accessories',
    value: 'mobileaccessories',
  },

  {
    id: 6,
    name: 'Gaming Console',
    value: 'gamingConsole',
  },
  {
    id: 7,
    name: 'Camera & Photo',
    value: 'cameraPhoto',
  },
  {
    id: 8,
    name: 'TV & Home Appliances',
    value: 'tvHomeAppliances',
  },
  {
    id: 9,
    name: 'Watchs & Accessories',
    value: 'WatchsAccessories',
  },
  {
    id: 10,
    name: 'GPS & Navigation',
    value: 'gpsNavigation',
  },
  {
    id: 11,
    name: 'Wearable Technology',
    value: 'wearabletechnology',
  },
];

export const desktopLangData = [
  {
    id: 0,
    image: '/images/eng-flag.png',
    text: 'English',
    value: 'Eng',
  },
  {
    id: 1,
    image: '/images/mdr-flag.png',
    text: 'Mandarin',
    value: 'Mdr',
  },
  {
    id: 2,
    image: '/images/rus-flag.png',
    text: 'Russian',
    value: 'Rus',
  },
];

export const desktopCurrencyData = [
  {
    id: 0,
    text: 'Dollar (USD)',
    value: 'USD',
  },
  {
    id: 1,
    text: 'Euro (EUR)',
    value: 'EUR',
  },
];
