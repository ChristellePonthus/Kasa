import React from "react";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Galery />
      <Footer />
    </div>
  );
};

export default Home;
