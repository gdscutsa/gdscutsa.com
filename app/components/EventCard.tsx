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
      <div className="group relative flex min-h-[450px] w-72 flex-col bg-white shadow-xl transition duration-300 before:absolute before:-right-1.5 before:top-[0.1875rem] before:h-full before:w-1.5 before:skew-y-[45deg] before:bg-gradient-to-b before:from-green-500 before:to-blue-500  before:content-[''] after:absolute after:left-[0.1875rem] after:-bottom-1.5 after:h-1.5 after:w-full after:skew-x-[45deg] after:bg-gradient-to-r after:from-yellow-500 after:to-red-400 after:content-[''] hover:translate-y-0.5 hover:scale-105">
        <img
          className="h-[200px] w-full object-cover object-center"
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
