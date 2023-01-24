import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Dropdowns = ({ dropdown, logement }) => {
  const url = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (url.pathname === "/about") {
    return (
      <section>
        <div className="aboutDropdown" key={dropdown.title}>
          <button onClick={handleOpen}>
            <span className="aboutDropdownTitle">{dropdown.title}</span>
            <div className="buttonImg"></div>
          </button>
          {isOpen ? (
            <div className="aboutDropdownDesc">{dropdown.description}</div>
          ) : null}
        </div>
      </section>
    );
  } else {
    const equipments = logement.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));
    return (
      <section className="logementDropdowns" key={logement.id}>
        <div className="logementDropdown">
          <button onClick={handleOpen}>
            <span className="logementDropdownTitle">Description</span>
            <div className="buttonImg"></div>
          </button>
          {isOpen ? (
            <div className="logementDropdownDesc">{logement.description}</div>
          ) : null}
        </div>
        <div className="logementDropdown">
          <button onClick={handleOpen}>
            <span className="logementDropdownTitle">Equipements</span>
            <div className="buttonImg"></div>
          </button>
          {isOpen ? (
            <div className="logementDropdownDesc">
              <ul>{equipments}</ul>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
};

export default Dropdowns;
