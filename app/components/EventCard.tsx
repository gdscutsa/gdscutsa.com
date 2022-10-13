import type { EventType } from '~/constants/events';

export function EventCard({
  name,
  location,
  date,
  desc,
  img,
  imgAlt,
  eventLink,
}: EventType) {
  const dateObj = new Date(date);

  return (
    <a href={eventLink}>
      <div className="group flex min-h-[500px] w-80 flex-col rounded-md bg-white shadow-xl transition duration-300 hover:translate-y-0.5 hover:scale-105">
        <img
          className="h-[250px] w-full rounded-t object-cover object-center"
          src={img}
          alt={imgAlt}
        />
        <div className="space-y-2 p-3">
          <h1 className="text-2xl font-bold text-blue-500">{name}</h1>
          <h2 className="text-base font-semibold text-gray-600">{`${dateObj.toLocaleDateString(
            'en-us',
            {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }
          )} - ${dateObj.toLocaleTimeString('en-us', {
            hour: 'numeric',
            minute: 'numeric',
          })} | ${location}`}</h2>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </a>
  );
}
