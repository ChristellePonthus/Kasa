import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className={props.className}>
        <div className="filter">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
