import { Link } from '@remix-run/react';
import { FooterNavigation, Socials } from '~/constants/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-white">
      <div className="container mx-auto h-full max-w-6xl space-y-10 py-12 px-8 md:px-4">
        <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-3 ">
          <div className="h-full">
            <Link to="/">
              <img
                className="h-auto w-72"
                src="assets/logos/borderless.svg"
                alt="GDSC Logo"
              />
            </Link>
          </div>
          <div className="h-full">
            <h1 className="pb-2 text-base text-gray-500">Quick Links</h1>
            <ul>
              {FooterNavigation.map(({ name, to }) => (
                <li className="text-center md:text-left" key={to}>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-500"
                    href={to}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full">
            <h1 className="pb-2 text-center text-base text-gray-500 md:text-left">
              Socials
            </h1>
            <ul className="flex flex-row items-center space-x-4">
              {Socials.map(({ name, to, icon }) => (
                <li key={name}>
                  <a
                    className="fill-gray-500 hover:fill-blue-500"
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{name}</span>
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-1 text-center text-xs text-gray-500 sm:flex-row sm:space-y-0 md:text-left ">
          <p>© {new Date().getFullYear()} GDSC at UTSA</p>
          <p>Made with ❤️ by the GDSC Team</p>
        </div>
      </div>
    </footer>
  );
}
