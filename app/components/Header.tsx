import { Link, NavLink, useLocation } from '@remix-run/react';
import { useState } from 'react';
import HamburgerSVG from '~/assets/HamburgerSVG';
import { Navigation } from '~/constants/navigation';

const baseNavStyle = ' text-gray-600';

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-white shadow z-10 inset-x-0 h-16">
      <div
        className="fixed transition-all duration-300 ease-in-out md:hidden top-0 bottom-0 min-w-[300px] bg-white shadow"
        style={{
          left: isMenuShown ? '0' : '-100%',
        }}
      >
        <div className="flex flex-row w-full justify-end items-center py-8 px-5">
          <button
            onClick={() => {
              setIsMenuShown(false);
            }}
            className="absolute w-6 h-6 fill-gray-400"
          >
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="flex flex-col pb-5 border-b border-b-gray-200">
            {Navigation.map(({ name, to }) => (
              <li
                key={name}
                className="border-l-4 w-full block"
                style={{
                  borderLeftColor:
                    pathname === to || pathname === to + '/'
                      ? 'rgb(59 130 246)'
                      : 'transparent',
                }}
              >
                <NavLink
                  to={to}
                  className="text-gray-600 w-full h-full hover:text-gray-800 p-4 block"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            className="text-green-600 hover:text-green-500 pt-5 p-4 pl-5 block"
            to="/apply"
          >
            Apply!
          </Link>
        </nav>
      </div>
      <div className="container max-w-6xl mx-auto flex h-full flex-row items-center px-4 justify-between space-x-10 md:space-x-4">
        <button
          onClick={() => {
            setIsMenuShown(true);
          }}
          className="md:hidden w-6 h-6 fill-gray-400"
        >
          <HamburgerSVG className="h-full w-full" />
        </button>

        <Link className="object-contain w-full h-full pt-2" to="/">
          <img
            className="object-contain max-w-full max-h-full pt-2"
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
                      ? 'relative after:absolute after:w-full block after:h-full after:inset-x-0 after:top-1 after:border-b-2 text-gray-700 after:border-[#4285F4]' +
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
              className="px-3 py-1.5 text-green-600 border rounded border-green-600 hover:border-green-500 hover:text-green-500"
            >
              Apply
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
