import React from "react";
import { useState } from "react";

const Carrousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("carrousel props = ", props);

  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === props.pictures.length - 1;
  let newIndex;
  function goToPrev() {
    newIndex = firstSlide ? props.pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className="carrousel" key={props.id}>
      <div className="img">
        <img src={props.pictures[currentIndex]} alt={props.title} />
      </div>
      {props.pictures.length > 1 ? (
        <>
          <button onClick={goToPrev} className="leftArrow" />
          <button onClick={goToNext} className="rightArrow" />
        </>
      ) : null}
    </section>
  );
};

export default Carrousel;
