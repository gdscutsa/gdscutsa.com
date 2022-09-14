import Footer from '~/components/Footer';
import Header from '~/components/Header';

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-start">
        <Header />
        <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/assets/images/projects_background.png')] py-8 px-5 md:px-8">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-6xl h-full md:grid md:gap-6 md:grid-cols-2 md:space-y-0 space-y-10">
            <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:text-left text-center">
              <h1 className="text-6xl font-medium text-white">Projects</h1>
              <p className="text-xl text-white">
                Our club is cooking up a few projects. Check back soon!
              </p>
            </div>
            <div className="-order-1 md:order-1 py-10 flex flex-col justify-center items-center">
              <img src="assets/svgs/scrum.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </main>
  );
}
