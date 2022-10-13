export type TeamCardProps = {
  name: string;
  role: string;
  nickname?: string;
  image: string;
  accentColor?: string;
};

export default function TeamCard({
  name,
  role,
  nickname,
  image,
  accentColor,
}: TeamCardProps) {
  return (
    <div
      className={`group flex h-96 w-72 flex-col items-center justify-center space-y-4 rounded border-b-4 bg-white shadow-xl ${
        accentColor ?? ' border-red-500'
      }`}
    >
      <img
        className={`h-52 w-52 rounded-full border-4 object-cover ${
          accentColor ?? ' border-red-500'
        }`}
        src={image}
        alt={name}
      />
      <h1 className="text-xl font-bold text-gray-700">{name}</h1>
      <p className="relative block w-full text-gray-600">
        {nickname ? (
          <>
            <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 transform overflow-hidden opacity-100 transition-all duration-1000 group-hover:opacity-0 group-hover:delay-[3s]">
              {role}
            </span>
            <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 transform overflow-hidden opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:delay-[3s]">
              "{nickname}"
            </span>
          </>
        ) : (
          <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 transform">
            {role}
          </span>
        )}
      </p>
      {/* <p className="transition-opacity ease-out opacity-0 duration-500 group-hover:delay-[5s] group-hover:opacity-100">
        {nickname ?? ''}
      </p> */}
    </div>
  );
}
