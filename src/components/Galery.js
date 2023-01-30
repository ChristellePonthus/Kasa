import React from "react";
import Card from "./Card";
import Logements from "../assets/logements.json";
import useFetchAPI from "../hooks/useFetchAPI";

const Galery = () => {
  useFetchAPI(Logements);

  return (
    <section className="gallery">
      {Logements.map((logement, id) => (
        <Card key={id} logement={logement} />
      ))}
    </section>
  );
};

export default Galery;
