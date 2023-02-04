import React from "react";
import { useState } from "react";

// Composant affichant des dropdowns selon les données reçus des pages l'utilisant

const Dropdowns = (props) => {
  // Initialisation de l'état local du dropdown à fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction permettant de mettre à jour l'état du dropdown au clic sur le bouton
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Confiugration de la description selon qu'il s'agisse d'un tableau ou non
  let description;
  if (Array.isArray(props.description)) {
    description = props.description.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));
  } else {
    description = props.description;
  }

  return (
    <div className="dropdown" key={props.title}>
      <button onClick={handleOpen}>
        <span className="dropdownTitle">{props.title}</span>
        {/* Changement de sens de la flèche selon l'état du dropdown */}
        <div className={isOpen ? "arrowUp" : "arrowDown"}></div>
      </button>
      {/* Affichage de la description selon l'état du dropdown */}
      {isOpen ? <div className="dropdownDesc">{description}</div> : null}
    </div>
  );
};

export default Dropdowns;
