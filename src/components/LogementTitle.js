import React from "react";

// Composant affichant pour chaque logement, selon les données reçues
// depuis LogementDetail.js, son titre, ses tags,
// les informations de l'hôte et les votes

const LogementTitle = ({ accomodation }) => {
  // Récupération de la liste des tags
  const tags = accomodation.tags.map((tag, index) => (
    <li key={index} className="tag">
      {tag}
    </li>
  ));

  // Récupération des votes
  const rate = parseInt(accomodation.rating);
  const starRates = [];
  const orangeStar = "orangeStar";
  const greyStar = "greyStar";

  for (let i = 0; i < rate; i++) {
    starRates.push(orangeStar);
  }

  for (let j = 0; j < 5 - rate; j++) {
    starRates.push(greyStar);
  }

  return (
    <section className="logementTitle">
      <div className="titleAndTags">
        <div className="title">
          <h2 className="title">{accomodation.title}</h2>
          <p className="location">{accomodation.location}</p>
        </div>
        <ul className="tags">{tags}</ul>
      </div>
      <div className="hostAndRate">
        <div className="host">
          <div className="hostName">{accomodation.host.name}</div>
          <img
            className="hostPicture"
            src={accomodation.host.picture}
            alt={accomodation.host.name}
          />
        </div>
        <div className="rating">
          {starRates.map((star, index) => (
            <span key={index} className={star}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogementTitle;
