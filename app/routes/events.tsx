import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { EventCard } from '~/components/EventCard';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { SEO_DESCRIPTION } from '~/constants/seo';
import { getContext, setContext } from '~/context.server';
import { client } from '~/models/contentful.server';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Events Page',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

type LoaderData = {
  upcomingEvents: Awaited<ReturnType<typeof client.getUpcomingEvents>>;
  pastEvents: Awaited<ReturnType<typeof client.getPastEvents>>;
};

export const loader: LoaderFunction = async ({ context }) => {
  setContext(context);

  const upcoming = await client.getUpcomingEvents();
  const past = await client.getPastEvents();

  return json<LoaderData>({
    upcomingEvents: upcoming,
    pastEvents: past,
  });
};

// export function ErrorBoundary() {
//   return (
//     <div className="flex h-screen flex-col items-center justify-center">
//       <h1 className="text-4xl text-gray-700">Something went wrong!</h1>
//       <p className="text-gray-600">Please try again later.</p>
//     </div>
//   );
// }

export default function Events() {
  const { upcomingEvents, pastEvents } = useLoaderData<LoaderData>();

  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <div className="min-h-[350px] w-full bg-[url('/assets/images/events_background.webp')] bg-cover bg-left bg-no-repeat py-20 px-5 md:px-8">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-8 p-5 md:pl-10">
            <h1 className="text-bold text-center text-5xl text-gray-700">
              Events
            </h1>
            <h2 className="max-w-md text-center text-lg text-gray-600">
              GDSC at UTSA is commited to inspiring developers and empowering
              students by bringing them together to learn, build, and grow.
            </h2>
          </div>
        </div>
        <div className="border-t border-gray-300 bg-white py-10">
          <div className="container mx-auto flex max-w-6xl flex-col items-center space-y-4">
            <div
              className="flex w-full flex-col items-center space-y-4 border-gray-100 pb-10"
              style={{
                borderBottomWidth: pastEvents.length > 0 ? '2px' : '0px',
              }}
            >
              <h2 className="w-full p-5 text-center text-4xl text-gray-700 md:text-left ">
                Upcoming Events
              </h2>
              {upcomingEvents.length > 0 ? (
                <ul className="flex flex-col items-center space-y-5 p-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <li key={event.name}>
                      <EventCard {...event} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="w-full px-12 text-center text-2xl text-gray-500 md:text-left">
                  No upcoming events at the moment. Check back later!
                </p>
              )}
            </div>
            {pastEvents.length > 0 ? (
              <div className="flex w-full flex-col items-center space-y-4">
                <h2 className="w-full p-5 text-center text-4xl text-gray-700 md:text-left">
                  Past Events
                </h2>

                <ul className="flex flex-col items-center space-y-5 p-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <li key={event.name}>
                      <EventCard {...event} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
