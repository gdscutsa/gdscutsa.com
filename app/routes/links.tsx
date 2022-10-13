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
      className="flex max-w-lg justify-center rounded-xl bg-blue-500 p-3 text-lg text-white drop-shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105"
      href={to}
    >
      {children}
    </a>
  );
}

export default function Links() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-3">
      <div className="container max-w-lg pt-10 md:pt-20">
        <img
          className="mb-6 object-cover p-4"
          src="assets/logos/borderless.svg"
          alt="GDSC UTSA"
        />

        <div className="space-y-4">
          {QuickNav.map((link) =>
            'header' in link ? (
              <h2
                key={link.name}
                className="pt-2 text-center text-xl font-semibold"
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
      <Link to="/" className="p-5 text-lg">
        @gdsc.utsa
      </Link>
    </main>
  );
}
