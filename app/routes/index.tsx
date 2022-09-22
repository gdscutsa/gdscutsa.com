import { MetaFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
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
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <section className="w-full bg-center bg-no-repeat bg-cover bg-[url('/assets/images/home_background.webp')] py-20 px-5 md:px-8">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-6xl h-full md:grid md:gap-8 md:grid-cols-2 space-y-10">
            <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:text-left text-center">
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
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <a
                  href={GDSC_INFO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center shadow px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Learn More
                </a>
                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center shadow px-4 py-2 border border-blue-500 hover:border-blue-600 text-blue-500 rounded"
                >
                  Keep up on Discord!
                </a>
              </div>
            </div>
            <div className="-order-1 md:order-1 py-10 flex flex-col justify-center items-center">
              <img src="assets/svgs/collab.svg" alt="People collaborating" />
            </div>
          </div>
        </section>
        {/* <div className="flex flex-col items-center justify-center md:items-start container mx-auto max-w-6xl h-full py-20">
          <h2 className="text-5xl text-green-600 font-bold">Kickoff!</h2>
        </div> */}
        <section className="w-full py-20 px-5 md:px-8">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-6xl h-full md:grid md:gap-8 md:grid-cols-2 space-y-10 md:space-y-0">
            <div className="flex flex-col justify-center items-center">
              <img
                className="rounded-full"
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_CWNBE37.png"
                alt="GDSC Logo"
                width="300px"
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:text-left text-center">
              <h1 className="text-5xl font-bold text-green-600">Kickoff!</h1>
              <div>
                <h2 className="text-xl font-bold text-gray-700">
                  Sept 28, 2022 | 1PM - SU 2.02.12 Willow
                </h2>
                <h3 className="text-lg text-gray-600">
                  Student Union Second Floor
                </h3>
              </div>
              <p className="text-gray-600">
                Come join us for our first event of the chapter! Find out what
                we are and who we are at this joint GDSC x ACM event!
              </p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-x-3">
                <a
                  href="https://gdsc.community.dev/e/mcg6um/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center shadow px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="flex-grow"></div>  */}
        <Footer />
      </div>
    </main>
  );
}
