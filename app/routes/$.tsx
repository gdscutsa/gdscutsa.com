import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { DISCORD_LINK } from '~/constants/links';
import type { NavItemProps } from '~/constants/quicknav';
import { SEO_DESCRIPTION } from '~/constants/seo';
import type { EventType } from '~/models/contentful.server';
import { client } from '~/models/contentful.server';

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

type LoaderData = {
  event: EventType;
};

export const loader: LoaderFunction = async ({ params, context }) => {
  if (!params['*'] || params['*'] === '') {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const event = await client.getEventBySlug(params['*']);

  if (event.length === 0) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return json<LoaderData>({ event: event[0] });
};

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
  const {
    event: { name, location, date, desc, eventLink },
  } = useLoaderData<LoaderData>();

  const dateObj = new Date(date);

  const Links: NavItemProps[] = [
    {
      to: eventLink,
      name: 'RSVP',
    },
    {
      to: DISCORD_LINK,
      name: 'Discord',
    },
    {
      to: '/',
      name: 'Our Website',
    },
  ];

  return (
    <main className="flex h-auto min-h-screen flex-col items-center justify-start md:bg-[url('/assets/images/beanbag.webp')] md:bg-[length:638px_308px] md:bg-right-bottom md:bg-no-repeat">
      <div className="px-5">
        <div className="container max-w-lg space-y-6 pt-10 md:pt-20">
          <Link to={'/'}>
            <img
              className="object-cover"
              src="assets/logos/horizontal.svg"
              alt="GDSC UTSA"
            />
          </Link>

          <h1 className="text-5xl font-bold text-gray-700">{name}</h1>
          <div>
            <h2 className="text-xl font-bold text-gray-700">
              {/* Sept 28, 2022 | 1PM - SU 2.02.12 Willow */}
              {`${dateObj.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })} - ${dateObj.toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: 'numeric',
              })} | ${location}`}
            </h2>
            <h3 className="text-lg text-gray-600">
              {/* Student Union Second Floor */}
            </h3>
          </div>

          <p>{desc}</p>

          <div className="space-y-4">
            {Links.map((link) =>
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
      </div>

      <div className="mt-5 h-full w-full flex-grow bg-[url('/assets/images/beanbag.webp')] bg-cover bg-clip-content bg-right-top bg-no-repeat md:hidden md:bg-[length:638px_308px]"></div>
    </main>
  );
}
