import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const url = useLocation();

  if (url.pathname === "/") {
    return (
      <div className="banner">
        <div className="homeBannerImg">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
    );
  } else if (url.pathname === "/about") {
    return (
      <div className="banner">
        <div className="aboutBannerImg"></div>
      </div>
    );
  }
};

export default Banner;
