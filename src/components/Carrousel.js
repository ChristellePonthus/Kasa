import React from "react";
import { useState } from "react";

const Carrousel = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="carrousel" key={logement.id}>
      <div className="img">
        <img src={logement.pictures[currentIndex]} alt={logement.title} />
      </div>
      <button className="leftArrow" />
      <button className="rightArrow" />
    </section>
  );
};

export default Carrousel;
