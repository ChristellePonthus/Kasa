import React, { useEffect, useState } from "react";
import logements from "../logements";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < logements.length; i++) {
      const element = logements[i].id;
      <div className="card">id = {element}</div>;
      setData(logements);
    }
  }, []);
  return (
    <div className="gallery">
      {data.map((logement) => (
        <div className="card" key={logement.id}>
          <img className="img" src={logement.cover} alt="logement" />
          <div className="cardTitle">{logement.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
