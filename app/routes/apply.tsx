import type { MetaFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { TypeWriter } from '~/components/Typewriter';
import { SEO_DESCRIPTION } from '~/constants/seo';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Projects Page',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

export default function Apply() {
  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <img
          src="/assets/images/activity.webp"
          className="h-[350px] w-full object-cover object-center grayscale"
          alt="kickoff event"
        ></img>
        <section className="w-full px-5 pt-12 pb-8 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-2xl font-medium text-gray-400">
              At Google Student Developer Clubs UTSA,
            </h1>
            <h2 className="leading-right text-4xl font-bold">
              We develop{' '}
              <TypeWriter
                content={'leaders'}
                className="text-rainbow inline-block"
                speed={150}
              />
            </h2>
            <h3 className="py-3 text-xl font-bold">Applications are open!</h3>
            <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
              <div>
                <h3 className="text-rainbow font-bold">Our Mission</h3>
                <span className="font-bold">
                  We're built different, so we build different.
                </span>{' '}
                Our mission is to empower future developers by bringing students
                passionate about technology together and helping them grow their
                skills in tech, regardless of background.
              </div>
              <div>
                <h3 className="text-rainbow font-bold">Our Values</h3>
                We believe you don't need to code to be a developer. We develop
                both products and people by making Google technologies
                accessible to everyone through workshops, events, and more.{' '}
                <span className="font-bold">
                  Dreamers, problem solvers, and tinkerers: That's who we are.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 py-12 px-5 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-semibold ">Open Applications</h2>
            <div className="flex w-full flex-col items-center gap-4 px-6 py-6 sm:flex-row md:items-start md:px-0">
              <a href="https://forms.gle/q966WJLmmjsBcijL9">
                <div className="group flex min-h-[200px] w-80 flex-col rounded border-b-4 border-red-500 bg-white shadow-xl transition duration-300 hover:translate-y-0.5 hover:scale-105">
                  <div className="space-y-2 p-4">
                    <h1 className="text-2xl font-bold text-red-500">Officer</h1>

                    <p className="text-sm text-gray-500">
                      Do you want to lead a community? Join our officer team!
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://forms.gle/s7af1Le7KhKEMws56">
                <div className="group flex min-h-[200px] w-80 flex-col rounded border-b-4 border-blue-500 bg-white shadow-xl transition duration-300 hover:translate-y-0.5 hover:scale-105">
                  <div className="space-y-2 p-4">
                    <h1 className="text-2xl font-bold text-blue-500">
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
