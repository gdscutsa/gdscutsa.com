import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import {
  Link,
  useCatch,
  useLoaderData,
  useLocation,
  useParams,
} from '@remix-run/react';
import QRCode from 'react-qr-code';
import { DISCORD_LINK } from '~/constants/links';
import type { NavItemProps } from '~/constants/quicknav';
import { SEO_DESCRIPTION } from '~/constants/seo';
import type { EventType } from '~/models/contentful.server';
import { client } from '~/models/contentful.server';

type QuickLinkProps = {
  to: string;
  children: React.ReactNode;
};

type LoaderData = {
  event: EventType;
};

export const meta: MetaFunction = ({ data }) => {
  const title = data && data.event ? data.event.name : 'Error';

  return {
    charset: 'utf-8',
    title: `GDSC | UTSA - ${title}`,
    viewport: 'width=device-width,initial-scale=1',
    description: SEO_DESCRIPTION,
  };
};

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();

  if (caught.status === 404)
    return (
      <div className="flex h-screen flex-col items-center justify-center space-y-8">
        <Link to="/">
          <img
            src="/assets/logos/borderless.svg"
            height={100}
            className="h-[100px]"
            alt="GDSC UTSA"
          />
        </Link>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-gray-800">
            <span className="font-bold">404</span> Well... That sucked.
          </h1>
          <p className="text-xl text-gray-500">
            URL /{params['*']} was not found
          </p>
        </div>
        <Link
          to="/"
          className="btn py-2 px-3 transition duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-105"
        >
          Home
        </Link>
      </div>
    );

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl text-gray-800">Uh oh. We made a cringe</h1>
      <p className="text-lg text-gray-500">Please try again later</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
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

  const { pathname } = useLocation();

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

  // md:bg-[length:490px_708px]

  return (
    <main className="relative flex h-auto min-h-screen flex-col items-center justify-start md:bg-[url('/assets/images/computer_lad.webp')] md:bg-[length:15%] md:bg-[bottom_1rem_right_1rem] md:bg-no-repeat">
      <img
        src="assets/images/pointing_guy.webp"
        alt="guy pointing"
        className="absolute -left-10 hidden h-52 rotate-[60deg] md:bottom-52 md:block lg:bottom-60"
      ></img>
      <div className="absolute bottom-10 left-10 hidden space-y-1 md:block">
        {/* <h3 className="text-lg font-medium text-gray-700">Share this page!</h3> */}
        <QRCode
          value={`https://gdscutsa.com${pathname}`}
          className="h-40 w-40 lg:h-48 lg:w-48"
        />
      </div>

      <div className="px-5">
        <div className="container relative max-w-lg space-y-6 pt-10 md:pt-20">
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

      <div className="mt-5 h-full w-full flex-grow bg-[url('/assets/images/jump_girl.webp')] bg-[length:50%]  bg-clip-content bg-[top_center] bg-no-repeat sm:mt-10 md:hidden"></div>
    </main>
  );
}
