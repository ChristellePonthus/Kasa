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

  const accomodations = useFetchAPI("/logements.json").filter((accomodation) =>
    accomodation.id.includes(selectedId)
  );
  // console.log("accomodations", accomodations);

  const p1 = Promise.resolve(accomodations);

  let idExist = false;
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < accomodations.length; i++) {
        if (selectedId === accomodations[i].id) {
          resolve((idExist = true));
        } else {
          resolve((idExist = false));
        }
      }
    }, 3000);
  });

  Promise.all([p1, p2]).then((values) => {
    console.log("values p1 : ", values[0]);
    console.log("values p2 : ", values[1]);
    if (idExist) {
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
    } else {
      return <PageNotFound />;
    }
  });
};

export default Logements;
