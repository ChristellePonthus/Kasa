import React from "react";
import { useState } from "react";

// Composant carrousel permettant de faire défiler plusieurs images

const Carrousel = ({ accomodation }) => {
  // Initialisation du numéro d'image affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === accomodation.pictures.length - 1;
  let newIndex;

  // Fonctions assignées aux boutons permettant de naviguer entre les images
  function goToPrev() {
    newIndex = firstSlide // si l'image affichée est la première du tableau
      ? accomodation.pictures.length - 1 // la fonction affichera la dernière
      : currentIndex - 1; // sinon la précédente
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    newIndex = lastSlide // si l'image affichée est la dernière du tableau
      ? 0 // la fonction affichera la première
      : currentIndex + 1; // sinon la suivante
    setCurrentIndex(newIndex);
  }

  return (
    <section className="carrousel" key={accomodation.id}>
      <div className="img">
        <img
          src={accomodation.pictures[currentIndex]}
          alt={accomodation.title}
        />
        <div className="pictureNumber">
          <p>
            {/* Indication du numéro de l'image affichée sur le total */}
            {currentIndex + 1}/{accomodation.pictures.length}
          </p>
        </div>
      </div>
      {/* Les boutons de naviguation entre les images sont affichés 
      seulement s'il y a plus d'une image dans le tableau */}
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
