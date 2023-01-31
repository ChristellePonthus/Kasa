import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementDetail from "../components/LogementDetail";
import useFetchAPI from "../hooks/useFetchAPI";
import PageNotFound from "../pages/PageNotFound";

const Logements = () => {
  const idUrl = useParams(); // exemple = {id: ':c67ab8a7'}
  const selectedId = idUrl.id.substring(1); // exemple = c67ab8a7

  const accomodations = useFetchAPI("/logements.json");

  const navigate = useNavigate();
  useEffect(() => {
    //   if (!accomodations.id.includes(accomodations.selectedId)) {
    //     navigate(<PageNotFound />);
    //   }
  });

  return (
    <div>
      <Header />
      {accomodations
        .filter((accomodation) => accomodation.id.includes(selectedId))
        .map((accomodation) => (
          <LogementDetail key={selectedId} accomodation={accomodation} />
        ))}
      {/* {accomodations
        .filter(
          (accomodation) => !accomodation.id.includes(accomodations.selectedId)
        )
        .map(() => (
          <PageNotFound />
        ))}
       */}
      <Footer />
    </div>
  );
};

export default Logements;
