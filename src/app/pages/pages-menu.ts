import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Gallery',
    icon: 'ion-social-instagram-outline',
    children: [
      {
        title: 'Events',
        link: '/pages/gallery/events',
      }
    ],
  },
];
