import Footer from '~/components/Footer';
import Header from '~/components/Header';
import TeamCard from '~/components/TeamCard';
import { Leads, TeamMembers } from '~/constants/team';

export default function Team() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <div className="w-full min-h-[350px] bg-no-repeat bg-center bg-cover  bg-[url('/assets/images/team_background.png')] py-20 px-5 md:px-8">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-6xl h-full space-y-10">
            <h1 className="text-bold text-5xl text-gray-700 text-center">
              Meet the Team
            </h1>
            <h2 className="text-lg text-gray-600 text-center">
              Our team is made up of passionate individuals who are dedicated to
              <br />
              creating a positive community
            </h2>
          </div>
        </div>
        <div className="border-t border-gray-300 bg-white py-10">
          <div className="container mx-auto max-w-6xl flex flex-col items-center space-y-4">
            <div className="w-full border-b-2 border-gray-100 flex flex-col items-center space-y-4">
              <h2 className="text-4xl p-5 w-full text-center md:text-left text-gray-700">
                GDSC Lead
              </h2>

              <div className="flex flex-row justify-center items-center pb-5 ">
                <ul>
                  {Leads.map(({ name, role, image, accentColor }) => (
                    <li key={name}>
                      <TeamCard
                        name={name}
                        role={role}
                        image={image}
                        accentColor={accentColor}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col items-center space-y-4">
              <h2 className="text-4xl p-5 w-full text-center md:text-left text-gray-700">
                Core Members
              </h2>

              <ul className="flex flex-col items-center space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12">
                {TeamMembers.map(({ name, role, image, accentColor }) => (
                  <li key={name}>
                    <TeamCard
                      name={name}
                      role={role}
                      image={image}
                      accentColor={accentColor}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
