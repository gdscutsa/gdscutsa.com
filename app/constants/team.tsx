export type TeamMember = {
  name: string;
  role: string;
  nickname?: string;
  image: string;
  accentColor?: string;
};

export const Leads: TeamMember[] = [
  {
    name: 'Hector Pineda',
    role: 'GDSC Lead',
    nickname: 'Super Senpai',
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
    nickname: 'Mr. Asbestos',
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
    nickname: 'Discord Mod',
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
    nickname: 'Swagmaster',
    image: 'assets/images/team/isa.webp',
    accentColor: 'border-red-500',
  },
];
