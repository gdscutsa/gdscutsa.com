import { LoaderFunction, redirect } from '@remix-run/cloudflare';
import { NavLink } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

export default function Index() {
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
