import React from "react";
import { useState } from "react";

const Dropdowns = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  let description;

  if (Array.isArray(props.description)) {
    description = props.description.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));
  } else {
    description = props.description;
  }

  return (
    <div className="dropdown" key={props.title}>
      <button onClick={handleOpen}>
        <span className="dropdownTitle">{props.title}</span>
        <div className={isOpen ? "arrowUp" : "arrowDown"}></div>
      </button>
      {isOpen ? <div className="dropdownDesc">{description}</div> : null}
    </div>
  );
};

export default Dropdowns;
