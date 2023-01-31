import React from "react";
import Carrousel from "./Carrousel";
import LogementTitle from "./LogementTitle";
import Dropdowns from "./Dropdowns";

const LogementDetail = (props) => {
  const selectedId = props.selectedId;
  const accomodation = props.accomodation;

  return (
    <div>
      <Carrousel key={selectedId} accomodation={accomodation} />
      <LogementTitle key={props.selectedId} accomodation={accomodation} />

      {/* Appel des Dropdowns */}
      <section className="logementDropdowns">
        <Dropdowns
          key={props.selectedId}
          title={"Description"}
          description={props.accomodation.description}
        />
        <Dropdowns
          key={props.selectedId}
          title={"Equipements"}
          description={props.accomodation.equipments}
        />
      </section>
    </div>
  );
};

export default LogementDetail;
