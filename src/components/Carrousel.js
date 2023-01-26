import React from "react";
import { useState } from "react";

const Carrousel = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === logement.pictures.length - 1;
  let newIndex;
  function goToPrev() {
    newIndex = firstSlide ? logement.pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className="carrousel" key={logement.id}>
      <div className="img">
        <img src={logement.pictures[currentIndex]} alt={logement.title} />
      </div>
      <button onClick={goToPrev} className="leftArrow" />
      <button onClick={goToNext} className="rightArrow" />
    </section>
  );
};

export default Carrousel;
