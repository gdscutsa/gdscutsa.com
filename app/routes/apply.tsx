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

function ApplicationCard({
  title,
  description,
  link,
  color,
}: {
  title: string;
  description: string;
  link: string;
  color: string;
}) {
  return (
    <a href={link}>
      <div
        className={`group relative flex min-h-[200px] w-80 flex-col bg-white shadow-xl transition duration-300 before:absolute before:-right-1.5 before:top-[0.1875rem] before:h-full before:w-1.5 before:skew-y-[45deg] before:bg-${color}-500 before:content-[''] after:absolute after:left-[0.1875rem] after:-bottom-1.5 after:h-1.5 after:w-full after:skew-x-[45deg] after:bg-${color}-500 after:content-[''] hover:translate-y-0.5 hover:scale-105`}
      >
        <div className="space-y-2 p-4">
          <h1 className={`text-2xl font-bold text-${color}-500`}>{title}</h1>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </a>
  );
}

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
        <section className="relative w-full px-5 pt-12 pb-8 after:absolute after:left-0 after:bottom-0 after:h-1.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-red-500 md:px-8">
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

        <section className="w-full bg-slate-100 py-12 px-5 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-semibold ">Open Applications</h2>
            <div className="flex w-full flex-col items-center gap-4 px-6 py-6 sm:flex-row md:items-start md:px-0">
              <ApplicationCard
                title="Officer"
                description="Do you want to lead a community? Join our officer team!"
                link="https://forms.gle/q966WJLmmjsBcijL9"
                color="red"
              />
              <ApplicationCard
                title="Subcommittee"
                description="Do you want to be apart of a team and help run workshops?
                Join a subcommittee and help us grow our community!"
                link="https://forms.gle/s7af1Le7KhKEMws56"
                color="blue"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
