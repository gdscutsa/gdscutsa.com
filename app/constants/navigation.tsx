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
