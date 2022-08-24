import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/portfolio">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Portfolio</a>
      </Link>
      <Link href="/bootcamp">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Bootcamp</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white pr-6 py-4">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
