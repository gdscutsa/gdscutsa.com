import { Link } from '@remix-run/react';
import { KickoffQuickNav, QuickNav } from '~/constants/quicknav';

type QuickLinkProps = {
  to: string;
  children: React.ReactNode;
};

function QuickLink({ to, children }: QuickLinkProps) {
  return (
    <a
      className="drop-shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150 max-w-lg p-3 rounded-xl bg-blue-500 flex justify-center text-white text-lg"
      href={to}
    >
      {children}
    </a>
  );
}

export default function Links() {
  return (
    <main className="flex min-h-screen px-5 flex-col justify-start bg-no-repeat bg-contain md:bg-[length:638px_308px] h-auto bg-[right_bottom_3rem] items-center bg-[url('/assets/images/beanbag.webp')]">
      <div className="max-w-lg container pt-10 md:pt-20 space-y-6">
        <Link to={'/'}>
          <img
            className="object-cover"
            src="assets/logos/horizontal.svg"
            alt="GDSC UTSA"
          />
        </Link>

        <h1 className="text-5xl font-bold text-gray-700">Kickoff!</h1>
        <div>
          <h2 className="text-xl font-bold text-gray-700">
            Sept 28, 2022 | 1PM - SU 2.01.12 Willow
          </h2>
          <h3 className="text-lg text-gray-600">Student Union Second Floor</h3>
        </div>

        <p>
          Come join us for our first event of the UTSA GDSC chapter! Find out
          what we are and who we are at this joint GDSC x ACM event!
        </p>

        <div className="space-y-4">
          {KickoffQuickNav.map((link) =>
            'header' in link ? (
              <h2
                key={link.name}
                className="text-xl font-semibold pt-2 text-center"
              >
                {link.name}
              </h2>
            ) : (
              <QuickLink key={link.to} to={link.to}>
                {link.name}
              </QuickLink>
            )
          )}
        </div>
      </div>
      <div className="flex-grow p-5"></div>
      <Link to="/" className="text-lg p-5">
        @gdsc.utsa
      </Link>
    </main>
  );
}
