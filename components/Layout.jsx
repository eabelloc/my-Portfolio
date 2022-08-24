import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';


export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://github.com/eabelloc"
          >
            Elias Antonio Bello Caricote
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
