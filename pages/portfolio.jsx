import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

export const Portfolio = () => {
  return (
    <Layout
      customMeta={{
        title: "Portfolio - Neoland Student",
      }}
    >
      <Gallery />
    </Layout>
  );
};

export default Portfolio;
