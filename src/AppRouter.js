import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import PageNotFound from "./pages/PageNotFound";

// Configuration des routes de l'application

const AppRouter = () => {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Page d'affichage d'un logement sélectionné */}
      <Route path="/logement/:id" element={<Logements />} />

      {/* Page A propos */}
      <Route path="/about" element={<About />} />

      {/* Page d'erreur 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
