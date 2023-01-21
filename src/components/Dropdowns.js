import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Dropdowns = ({ dropdown, logement }) => {
  const url = useLocation();
  console.log(url.pathname);

  const [isOpen, setIsOpen] = useState(true);

  // function handleClick() {
  //   setOpen(!open);
  // }

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
    return (
      <article>
        <div className="logementDropdown" key={logement.id}>
          <div className="logementDropdownTitle">
            Equipements
            <div className="logementDropdownDesc">{logement.equipments}</div>
          </div>
        </div>
        {/* <button onClick={handleClick}>Description</button>
        {open ? <div>{logement.description}</div> : null}
        <button onClick={handleClick}>Equipements</button>
        {open ? <div>{logement.equipments}</div> : null} */}
      </article>
    );
  }
};

export default Dropdowns;
