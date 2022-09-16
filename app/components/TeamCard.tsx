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
      className={`group w-72 h-96 flex flex-col items-center justify-center space-y-4 shadow-xl rounded bg-white border-b-4 ${
        accentColor ?? ' border-red-500'
      }`}
    >
      <img
        className={`h-52 w-52 rounded-full object-cover border-4 ${
          accentColor ?? ' border-red-500'
        }`}
        src={image}
        alt={name}
      />
      <h1 className="text-xl font-bold text-gray-700">{name}</h1>
      <p className="text-gray-600 relative w-full block">
        {nickname ? (
          <>
            <span className="block transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:delay-[3s] duration-1000 overflow-hidden opacity-100 group-hover:opacity-0">
              {role}
            </span>
            <span className="block transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:delay-[3s] duration-1000 overflow-hidden opacity-0 group-hover:opacity-100">
              "{nickname}"
            </span>
          </>
        ) : (
          <span className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
