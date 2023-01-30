import React from "react";
import Carrousel from "./Carrousel";
import LogementTitle from "./LogementTitle";
import Dropdowns from "./Dropdowns";

const LogementDetail = (props) => {
  console.log("props", props);
  // const accomodation = useFetchAPI(`/logement/:${props.selectedId}`);
  const selectedId = props.selectedId;
  const accomodation = props.accomodation;

  return (
    <div>
      <Carrousel key={selectedId} accomodation={accomodation} />
      {/* {props.accomodation
        // .filter((logement) => logement.id.includes(props.selectedId))
        .map((logement, selectedId) => (
          <Carrousel key={selectedId} logement={logement} />
        ))} */}
      <LogementTitle key={props.selectedId} logement={props.accomodation} />
      {/* {props.accomodation
        // .filter((logement) => logement.id.includes(props.selectedId))
        .map((logement, selectedId) => (
          <LogementTitle key={selectedId} logement={logement} />
        ))} */}

      {/* Appel des Dropdowns */}
      <section className="logementDropdowns">
        <Dropdowns
          key={props.selectedId}
          title={"Description"}
          description={props.description}
        />
        <Dropdowns
          key={props.selectedId}
          title={"Equipements"}
          description={props.equipments}
        />
        {/* {props.accomodation
          // .filter((logement) => logement.id.includes(props.selectedId))
          .map((dropdown, key) => (
            <Dropdowns
              key={key}
              title={"Description"}
              description={dropdown.description}
            />
          ))} */}
        {/* {props.accomodation
          // .filter((logement) => logement.id.includes(props.selectedId))
          .map((dropdown, key) => (
            <Dropdowns
              key={key}
              title={"Equipements"}
              description={dropdown.equipments}
            />
          ))} */}
      </section>
    </div>
  );
};

export default LogementDetail;
