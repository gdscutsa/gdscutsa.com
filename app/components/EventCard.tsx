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
      <div className="flex flex-col w-80 min-h-[500px] shadow-xl rounded-md group bg-white transition duration-300 hover:translate-y-0.5 hover:scale-105">
        <img
          className="w-full h-[250px] object-cover object-center rounded-t"
          src={img}
          alt={imgAlt}
        />
        <div className="p-3 space-y-2">
          <h1 className="text-blue-500 font-bold text-2xl">{name}</h1>
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
