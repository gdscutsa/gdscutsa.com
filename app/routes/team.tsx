import {
  json,
  type LoaderFunction,
  type MetaFunction,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import TeamCard from '~/components/TeamCard';
import { setContext } from '~/context.server';
import { client } from '~/models/contentful.server';

type LoaderData = {
  teamMembers: Awaited<ReturnType<typeof client.getTeamMembers>>;
};

export const colors = ['green', 'blue', 'yellow'];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Our Team',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'Our team is made up of passionate individuals who are dedicated to creating a positive community',
});

export const loader: LoaderFunction = async ({ context }) => {
  setContext(context);

  const teamMembers = await client.getTeamMembers();

  return json<LoaderData>({
    teamMembers,
  });
};

export default function Team() {
  const { teamMembers } = useLoaderData<LoaderData>();

  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <section className="w-full bg-[url('/assets/images/team_background.webp')] bg-cover bg-center bg-no-repeat py-28 px-5 md:px-8">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-2">
            <h1 className="text-gradient text-center text-xl font-bold">
              Meet the Team
            </h1>
            <h2 className="max-w-3xl text-center text-2xl font-bold">
              Our team is made up of passionate individuals who are dedicated to
              creating a positive community
            </h2>
          </div>
        </section>
        <section className="bg-slate-50 py-10">
          <div className="container mx-auto flex max-w-6xl flex-col items-center space-y-4">
            {teamMembers.filter((e) => e.isPresident).length > 0 ? (
              <div className="flex w-full flex-col items-center space-y-4">
                <h2 className="p-5 pb-0 text-center text-4xl">GDSC Lead</h2>

                <div className="flex flex-row items-center justify-center pb-5 ">
                  <ul>
                    {teamMembers
                      .filter((e) => e.isPresident)
                      .map(
                        ({
                          name,
                          role: title,
                          nickname,
                          imageUrl: photoUrl,
                        }) => (
                          <li key={name}>
                            <TeamCard
                              name={name}
                              role={title}
                              nickname={nickname}
                              image={photoUrl}
                              accentColor="red"
                            />
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            ) : null}
            {teamMembers.filter((e) => !e.isPresident).length > 0 ? (
              <div className="flex w-full flex-col items-center space-y-4">
                <h2 className="p-5 pb-0 text-center text-4xl">Core Members</h2>

                <ul className="flex flex-col items-center space-y-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                  {teamMembers
                    .filter((e) => !e.isPresident)
                    .map(
                      (
                        { name, role: title, nickname, imageUrl: photoUrl },
                        index
                      ) => (
                        <li key={name}>
                          <TeamCard
                            name={name}
                            role={title}
                            nickname={nickname}
                            image={photoUrl}
                            accentColor={colors[index % colors.length]}
                          />
                        </li>
                      )
                    )}
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
