import React from "react";

const LogementTitle = ({ logement }) => {
  return (
    <div className="title">
      <h2 className="title">{logement.title}</h2>
      <p className="location">{logement.location}</p>
    </div>
  );
};

export default LogementTitle;
