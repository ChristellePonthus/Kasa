import React from "react";
import { Link } from "react-router-dom";

// Composant affichant les vignettes pour chaque logement,
// incluant un lien vers une page affichant les détails

const Card = ({ logement }) => {
  return (
    <Link to={`./logement/:${logement.id}`}>
      <article className="card" key={logement.id}>
        <img className="img" src={logement.cover} alt={logement.title} />
        <div className="filter">
          <div className="cardTitle">{logement.title}</div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
