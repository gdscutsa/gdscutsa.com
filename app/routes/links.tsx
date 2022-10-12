import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { QuickNav } from '~/constants/quicknav';
import { SEO_DESCRIPTION } from '~/constants/seo';

type QuickLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Quick Links',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

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
    <main className="flex min-h-screen px-3 flex-col justify-start items-center">
      <div className="max-w-lg container pt-10 md:pt-20">
        <img
          className="object-cover p-4 mb-6"
          src="assets/logos/borderless.svg"
          alt="GDSC UTSA"
        />

        <div className="space-y-4">
          {QuickNav.map((link) =>
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
