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
} from '~/components/links';

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
    to: DISCORD_LINK,
    //Need to find a better way to pass styles
    icon: <DiscordSVG className="w-5 h-auto" />,
  },
  {
    to: INSTAGRAM_LINK,
    icon: <InstagramSVG className="w-5 h-auto" />,
  },
  {
    to: '#',
    icon: <YoutubeSVG className="w-5 h-auto" />,
  },
  {
    to: '#',
    icon: <LinkedinSVG className="w-5 h-auto" />,
  },
  {
    to: GITHUB_LINK,
    icon: <GithubSVG className="w-5 h-auto" />,
  },
];
