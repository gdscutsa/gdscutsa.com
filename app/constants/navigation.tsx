import DiscordSVG from '~/assets/DiscordSVG';
import GithubSVG from '~/assets/GithubSVG';
import InstagramSVG from '~/assets/InstagramSVG';
import LinkedinSVG from '~/assets/LinkedinSVG';
import YoutubeSVG from '~/assets/YoutubeSVG';

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
  { to: '/links', name: 'Links' },
];

type SocialItem = {
  to: string;
  icon: React.ReactNode;
};

export const Socials: SocialItem[] = [
  {
    to: 'https://discord.gg/u9YSVNb6jN',
    icon: <DiscordSVG className="w-5 h-auto" />,
  },
  {
    to: 'https://www.instagram.com/gdsc.utsa/',
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
    to: 'https://www.github.com/gdscutsa',
    icon: <GithubSVG className="w-5 h-auto" />,
  },
];
