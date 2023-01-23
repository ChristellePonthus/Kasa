import React from "react";

const Host = ({ logement }) => {
  return (
    <div className="host">
      <div className="hostName">{logement.host.name}</div>
      <img
        className="hostPicture"
        src={logement.host.picture}
        alt={logement.host.name}
      />
    </div>
  );
};

export default Host;
