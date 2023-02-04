import React from "react";
import Navigation from "./Navigation";

// Composant affichant les données de l'en-tête sur chaque page

const Header = () => {
  return (
    <header>
      <div className="logoHeader"></div>
      <Navigation />
    </header>
  );
};

export default Header;
