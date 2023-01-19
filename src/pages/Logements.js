import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Logements = () => {
  const params = useParams;
  console.log(params);
  return (
    <div>
      <Header />
      params.id
      <Footer />
    </div>
  );
};

export default Logements;
