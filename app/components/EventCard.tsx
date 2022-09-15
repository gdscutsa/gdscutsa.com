import { EventType } from '~/constants/events';

export function EventCard({
  title: name,
  subtitle,
  description,
  image,
  eventLink,
}: EventType) {
  return (
    <a href={eventLink}>
      <div className="flex flex-col w-80 min-h-[500px] shadow-xl rounded-md group bg-white transition duration-300 hover:translate-y-0.5 hover:scale-105">
        <img
          className="w-full h-[250px] object-cover object-top rounded-t"
          src={image}
          alt={name}
        />
        <div className="p-3 space-y-2">
          <h1 className="text-blue-500 font-bold text-xl">{name}</h1>
          <h2 className="text-sm font-semibold text-gray-600">{subtitle}</h2>
          <p className="text-sm">{description}</p>
        </div>
        {/* <div className="flex flex-row flex-grow items-end justify-end px-3 pb-3">
        <ExternalSVG className="w-6 h-6 fill-gray-400 transition duration-300 group:hover:translate-y-0.5 group:hover:scale-105" />
      </div> */}
      </div>
    </a>
  );
}
