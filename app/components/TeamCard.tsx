export type TeamCardProps = {
  name: string;
  role: string;
  nickname?: string;
  image: string;
  color?: string;
};

export default function TeamCard({
  name,
  role,
  nickname,
  image,
  color = 'red',
}: TeamCardProps) {
  console.log(name, `bg-${color}-500`);

  return (
    <div
      className={`group relative flex h-96 w-72 flex-col items-center justify-center space-y-4 bg-white shadow-xl before:absolute before:-right-1.5 before:top-[0.1875rem] before:h-full before:w-1.5 before:skew-y-[45deg] before:bg-${color}-500 before:content-[''] after:absolute after:left-[0.1875rem] after:-bottom-1.5 after:h-1.5 after:w-full after:skew-x-[45deg] after:bg-${color}-500 after:content-['']`}
    >
      <img
        className={`h-52 w-52 rounded-full border-4 object-cover border-${color}-500`}
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
    </div>
  );
}
