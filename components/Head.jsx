import NextHead from 'next/head';
import React from 'react';

export const WEBSITE_HOST_URL = 'https://neoland-portfolio.vercel.app/';

const Head = () => {

  const image = `${WEBSITE_HOST_URL}/images/meta-image.jpeg`;

  return (
    <NextHead>
      <title>Elias Bello - Site</title>
      <meta
        content="Soy Senior Full Stack Developer y apasionado de las tecnologías basadas en Javascript."
        name="description"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Elias Bello - Website" />
      <meta
        property="og:description"
        content="Soy Senior Full Stack Developer y apasionado de las tecnologías basadas en Javascript."
      />
      <meta property="og:title" content="Elias Bello - Site" />
      <meta property="og:image" content={image} />
    </NextHead>
  );
};

export default Head;
