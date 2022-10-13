import type { MetaFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import TeamCard from '~/components/TeamCard';
import { Leads, TeamMembers } from '~/constants/team';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Our Team',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'Our team is made up of passionate individuals who are dedicated to creating a positive community',
});

export default function Team() {
  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <div className="min-h-[350px] w-full bg-[url('/assets/images/team_background.webp')] bg-cover bg-center bg-no-repeat py-20 px-5 md:px-8">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-10">
            <h1 className="text-bold text-center text-5xl text-gray-700">
              Meet the Team
            </h1>
            <h2 className="max-w-lg text-center text-lg text-gray-600">
              Our team is made up of passionate individuals who are dedicated to
              creating a positive community
            </h2>
          </div>
        </div>
        <div className="border-t border-gray-300 bg-white py-10">
          <div className="container mx-auto flex max-w-6xl flex-col items-center space-y-4">
            <div className="flex w-full flex-col items-center space-y-4 border-b-2 border-gray-100">
              <h2 className="w-full p-5 text-center text-4xl text-gray-700 md:text-left">
                GDSC Lead
              </h2>

              <div className="flex flex-row items-center justify-center pb-5 ">
                <ul>
                  {Leads.map(({ name, role, nickname, image, accentColor }) => (
                    <li key={name}>
                      <TeamCard
                        name={name}
                        role={role}
                        nickname={nickname}
                        image={image}
                        accentColor={accentColor}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex w-full flex-col items-center space-y-4">
              <h2 className="w-full p-5 text-center text-4xl text-gray-700 md:text-left">
                Core Members
              </h2>

              <ul className="flex flex-col items-center space-y-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                {TeamMembers.map(
                  ({ name, role, nickname, image, accentColor }) => (
                    <li key={name}>
                      <TeamCard
                        name={name}
                        role={role}
                        nickname={nickname}
                        image={image}
                        accentColor={accentColor}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
