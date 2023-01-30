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

  const accomodation = useFetchAPI(`/logement/:${selectedId}`);

  const navigate = useNavigate();
  useEffect(() => {
    // if () {
    //   navigate(<PageNotFound />);
    // }
  });

  return (
    <div>
      <Header />
      <LogementDetail selectedId={selectedId} accomodation={accomodation} />
      <Footer />
    </div>
  );
};

export default Logements;
