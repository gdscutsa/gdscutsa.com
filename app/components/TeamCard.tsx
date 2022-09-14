export type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  accentColor?: string;
};

export default function TeamCard({
  name,
  role,
  image,
  accentColor,
}: TeamCardProps) {
  return (
    <div
      className={`transition duration-300 hover:translate-y-0.5 hover:scale-105 w-72 h-96 flex flex-col items-center justify-center space-y-4 shadow-xl rounded bg-white border-b-4 ${
        accentColor ?? ' border-red-500'
      }`}
    >
      <img
        className={`h-52 w-52 rounded-full object-cover border-4 ${
          accentColor ?? ' border-red-500'
        }`}
        src={image}
      ></img>
      <h1 className="text-xl font-bold text-gray-700">{name}</h1>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
