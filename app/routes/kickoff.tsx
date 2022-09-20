import { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { KickoffQuickNav, QuickNav } from '~/constants/quicknav';
import { SEO_DESCRIPTION } from '~/constants/seo';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Kickoff!',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

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
    <main className="flex min-h-screen flex-col justify-start h-auto items-center md:bg-no-repeat md:bg-[length:638px_308px] md:bg-right-bottom md:bg-[url('/assets/images/beanbag.webp')]">
      <div className="px-5">
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
              Sept 28, 2022 | 1PM - SU 2.02.12 Willow
            </h2>
            <h3 className="text-lg text-gray-600">
              Student Union Second Floor
            </h3>
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
      </div>

      <div className="md:hidden mt-5 flex-grow w-full h-full bg-no-repeat bg-cover bg-clip-content md:bg-[length:638px_308px] bg-right-top bg-[url('/assets/images/beanbag.webp')]"></div>
    </main>
  );
}
