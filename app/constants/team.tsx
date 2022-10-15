export type TeamMember = {
  name: string;
  role: string;
  nickname?: string;
  image: string;
  color?: string;
};

export const Leads: TeamMember[] = [
  {
    name: 'Hector Pineda',
    role: 'GDSC Lead',
    nickname: 'Super Senpai',
    image: 'assets/images/team/hector.webp',
    color: 'red',
  },
];

export const TeamMembers: TeamMember[] = [
  {
    name: 'Zack Umar',
    role: 'Technology Lead',
    image: 'assets/images/team/zack.webp',
    color: 'blue',
  },
  {
    name: 'Zach True',
    role: 'Event Coordinator',
    nickname: 'the_milkman_42',
    image: 'assets/images/team/zach.webp',
    color: 'green',
  },
  {
    name: 'Julio Valdes',
    role: 'Workshop Planner',
    nickname: 'Discord Hater',
    image: 'assets/images/team/julio.webp',
    color: 'yellow',
  },
  {
    name: 'Hayden Hughes',
    role: 'Communications',
    nickname: 'Discord Mod',
    image: 'assets/images/team/hayden.webp',
    color: 'green',
  },
  {
    name: 'Victor Garcia',
    role: 'Social Media Lead',
    nickname: '🎂',
    image: 'assets/images/team/victor.webp',
    color: 'blue',
  },
  {
    name: 'Isa Molinas',
    role: 'Web Lead',
    nickname: 'Swagmaster',
    image: 'assets/images/team/isa.webp',
    color: 'red',
  },
  {
    name: 'Lena Haifa',
    role: 'Creative Lead',
    image: 'assets/images/team/lena.webp',
    color: 'yellow',
  },
];
