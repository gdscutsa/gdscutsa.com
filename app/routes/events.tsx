import { json, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { EventCard } from '~/components/EventCard';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { SEO_DESCRIPTION } from '~/constants/seo';
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
  //Hacky way to get the space and token from the context
  const upcoming = await client.getUpcomingEvents(
    process?.env.CONTENTFUL_SPACE_ID ?? (context.CONTENTFUL_SPACE_ID as string),
    process?.env.CONTENTFUL_ACCESS_ID ??
      (context.CONTENTFUL_ACCESS_TOKEN as string)
  );
  const past = await client.getPastEvents(
    context.CONTENTFUL_SPACE_ID as string,
    context.CONTENTFUL_ACCESS_TOKEN as string
  );

  console.log(context);

  return json<LoaderData>({
    upcomingEvents: upcoming,
    pastEvents: past,
  });
};

export default function Events() {
  const { upcomingEvents, pastEvents } = useLoaderData<LoaderData>();

  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <div className="w-full min-h-[350px] bg-no-repeat bg-left bg-cover bg-[url('/assets/images/events_background.webp')] py-20 px-5 md:px-8">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-6xl h-full space-y-8 md:pl-10 p-5">
            <h1 className="text-bold text-5xl text-gray-700 text-center">
              Events
            </h1>
            <h2 className="text-lg text-gray-600 text-center max-w-md">
              GDSC at UTSA is commited to inspiring developers and empowering
              students by bringing them together to learn, build, and grow.
            </h2>
          </div>
        </div>
        <div className="border-t border-gray-300 bg-white py-10">
          <div className="container mx-auto max-w-6xl flex flex-col items-center space-y-4">
            <div
              className="w-full flex flex-col items-center space-y-4 border-gray-100 pb-10"
              style={{
                borderBottomWidth: upcomingEvents.length > 0 ? '2px' : '0px',
              }}
            >
              <h2 className="text-4xl p-5 w-full text-center md:text-left text-gray-700 ">
                Upcoming Events
              </h2>

              <ul className="flex flex-col items-center space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12">
                {upcomingEvents.map((event) => (
                  <li key={event.name}>
                    <EventCard {...event} />
                  </li>
                ))}
              </ul>
            </div>
            {pastEvents.length > 0 ? (
              <div className="w-full flex flex-col items-center space-y-4">
                <h2 className="text-4xl p-5 w-full text-center md:text-left text-gray-700">
                  Past Events
                </h2>

                <ul className="flex flex-col items-center space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12">
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
