import React from "react";
import { useParams } from "react-router-dom";
import Host from "./Host";
import Rating from "./Rating";
import Tags from "./Tags";
import LogementTitle from "./LogementTitle";

const LogementTitleDetails = ({ logement }) => {
  const idUrl = useParams(); // {id: ':c67ab8a7'}
  const selectedId = Object.values(idUrl).toString().substring(1); // c67ab8a7

  return (
    <section className="logementTitle">
      <div className="titleAndTags">
        <LogementTitle key={selectedId} logement={logement} />
        <Tags key={selectedId} logement={logement} />
      </div>
      <div className="hostAndRate">
        <Host key={selectedId} logement={logement} />
        <Rating key={selectedId} logement={logement} />
      </div>
    </section>
  );
};

export default LogementTitleDetails;
