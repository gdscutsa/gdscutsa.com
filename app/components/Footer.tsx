import { Link } from '@remix-run/react';
import { FooterNavigation, Navigation, Socials } from '~/constants/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container max-w-6xl mx-auto h-full py-12 space-y-10 px-8 md:px-4">
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-10 ">
          <div className="h-full">
            <img
              className="w-72 h-auto"
              src="assets/logos/borderless.svg"
            ></img>
          </div>
          <div className="h-full">
            <h1 className="text-base text-gray-500 pb-2">Quick Links</h1>
            <ul>
              {FooterNavigation.map(({ name, to }) => (
                <li className="text-center md:text-left" key={to}>
                  <Link
                    className="text-sm text-gray-600 hover:text-blue-500"
                    to={to}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full">
            <h1 className="text-base text-gray-500 text-center md:text-left pb-2">
              Socials
            </h1>
            <ul className="flex flex-row items-center space-x-4">
              {Socials.map(({ to, icon }) => (
                <li key={to}>
                  <a
                    className="fill-gray-500 hover:fill-blue-500"
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
        <div className="text-gray-500 text-xs text-center md:text-left ">
          © {new Date().getFullYear()} GDSC at UTSA
        </div>
      </div>
    </footer>
  );
}
