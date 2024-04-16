import React from "react";

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
            <a href="/terms">{translations[language].terms}</a>
          </div>
          <div>
            <a href="#contact">{translations[language].contact}</a>
          </div>

          <div>
            <a href="#contact">{translations[language].investors}</a>
          </div>
          <div>
            <a href="#noticias">{translations[language].news}</a>
          </div>
          <div>
            <a href="#">{translations[language].beach_liga}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
