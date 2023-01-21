import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <Link to={`./logement/:${logement.id}`}>
      <article className="card" key={logement.id}>
        <img className="img" src={logement.cover} alt={logement.title} />
        <div className="cardTitle">{logement.title}</div>
      </article>
    </Link>
  );
};

export default Card;
