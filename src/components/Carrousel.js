import React from "react";
import { useState } from "react";

const Carrousel = ({ accomodation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === accomodation.pictures.length - 1;
  let newIndex;
  function goToPrev() {
    newIndex = firstSlide ? accomodation.pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className="carrousel" key={accomodation.id}>
      <div className="img">
        <img
          src={accomodation.pictures[currentIndex]}
          alt={accomodation.title}
        />
      </div>
      {accomodation.pictures.length > 1 ? (
        <>
          <button onClick={goToPrev} className="leftArrow" />
          <button onClick={goToNext} className="rightArrow" />
        </>
      ) : null}
    </section>
  );
};

export default Carrousel;
