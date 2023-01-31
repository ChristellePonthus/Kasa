import React from "react";
import Card from "./Card";
import useFetchAPI from "../hooks/useFetchAPI";

const Galery = () => {
  const accomodations = useFetchAPI("logements.json");

  return (
    <section className="gallery">
      {accomodations.map((logement, id) => (
        <Card key={id} logement={logement} />
      ))}
    </section>
  );
};

export default Galery;
