import { Link } from '@remix-run/react';
import { Navigation } from '~/constants/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container max-w-6xl mx-auto h-full py-10 space-y-10 px-4">
        <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
          <div className="w-full h-full">
            <img
              className="w-72 h-auto"
              src="assets/logos/borderless.svg"
            ></img>
          </div>
          <div className="w-full h-full">
            <h1 className="text-base text-gray-500 pb-2">Quick Links</h1>
            <ul>
              {Navigation.map(({ name, to }) => (
                <li>
                  <Link className="text-sm text-gray-600" to={to}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full">
            <h1 className="text-base text-gray-500 pb-2">Socials</h1>
            <Link className="text-sm text-gray-800" to="link">
              Social?
            </Link>
          </div>
        </div>
        <div className="text-gray-500 text-small">© 2022 GDSC at UTSA</div>
      </div>
    </footer>
  );
}
