import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Lanzadera = ({ language }) => {
  const translations = {
    en: {
      title: "We are a project that is part of the",
      title_2: "accelerator and incubator for startups",
    },
    es: {
      title: "Somos un proyecto que forma parte de la",
      title_2: "aceleradora e incubadora para startups",
    },
  };

  return (
    <div className="relative">
      <div>
        <img src="./assets/mar_bg.png" className="w-full min-h-[200px]" />
      </div>
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center  w-full">
        <h3 className="hidden md:block  text-gray-200 text-md md:text-2xl lg:text-3xl xl:text-5xl text-center mb-2 md:mb-6 font-[400]">
          {translations[language].title}
          <br />
          {translations[language].title_2}
        </h3>
        <img src="./assets/lanzadera.png" className="w-[150px] md:w-[300px]" />
      </div>
    </div>
  );
};

export default Lanzadera;
