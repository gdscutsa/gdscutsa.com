import { Link, NavLink, useLocation } from '@remix-run/react';
import { useState } from 'react';
import HamburgerSVG from '~/assets/HamburgerSVG';
import { Navigation } from '~/constants/navigation';

const baseNavStyle = ' text-gray-600';

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="inset-x-0 z-10 h-16 bg-white shadow">
      <div
        className="fixed top-0 bottom-0 min-w-[300px] bg-white shadow transition-all duration-300 ease-in-out md:hidden"
        style={{
          left: isMenuShown ? '0' : '-100%',
        }}
      >
        <div className="flex w-full flex-row items-center justify-end py-8 px-5">
          <button
            onClick={() => {
              setIsMenuShown(false);
            }}
            className="absolute h-6 w-6 fill-gray-400"
          >
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="flex flex-col border-b border-b-gray-200 pb-5">
            {Navigation.map(({ name, to }) => (
              <li
                key={name}
                className="block w-full border-l-4"
                style={{
                  borderLeftColor:
                    pathname === to || pathname === to + '/'
                      ? 'rgb(59 130 246)'
                      : 'transparent',
                }}
              >
                <NavLink
                  to={to}
                  className="block h-full w-full p-4 text-gray-600 hover:text-gray-800"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            className="block p-4 pt-5 pl-5 text-green-600 hover:text-green-500"
            to="/apply"
          >
            Apply!
          </Link>
        </nav>
      </div>
      <div className="container mx-auto flex h-full max-w-6xl flex-row items-center justify-between space-x-10 px-4 md:space-x-4">
        <button
          onClick={() => {
            setIsMenuShown(true);
          }}
          className="h-6 w-6 fill-gray-400 md:hidden"
        >
          <HamburgerSVG className="h-full w-full" />
        </button>

        <Link className="h-full w-full object-contain pt-2" to="/">
          <img
            className="max-h-full max-w-full object-contain pt-2"
            src="assets/logos/horizontal.svg"
            alt="GDSC Logo"
          />
        </Link>

        <nav className="hidden justify-center space-x-10 md:flex md:items-end">
          <ul className="flex flex-row items-center justify-center space-x-10">
            {Navigation.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? 'relative block text-gray-700 after:absolute after:inset-x-0 after:top-1 after:h-full after:w-full after:border-b-2 after:border-[#4285F4]' +
                        baseNavStyle
                      : 'hover:text-gray-800' + baseNavStyle
                  }
                  end
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div>
            <Link
              to="/apply"
              className="rounded border border-green-600 px-3 py-1.5 text-green-600 hover:border-green-500 hover:text-green-500"
            >
              Apply
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
