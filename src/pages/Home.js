import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import Header from "../components/Header";

// Affichage de la page d'accueil par ses différents composants

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        className={"homeBannerImg"}
        title={`Chez vous,
        partout et ailleurs`}
      />
      <Galery />
      <Footer />
    </div>
  );
};

export default Home;
