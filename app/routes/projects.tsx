import type { MetaFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { SEO_DESCRIPTION } from '~/constants/seo';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GDSC | UTSA - Projects Page',
  viewport: 'width=device-width,initial-scale=1',
  description: SEO_DESCRIPTION,
});

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="flex h-screen flex-col justify-start">
        <Header />
        <div className="min-h-[500px] w-full bg-[url('/assets/images/projects_background.webp')] bg-cover bg-center bg-no-repeat py-8 px-5 md:px-8">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-10 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            <div className="flex flex-col items-center justify-center space-y-6 text-center md:items-start md:text-left">
              <h1 className="text-6xl font-medium text-white">Projects</h1>
              <p className="text-xl text-white">
                Our club is cooking up a few projects. Check back soon!
              </p>
            </div>
            <div className="hidden flex-col items-center  justify-center py-10 md:flex">
              <img src="assets/svgs/scrum.svg" alt="Scrum Meeting" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
