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
    accentColor: 'red',
  },
];

export const TeamMembers: TeamMember[] = [
  {
    name: 'Isa Molinas',
    role: 'Secretary',
    nickname: 'Swagmaster',
    image: 'assets/images/team/isa.webp',
    accentColor: 'green',
  },
  {
    name: 'Zack Umar',
    role: 'Technology Lead',
    image: 'assets/images/team/zack.webp',
    accentColor: 'blue',
  },
  {
    name: 'Zach True',
    role: 'Event Coordinator',
    nickname: 'the_milkman_42',
    image: 'assets/images/team/zach.webp',
    accentColor: 'green',
  },
  {
    name: 'Julio Valdes',
    role: 'Workshop Planner',
    nickname: 'Discord Hater',
    image: 'assets/images/team/julio.webp',
    accentColor: 'yellow',
  },
  {
    name: 'Hayden Hughes',
    role: 'Communications',
    nickname: 'Discord Mod',
    image: 'assets/images/team/hayden.webp',
    accentColor: 'green',
  },
  {
    name: 'Victor Garcia',
    role: 'Social Media Lead',
    nickname: '🎂',
    image: 'assets/images/team/victor.webp',
    accentColor: 'blue',
  },

  {
    name: 'Lena Haifa',
    role: 'Creative Lead',
    image: 'assets/images/team/lena.webp',
    accentColor: 'red',
  },
];
