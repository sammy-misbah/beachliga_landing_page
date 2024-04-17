import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = ({ language, setLanguage }) => {
  const translations = {
    en: {
      terms: "Terms & Conditions",
      contact: "Contact us",
      investors: "Investors",
      news: "News",
      beach_liga: "Beach Liga",
    },
    es: {
      terms: "Términos y Condiciones",
      contact: "Contacta con nosotros",
      investors: "Inversores",
      news: "Noticias",
      beach_liga: "Beach Liga",
    },
  };

  return (
    <div className="bg-beachliga_grey p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <a
          href="https://www.linkedin.com/company/revel-cool/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/linkedin.png" />
        </a>
        <div className="flex mr-[10px] text-white lg:space-x-12 lg:text-md lg:flex-row flex-col space-y-1 lg:-space-y-0">
          <div>
            <Link to="/terms">{translations[language].terms}</Link>
          </div>
          <div>
            <Link to="/#contact">{translations[language].contact}</Link>
          </div>

          <div>
            <Link to="/#contact">{translations[language].investors}</Link>
          </div>
          <div>
            <Link to="/#noticias">{translations[language].news}</Link>
          </div>
          <div>
            <Link to="/">{translations[language].beach_liga}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
