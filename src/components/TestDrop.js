import React from "react";
import { useState } from "react";

const TestDrop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  let description;

  if (Array.isArray(props.description)) {
    console.log("Array ?");
    description = props.description.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));
  } else {
    description = props.description;
  }

  console.log("props.description", props.description);

  return (
    <div className="dropdown" key={props.title}>
      <button onClick={handleOpen}>
        <span className="dropdownTitle">{props.title}</span>
        <div className="buttonImg"></div>
      </button>
      {isOpen ? <div className="dropdownDesc">{description}</div> : null}
    </div>
  );
};

export default TestDrop;
