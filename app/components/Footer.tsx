import { Link } from '@remix-run/react';
import { Navigation, Socials } from '~/constants/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container max-w-6xl mx-auto h-full py-10 space-y-10 px-8 md:px-4">
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-8 ">
          <div className="h-full">
            <img
              className="w-72 h-auto"
              src="assets/logos/borderless.svg"
            ></img>
          </div>
          <div>
            <h1 className="text-base text-gray-500 pb-2">Quick Links</h1>
            <ul>
              {Navigation.map(({ name, to }) => (
                <li className="text-center md:text-left" key={to}>
                  <Link className="text-sm text-gray-600 " to={to}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-base text-gray-500 pb-2 text-center md:text-left">
              Socials
            </h1>
            <ul className="flex flex-row items-center space-x-4">
              {Socials.map(({ to, icon }) => (
                <li key={to}>
                  <a
                    className="fill-gray-500"
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-gray-500 text-xs text-center md:text-left">
          © {new Date().getFullYear()} GDSC at UTSA
        </div>
      </div>
    </footer>
  );
}
