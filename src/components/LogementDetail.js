import React from "react";
import Carrousel from "./Carrousel";
import LogementTitle from "./LogementTitle";
import Dropdowns from "./Dropdowns";

// Composant affichant les différents composants correspondant aux détails
// de chaque logement, selon les données reçues de la page Logements.js

const LogementDetail = (props) => {
  const selectedId = props.selectedId;
  const accomodation = props.accomodation;

  return (
    <div>
      <Carrousel key={selectedId} accomodation={accomodation} />
      <LogementTitle key={selectedId} accomodation={accomodation} />

      <section className="logementDropdowns">
        <Dropdowns
          key={selectedId}
          title={"Description"}
          description={accomodation.description}
        />
        <Dropdowns
          key={selectedId}
          title={"Equipements"}
          description={accomodation.equipments}
        />
      </section>
    </div>
  );
};

export default LogementDetail;
