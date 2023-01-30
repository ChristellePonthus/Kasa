import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import Dropdowns from "./Dropdowns";
import LogementTitle from "./LogementTitle";
import Logements from "../assets/logements.json";
import useFetchAPI from "../hooks/useFetchAPI";

const LogementDetail = () => {
  const idUrl = useParams(); // {id: ':c67ab8a7'}
  const selectedId = Object.values(idUrl).toString().substring(1); // c67ab8a7

  useFetchAPI(selectedId);

  return (
    <div>
      {Logements.filter((logement) => logement.id.includes(selectedId)).map(
        (logement, selectedId) => (
          <Carrousel key={selectedId} logement={logement} />
        )
      )}

      {Logements.filter((logement) => logement.id.includes(selectedId)).map(
        (logement, selectedId) => (
          <LogementTitle key={selectedId} logement={logement} />
        )
      )}

      {/* Appel des Dropdowns */}
      <section className="logementDropdowns">
        {Logements.filter((logement) => logement.id.includes(selectedId)).map(
          (dropdown, key) => (
            <Dropdowns
              key={key}
              title={"Description"}
              description={dropdown.description}
            />
          )
        )}
        {Logements.filter((logement) => logement.id.includes(selectedId)).map(
          (dropdown, key) => (
            <Dropdowns
              key={key}
              title={"Equipements"}
              description={dropdown.equipments}
            />
          )
        )}
      </section>
    </div>
  );
};

export default LogementDetail;
