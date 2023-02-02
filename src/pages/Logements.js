import React from "react";
import { render } from "react-dom";
import { redirect, useParams, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementDetail from "../components/LogementDetail";
import useFetchAPI from "../hooks/useFetchAPI";
import PageNotFound from "../pages/PageNotFound";

const Logements = () => {
  const idUrl = useParams(); // exemple = {id: ':c67ab8a7'}
  const selectedId = idUrl.id.substring(1); // exemple = c67ab8a7

  const accomodations = useFetchAPI("/logements.json");

  const selectedAcc = accomodations.filter((accomodation) =>
    accomodation.id.includes(selectedId)
  );
  console.log("selected acc = ", selectedAcc);

  let count = 0;
  for (const acc in accomodations) {
    if (Object.hasOwnProperty.call(accomodations, acc)) {
      const element = accomodations[acc];
      if (element.id === selectedId) {
        count++;
        // console.log(selectedId, " ", element.id, " ", count);
      }
    }
  }

  return (
    <div>
      <Header />
      {accomodations
        .filter((accomodation) => accomodation.id.includes(selectedId))
        .map((accomodation) => (
          <LogementDetail key={selectedId} accomodation={accomodation} />
        ))}
      <Footer />
    </div>
  );
};

export default Logements;
