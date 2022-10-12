import { Link } from '@remix-run/react';
import { FooterNavigation, Socials } from '~/constants/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-white">
      <div className="container max-w-6xl mx-auto h-full py-12 space-y-10 px-8 md:px-4">
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-10 ">
          <div className="h-full">
            <Link to="/">
              <img
                className="w-72 h-auto"
                src="assets/logos/borderless.svg"
                alt="GDSC Logo"
              />
            </Link>
          </div>
          <div className="h-full">
            <h1 className="text-base text-gray-500 pb-2">Quick Links</h1>
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
            <h1 className="text-base text-gray-500 text-center md:text-left pb-2">
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
        <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row justify-between text-gray-500 text-xs text-center md:text-left ">
          <p>© {new Date().getFullYear()} GDSC at UTSA</p>
          <p>Made with ❤️ by the GDSC Team</p>
        </div>
      </div>
    </footer>
  );
}
