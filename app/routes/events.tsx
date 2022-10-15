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

export default function Events() {
  const { upcomingEvents, pastEvents } = useLoaderData<LoaderData>();

  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <section className="relative z-10 clear-both h-auto w-full p-5 py-8 before:absolute before:inset-0 before:-z-10 before:bg-[url('/assets/images/event.webp')] before:bg-cover before:bg-center before:grayscale before:content-[''] sm:py-24 md:px-8 ">
          <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center space-y-2 bg-black bg-opacity-80 p-5 md:p-14">
            <h1 className="text-gradient text-xl font-bold">Events</h1>
            <h2 className="max-w-3xl text-center text-2xl font-bold text-white">
              We're committed to inspiring developers and empowering students by
              bringing them together to learn, build, and grow.
            </h2>
          </div>
        </section>
        <section className="py-10 ">
          <div className="container mx-auto flex max-w-6xl flex-col items-center space-y-4">
            <div className="flex w-full flex-col items-center space-y-4 pb-10">
              <h2 className="p-5 pb-0 text-center text-4xl">Upcoming Events</h2>
              {upcomingEvents.length > 0 ? (
                <ul className="flex flex-col items-center space-y-5 p-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <li key={event.name}>
                      <EventCard {...event} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-5 text-center text-xl text-gray-600">
                  No upcoming events at the moment. Check back later!
                </p>
              )}
            </div>
            {pastEvents.length > 0 ? (
              <div className="flex w-full flex-col items-center space-y-4">
                <h2 className="p-5 pb-0 text-center text-4xl">Past Events</h2>

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
        </section>
        <Footer />
      </div>
    </main>
  );
}
