import React from "react";

const Rating = ({ logement }) => {
  const rate = parseInt(logement.rating);
  const starRates = [];
  const orangeStar = <span className="orangeStar"></span>;
  const greyStar = <span className="greyStar"></span>;

  for (let i = 0; i < rate; i++) {
    console.log("i = ", i);
    console.log("rate = ", rate);
    starRates.push(orangeStar);
  }

  for (let j = 0; j < 5 - rate; j++) {
    console.log("j = ", j);
    starRates.push(greyStar);
  }

  return <div className="rating">{starRates}</div>;
};

export default Rating;
