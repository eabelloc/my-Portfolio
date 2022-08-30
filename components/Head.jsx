import NextHead from 'next/head';
import React from 'react';

export const WEBSITE_HOST_URL = 'https://neoland-portfolio.vercel.app/';

const Head = () => {

  const image = `${WEBSITE_HOST_URL}/images/meta-image.jpeg`;

  return (
    <NextHead>
      <title>Elias Bello - Site</title>
      <meta
        content="I am a Junior Full Stack Developer and passionate about technologies based on JavaScript."
        name="description"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Elias Bello - Website" />
      <meta
        property="og:description"
        content="I am a Junior Full Stack Developer and passionate about technologies based on JavaScript."
      />
      <meta property="og:title" content="Elias Bello - Site" />
      <meta property="og:image" content={image} />
    </NextHead>
  );
};

export default Head;
