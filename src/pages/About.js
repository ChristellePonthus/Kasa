import React from "react";
import Banner from "../components/Banner";
import Dropdowns from "../components/Dropdowns";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TestDrop from "../components/TestDrop";

const About = () => {
  const aboutDropdowns = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Header />
      <Banner />
      {/* {aboutDropdowns.map((dropdown, title) => (
        <Dropdowns key={title} dropdown={dropdown} />
      ))} */}

      <section className="aboutDropdowns">
        {aboutDropdowns.map((dropdown, key) => (
          <TestDrop
            key={key}
            title={dropdown.title}
            description={dropdown.description}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default About;
