import React from "react";
import Card from "./Card";
import useFetchAPI from "../hooks/useFetchAPI";

// Composant gérant l'affichage des vignettes créées par le composant Card
const Galery = () => {
  // Appel de l'API pour envoyer les informations nécessaires au composant Card
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
