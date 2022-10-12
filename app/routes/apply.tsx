import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { TypeWriter } from '~/components/Typewriter';
import { SEO_DESCRIPTION } from '~/constants/seo';

import rainbowStylesheetUrl from '~/styles/rainbow.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Projects Page',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: rainbowStylesheetUrl }];
};

export default function Apply() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <img
          src="/assets/images/activity.webp"
          className="h-[350px] w-full grayscale object-cover object-center"
          alt="kickoff event"
        ></img>
        <section className="w-full pt-12 pb-8 px-5 md:px-8">
          <div className="mx-auto container max-w-6xl">
            <h1 className="text-2xl font-medium text-gray-400">
              At Google Student Developer Clubs UTSA,
            </h1>
            <h2 className="text-4xl font-bold leading-right">
              We develop{' '}
              <TypeWriter
                content={'communities'}
                className="text-rainbow inline-block"
                speed={150}
              />
            </h2>
            <h3 className="py-3 text-xl font-bold">Applications are open!</h3>
            <div className="py-8 grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3 className="font-bold text-rainbow">Our Mission</h3>
                <span className="font-bold">
                  We're built different, so we build different.
                </span>{' '}
                Our mission is to bring together students who are passionate
                about technology and help them grow their skills and knowledge.
              </div>
              <div>
                <h3 className="font-bold text-rainbow">Our Values</h3>
                We believe you don't need to code to be a developer. We develop
                both products and people by making Google technologies
                accessible to everyone though workshops, events, and more.{' '}
                <span className="font-bold">
                  Dreamers, problem solvers, and tinkerers: That's who we are.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 px-5 md:px-8 bg-slate-50">
          <div className="mx-auto container max-w-6xl">
            <h2 className="text-xl font-semibold ">Open Applications</h2>
            <div className="px-6 md:px-0 py-6 flex flex-col w-full items-center md:items-start sm:flex-row gap-4">
              <a href="https://forms.gle/q966WJLmmjsBcijL9">
                <div className="flex flex-col w-80 min-h-[200px] shadow-xl rounded group bg-white border-b-4 border-red-500 transition duration-300 hover:translate-y-0.5 hover:scale-105">
                  <div className="p-4 space-y-2">
                    <h1 className="text-red-500 font-bold text-2xl">Officer</h1>

                    <p className="text-sm text-gray-500">
                      Do you want to lead a community? Join our officer team!
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://forms.gle/s7af1Le7KhKEMws56">
                <div className="flex flex-col w-80 min-h-[200px] shadow-xl rounded group bg-white border-b-4 border-blue-500 transition duration-300 hover:translate-y-0.5 hover:scale-105">
                  <div className="p-4 space-y-2">
                    <h1 className="text-blue-500 font-bold text-2xl">
                      Subcommittee
                    </h1>

                    <p className="text-sm text-gray-500">
                      Do you want to be apart of a team and help run workshops?
                      Join a subcommittee and help us grow our community!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
