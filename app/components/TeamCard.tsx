export type TeamCardProps = {
  name: string;
  role: string;
  nickname?: string;
  image: string;
  accentColor?: string;
};

const getBorderColor = (accentColor: string | undefined) => {
  switch (accentColor) {
    case 'red':
      return 'before:bg-red-500 after:bg-red-500';
    case 'blue':
      return 'before:bg-blue-500 after:bg-blue-500';
    case 'green':
      return 'before:bg-green-500 after:bg-green-500';
    case 'yellow':
      return 'before:bg-yellow-500 after:bg-yellow-500';
    default:
      return 'before:bg-red-500 after:bg-red-500';
  }
};

const getImageColor = (accentColor: string | undefined) => {
  switch (accentColor) {
    case 'red':
      return 'border-red-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    case 'yellow':
      return 'border-yellow-500';
    default:
      return 'border-red-500';
  }
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
      className={`group relative flex h-96 w-72 flex-col items-center justify-center space-y-4 bg-white shadow-xl before:absolute before:-right-1.5 before:top-[0.1875rem] before:h-full before:w-1.5 before:skew-y-[45deg] before:content-[''] after:absolute after:left-[0.1875rem] after:-bottom-1.5 after:h-1.5 after:w-full after:skew-x-[45deg] after:content-[''] ${getBorderColor(
        accentColor
      )}`}
    >
      <img
        className={`h-52 w-52 rounded-full border-4 object-cover ${getImageColor(
          accentColor
        )}`}
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
            <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 transform overflow-hidden text-clip opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:delay-[3s]">
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
