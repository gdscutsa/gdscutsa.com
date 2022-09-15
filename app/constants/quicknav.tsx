import { DISCORD_LINK } from '~/constants/links';

export type NavItemProps =
  | {
      to: string;
      name: string;
    }
  | {
      header: boolean;
      name: string;
    };

export const QuickNav: NavItemProps[] = [
  // { header: true, name: 'Example Header' },
  // { to: 'https://example.org', name: 'Example Link' },

  { header: true, name: 'Info' },
  { to: '/', name: 'Website' },
  {
    to: '/events',
    name: 'Events',
  },
  {
    to: 'https://rowdylink.utsa.edu/organization/gdsc',
    name: 'RowdyLink',
  },
  { header: true, name: 'Socials and Stuff' },
  {
    to: DISCORD_LINK,
    name: 'Discord',
  },
  {
    to: 'https://www.instagram.com/gdsc.utsa/',
    name: 'Instagram',
  },
  {
    to: 'https://www.github.com/gdscutsa/',
    name: 'GitHub',
  },
];
