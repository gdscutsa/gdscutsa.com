import { Link, NavLink } from '@remix-run/react';
import { Navigation } from '~/constants/navigation';

const baseNavStyle = ' text-gray-600';

export default function Header() {
  return (
    <header className="shadow absolute inset-x-0 h-16">
      <div className="container max-w-6xl mx-auto flex h-full flex-row items-center px-4 justify-between space-x-4">
        <Link className="object-contain w-full h-full pt-2" to="/">
          <img
            className="object-contain max-w-full max-h-full pt-2"
            src="assets/logos/horizontal.svg"
          ></img>
        </Link>

        <nav className="hidden justify-center space-x-10 md:flex md:items-end">
          {Navigation.map(({ name, to }) => (
            <NavLink
              key={name}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'relative after:absolute after:w-full after:h-full after:inset-x-0 after:top-1 after:border-b-2 text-gray-700 after:border-[#4285F4]' +
                    baseNavStyle
                  : 'hover:text-gray-800' + baseNavStyle
              }
            >
              {name}
            </NavLink>
          ))}

          <div className="">
            <a
              href="https://gdsc.community.dev/the-university-of-texas-at-san-antonio/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-green-600 border rounded border-green-600 hover:border-green-500 hover:text-green-500"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
