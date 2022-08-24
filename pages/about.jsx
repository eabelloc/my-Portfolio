import React from 'react';
import Layout from '../components/Layout';

export const About = () => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang',
      }}
    >
      <h1>About Page</h1>
      <h2>Some curiosites about me 😊:</h2>
      <ul>
        <li>🐱‍💻 I am a composer, turned programmer.</li>
        <li>🐱‍💻 I have expereience as a composer in a professional level.</li>
        <li>🐱‍💻 I am a very big fan of Balinese gamelan music (I used to play in a gamelan orchestra parallel to my composition studies), contemporary classical music, and electronic music.</li>
        <li>🐱‍💻 I am currently doing a Bootcamp about Web Development in Neoland.</li>
        <li>🐱‍💻 Web Development to me was, like love at first sight. It has become, along with music, the most important thing in my life, a passion of mine 😊. I love developing webs as much as I love composing music</li>
      </ul>
      <br />
      <h2>Contact</h2>
      <ul>
        <li><strong>E-mail:</strong> eabelloc.dev@gmail.com</li>
      </ul>
      <br />
      <p>PS: You can contact me in English, Spanish, German or French</p>
    </Layout>
  );
};

export default About;
