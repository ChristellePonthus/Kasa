import React from "react";

const Carrousel = ({ logement }) => {
  return (
    <section className="carrousel" key={logement.id}>
      <img className="img" src={logement.pictures[0]} alt={logement.title} />
    </section>
  );
};

export default Carrousel;
