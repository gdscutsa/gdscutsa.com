export type TeamMember = {
  name: string;
  role: string;
  image: string;
  accentColor?: string;
};

export const Leads: TeamMember[] = [
  {
    name: 'Hector Pineda',
    role: 'GDSC Lead',
    image: 'assets/images/team/hector.jpg',
  },
];

export const TeamMembers: TeamMember[] = [
  {
    name: 'Zack Umar',
    role: 'Technology Lead',
    image: 'assets/images/team/zack.jpg',
    accentColor: 'border-blue-500',
  },
  {
    name: 'Zach True',
    role: 'Event Coordination Lead',
    image: 'assets/images/team/zach.png',
    accentColor: 'border-green-500',
  },
  {
    name: 'Julio Valdes',
    role: 'Workshop Planning Lead',
    image: 'assets/images/team/julio.jpg',
    accentColor: 'border-yellow-400',
  },
  {
    name: 'Hayden',
    role: 'Discord Lead',
    image: 'assets/images/team/hayden.png',
    accentColor: 'border-green-500',
  },
  {
    name: 'Victor Garcia',
    role: 'Social Media Lead',
    image: 'assets/images/team/victor.jpg',
    accentColor: 'border-blue-500',
  },
];
