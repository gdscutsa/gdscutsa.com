export type EventType = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  eventLink: string;
};

export const UpcomingEvents: EventType[] = [
  {
    title: 'Kickoff!',
    subtitle: 'Sept 28, 2022 - 1PM | SU 2.02.12',
    description:
      'Come join us for our first event of the chapter! Find out what we are and who we are at this joint GDSC x ACM event!',
    image: 'assets/images/projects_background.webp',
    eventLink: 'https://gdsc.community.dev/e/mcg6um/',
  },
];

export const PastEvents: EventType[] = [];
