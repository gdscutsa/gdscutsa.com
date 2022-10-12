import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { DISCORD_LINK } from '~/constants/links';
import type { NavItemProps} from '~/constants/quicknav';
import { KickoffQuickNav, QuickNav } from '~/constants/quicknav';
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
      className="drop-shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150 max-w-lg p-3 rounded-xl bg-blue-500 flex justify-center text-white text-lg"
      href={to}
    >
      {children}
    </a>
  );
}

export default function Links() {
  const {
    event: { name, location, date, endDate, desc, eventLink },
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
