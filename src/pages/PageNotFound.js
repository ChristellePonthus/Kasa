import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="error">
        <div className="errorCode">404</div>
        <div className="errorMsg">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div className="homeLink">
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
