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
    role: 'Event Coordinator',
    image: 'assets/images/team/zach.png',
    accentColor: 'border-green-500',
  },
  {
    name: 'Julio Valdes',
    role: 'Workshop Planner',
    image: 'assets/images/team/julio.jpg',
    accentColor: 'border-yellow-400',
  },
  {
    name: 'Hayden Hughes',
    role: 'Communications',
    image: 'assets/images/team/hayden.png',
    accentColor: 'border-green-500',
  },
  {
    name: 'Victor Garcia',
    role: 'Social Media Lead',
    image: 'assets/images/team/victor.jpg',
    accentColor: 'border-blue-500',
  },
  {
    name: 'Isa Molinas',
    role: 'Web Lead',
    image: 'assets/images/team/isa.png',
    accentColor: 'border-red-500',
  },
];
