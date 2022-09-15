import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { DISCORD_LINK, GDSC_INFO_LINK } from '~/constants/links';

export default function Index() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/assets/images/home_background.png')] py-20 px-5 md:px-8">
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
              <img src="assets/svgs/collab.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </main>
  );
}
