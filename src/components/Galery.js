import React, { useEffect, useState } from "react";
import Card from "./Card";

const Galery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => res.json())
      .then(function (data) {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="gallery">
      {data.map((logement, id) => (
        <Card key={id} logement={logement} />
      ))}
    </section>
  );
};

export default Galery;
