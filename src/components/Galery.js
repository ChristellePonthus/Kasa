import React from "react";
import Card from "./Card";
import useFetchAPI from "../hooks/useFetchAPI";

const Galery = () => {
  const accomodations = useFetchAPI("logements.json");
  console.log("gallery", typeof accomodations, accomodations);

  return (
    <section className="gallery">
      {accomodations.map((logement, id) => (
        <Card key={id} logement={logement} />
      ))}
    </section>
  );
};

export default Galery;
