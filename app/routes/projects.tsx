import Footer from '~/components/Footer';
import Header from '~/components/Header';

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </main>
  );
}
