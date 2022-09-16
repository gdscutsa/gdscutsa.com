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
    image: 'assets/images/team/hector.webp',
  },
];

export const TeamMembers: TeamMember[] = [
  {
    name: 'Zack Umar',
    role: 'Technology Lead',
    image: 'assets/images/team/zack.webp',
    accentColor: 'border-blue-500',
  },
  {
    name: 'Zach True',
    role: 'Event Coordinator',
    image: 'assets/images/team/zach.webp',
    accentColor: 'border-green-500',
  },
  {
    name: 'Julio Valdes',
    role: 'Workshop Planner',
    image: 'assets/images/team/julio.webp',
    accentColor: 'border-yellow-400',
  },
  {
    name: 'Hayden Hughes',
    role: 'Communications',
    image: 'assets/images/team/hayden.webp',
    accentColor: 'border-green-500',
  },
  {
    name: 'Victor Garcia',
    role: 'Social Media Lead',
    image: 'assets/images/team/victor.webp',
    accentColor: 'border-blue-500',
  },
  {
    name: 'Isa Molinas',
    role: 'Web Lead',
    image: 'assets/images/team/isa.webp',
    accentColor: 'border-red-500',
  },
];
