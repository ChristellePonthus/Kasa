import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementDetail from "../components/LogementDetail";
import useFetchAPI from "../hooks/useFetchAPI";
import PageNotFound from "../pages/PageNotFound";

// Affichage de la fiche d'un logement sélectionné

const Logements = () => {
  // Extraction de l'id passé en paramètre dans l'url
  const idUrl = useParams(); // exemple = {id: ':c67ab8a7'}
  const selectedId = idUrl.id.substring(1); // exemple = c67ab8a7

  // Appel de l'API, puis filtre sur l'id récupéré dans l'url
  const accomodations = useFetchAPI("/logements.json").filter((accomodation) =>
    accomodation.id.includes(selectedId)
  );

  // Initialisation des données qui détermineront la page à afficher
  const [isLoaded, setIsLoaded] = useState(false);
  const [idExist, setIdExist] = useState(false);

  // Assignation de la valeur true aux données précédentes ...
  useEffect(() => {
    Promise.resolve(accomodations)
      // ... si l'API a bien répondu ...
      .then(() => {
        setIsLoaded(true);
        // ... et si l'id a bien été trouvé dans la BDD
        if (accomodations[0].id === selectedId) {
          setIdExist(true);
        }
      })
      .catch(() => {
        return;
      });
  }, [accomodations, selectedId]);

  // Affichage selon les valeurs des états locaux définis dans useEffect
  if (isLoaded) {
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
      // La page d'erreur est affichée l'id présent dans l'url n'existe pas dans la BDD ...
    } else return <PageNotFound />;
    // ... ou si si l'API ne répond pas
  } else return <PageNotFound />;
};

export default Logements;
