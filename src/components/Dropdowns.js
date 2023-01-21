import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Dropdowns = ({ dropdown, logement }) => {
  const url = useLocation();
  console.log(url.pathname);

  const [isOpen, setIsOpen] = useState(true);

  if (url.pathname === "/about") {
    return isOpen ? (
      <section>
        <div className="aboutDropdown" key={dropdown.title}>
          <button onClick={() => setIsOpen(false)}>
            <span className="aboutDropdownTitle">{dropdown.title}</span>
            <div className="buttonImg"></div>
          </button>
        </div>
      </section>
    ) : (
      <section>
        <div className="aboutDropdown" key={dropdown.title}>
          <button onClick={() => setIsOpen(true)}>
            <span className="aboutDropdownTitle">{dropdown.title}</span>
            <div className="buttonImg"></div>
          </button>
          <div className="aboutDropdownDesc">{dropdown.description}</div>
        </div>
      </section>
    );
  } else {
    return isOpen ? (
      <section className="logementDropdowns">
        <div className="logementDropdown" key={logement.id}>
          <button onClick={() => setIsOpen(false)}>
            <span className="logementDropdownTitle">Description</span>
            <div className="buttonImg"></div>
          </button>
        </div>
        <div className="logementDropdown" key={logement.id}>
          <button onClick={() => setIsOpen(false)}>
            <span className="logementDropdownTitle">Equipements</span>
            <div className="buttonImg"></div>
          </button>
        </div>
      </section>
    ) : (
      <section className="logementDropdowns">
        <div className="logementDropdown" key={logement.id}>
          <button onClick={() => setIsOpen(true)}>
            <span className="logementDropdownTitle">Description</span>
            <div className="buttonImg"></div>
          </button>
          <div className="logementDropdownDesc">{logement.description}</div>
        </div>
        <div className="logementDropdown" key={logement.id}>
          <button onClick={() => setIsOpen(true)}>
            <span className="logementDropdownTitle">Equipements</span>
            <div className="buttonImg"></div>
          </button>
          <div className="logementDropdownDesc">
            {logement.equipments.map(() => (
              <div>{logement.equipments[0]}</div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Dropdowns;
