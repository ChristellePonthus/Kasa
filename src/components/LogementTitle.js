import React from "react";

const LogementTitle = ({ logement }) => {
  //Loste des tags
  const tags = logement.tags.map((tag, index) => (
    <li key={index} className="tag">
      {tag}
    </li>
  ));

  //Vote
  const rate = parseInt(logement.rating);
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
          <h2 className="title">{logement.title}</h2>
          <p className="location">{logement.location}</p>
        </div>
        <ul className="tags">{tags}</ul>
      </div>
      <div className="hostAndRate">
        <div className="host">
          <div className="hostName">{logement.host.name}</div>
          <img
            className="hostPicture"
            src={logement.host.picture}
            alt={logement.host.name}
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
