import { json, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { TypeWriter } from '~/components/Typewriter';
import { DISCORD_LINK, GDSC_INFO_LINK } from '~/constants/links';
import { SEO_DESCRIPTION } from '~/constants/seo';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Home Page',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

export default function Index() {
  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <section className="w-full py-20 px-5 md:px-8">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-10 md:grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center md:items-start md:space-y-0 md:text-left">
              <h1 className="text-4xl text-gray-700">
                Google Developer Student Clubs{' '}
                <span className="font-bold">UTSA</span>
              </h1>
              <p className="text-gray-600">
                Google Developer Student Clubs (GDSC) are community groups for
                college and university students interested in Google developer
                technologies. Students from all undergraduate or graduate
                programs with an interest in growing as a developer are welcome.
                By joining a GDSC, students grow their knowledge in a
                peer-to-peer learning environment and build solutions for local
                businesses and their community.
              </p>
              <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                <a
                  href={GDSC_INFO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded bg-blue-500 px-4 py-2 text-center text-white shadow hover:bg-blue-600"
                >
                  Learn More
                </a>
                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-blue-500 px-4 py-2 text-center text-blue-500 shadow hover:border-blue-600"
                >
                  Keep up on Discord!
                </a>
              </div>
            </div>
            <div className="-order-1 flex flex-col items-center justify-center py-10 md:order-1">
              <img src="assets/images/banner.jpg" alt="People collaborating" />
            </div>
          </div>
        </section>
        <section className="w-full bg-slate-50 py-20 px-5 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-2xl font-medium text-gray-500">
              At Google Student Developer Clubs UTSA,
            </h1>
            <h2 className="leading-right text-4xl font-bold">
              We develop{' '}
              <TypeWriter
                content={'communities'}
                className="text-rainbow inline-block"
                speed={150}
              />
            </h2>
            <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
              <div>
                <h3 className="text-rainbow font-bold">Our Mission</h3>
                <span className="font-bold">
                  We're built different, so we build different.
                </span>{' '}
                Our mission is to bring together students who are passionate
                about technology and help them grow their skills and knowledge.
              </div>
              {/* <div>
                <img
                  src="assets/images/event.jpg"
                  className="grayscale w-full max-h-[250px] object-cover"
                  alt="kickoff event"
                />
              </div> */}
              {/* <div>
                <img
                  src="assets/images/banner.jpg"
                  className="grayscale-0 w-auto max-h-[250px] object-fit object-center"
                  alt="kickoff event"
                />
              </div> */}
              <div>
                <h3 className="text-rainbow font-bold">Our Values</h3>
                We believe you don't need to code to be a developer. We develop
                both products and people by making Google technologies
                accessible to everyone through workshops, events, and more.{' '}
                <span className="font-bold">
                  Dreamers, problem solvers, and tinkerers: That's who we are.
                </span>
              </div>
              <div>
                <h3 className="text-rainbow font-bold">Events</h3>
                <p>
                  We want to be a part of your journey through tech! From
                  workshops to competitions. Networking events to socials. We
                  have something for everyone!
                </p>
                <Link to="/events" className="btn mt-5 inline-block py-2 px-3">
                  See Events
                </Link>
              </div>
              <div>
                <img
                  src="assets/images/event.jpg"
                  className="max-h-[250px] w-full object-cover grayscale"
                  alt="kickoff event"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
