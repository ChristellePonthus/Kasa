import React from "react";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <LogoHeader />
      <Navigation />
    </div>
  );
};

export default Header;
