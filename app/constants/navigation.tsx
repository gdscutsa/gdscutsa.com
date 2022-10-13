import DiscordSVG from '~/assets/DiscordSVG';
import GithubSVG from '~/assets/GithubSVG';
import InstagramSVG from '~/assets/InstagramSVG';
import LinkedinSVG from '~/assets/LinkedinSVG';
import YoutubeSVG from '~/assets/YoutubeSVG';
import {
  DISCORD_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  ROWDYLINK_LINK,
} from '~/constants/links';

type NavItem = {
  to: string;
  name: string;
};

export const Navigation: NavItem[] = [
  // { to: 'https://example.org', name: 'Example Link' },
  { to: '/', name: 'Home' },
  { to: '/events', name: 'Events' },
  { to: '/projects', name: 'Projects' },
  { to: '/team', name: 'Team' },
];

type SocialItem = {
  name: string;
  to: string;
  icon: React.ReactNode;
};

export const FooterNavigation: NavItem[] = [
  { to: '/', name: 'Home' },
  { to: '/events', name: 'Events' },
  { to: '/projects', name: 'Projects' },
  { to: '/team', name: 'Team' },
  { to: ROWDYLINK_LINK, name: 'RowdyLink' },
  { to: '/links', name: 'Links' },
];

export const Socials: SocialItem[] = [
  {
    name: 'Discord',
    to: DISCORD_LINK,
    //Need to find a better way to pass styles
    icon: <DiscordSVG className="h-auto w-5" />,
  },
  {
    name: 'Instagram',
    to: INSTAGRAM_LINK,
    icon: <InstagramSVG className="h-auto w-5" />,
  },
  {
    name: 'YouTube',
    to: '#',
    icon: <YoutubeSVG className="h-auto w-5" />,
  },
  {
    name: 'LinkedIn',
    to: '#',
    icon: <LinkedinSVG className="h-auto w-5" />,
  },
  {
    name: 'GitHub',
    to: GITHUB_LINK,
    icon: <GithubSVG className="h-auto w-5" />,
  },
];
