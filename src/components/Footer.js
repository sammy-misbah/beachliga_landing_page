import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = ({ language, setLanguage }) => {
  const translations = {
    en: {
      terms: "Terms & Conditions",
      contact: "Contact us",
      investors: "Investors",
      news: "News",
      beach_liga: "BeachLiga",
    },
    es: {
      terms: "Términos y Condiciones",
      contact: "Contacta con nosotros",
      investors: "Inversores",
      news: "Noticias",
      beach_liga: "BeachLiga",
    },
    ger: {
      terms: "Nutzungsbedingungen",
      contact: "Kontaktiere uns",
      investors: "Investoren",
      news: "Nachrichten",
      beach_liga: "BeachLiga",
    },
  };

  return (
    <div className="bg-beachliga_grey p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <a
          href="https://www.linkedin.com/company/beachliga/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/linkedin.png" alt="linkedin" />
        </a>
        <div className="flex mr-[10px] text-white lg:space-x-12 lg:text-md lg:flex-row flex-col space-y-1 lg:-space-y-0">
          <Link to="/terms">{translations[language].terms}</Link>
          <Link to="/#contact">{translations[language].contact}</Link>
          <Link to="/#contact">{translations[language].investors}</Link>
          <Link to="/#noticias">{translations[language].news}</Link>
          <a href="https://beachliga.com" target="_blank" rel="noreferrer">
            {translations[language].beach_liga}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
