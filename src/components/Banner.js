import React from "react";

// Composant affichant la bannière selon les données reçues des pages l'utilisant

const Banner = (props) => {
  return (
    <div className="banner">
      <div className={props.className}>
        <div className="filter"></div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Banner;
