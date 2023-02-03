import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(false);
  const [idExist, setIdExist] = useState(false);

  useEffect(() => {
    Promise.resolve(accomodations)
      .then(() => {
        setIsLoading(true);
        if (accomodations[0].id === selectedId) {
          setIdExist(true);
        }
      })
      .catch(() => {
        return <PageNotFound />;
      });
  }, [accomodations, selectedId]);

  if (isLoading) {
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
  }
};

export default Logements;
