import React from "react";

const Carrousel = ({ logement }) => {
  return (
    <article className="carrousel" key={logement.id}>
      <img className="img" src={logement.pictures[0]} alt={logement.title} />
    </article>
  );
};

export default Carrousel;
