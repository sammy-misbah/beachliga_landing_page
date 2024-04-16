import React from "react";

const Clientes = ({ language }) => {
  const translations = {
    en: {
      title_1: "Our track",
      title_2: "record is",
      title_3: "your trust",
      subtitle_1: "Over three years organizing and managing",
      subtitle_2: "competitions throughout Spain.",
      tournaments: "tournaments",
      users: "users",
    },
    es: {
      title_1: "Nuestra",
      title_2: "trayectoria",
      title_3: "es tu confianza",
      subtitle_1: "Más de tres años organizando y gestionando",
      subtitle_2: "competiciones por toda España.",
      tournaments: "torneos",
      users: "usuarios",
    },
  };

  return (
    <div className="bg-beachliga_blue py-24 px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex flex-col text-white mb-12 lg:mb-0">
          <div className="text-4xl text-center md:text-left md:text-6xl mb-12">
            {translations[language].title_1}
            <br /> {translations[language].title_2}
            <br /> {translations[language].title_3}
          </div>
          <div className=" text-xl md:text-2xl text-center md:text-left">
            {translations[language].subtitle_1}
            <br /> {translations[language].subtitle_2}
          </div>
        </div>
        <div className="flex space-x-12">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl md:text-5xl text-white border-4 rounded-full w-40 h-40 md:w-60 md:h-60">
              +1500
              <br />
              <span className="text-3xl">
                {translations[language].tournaments}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl md:text-5xl text-white border-4 rounded-full w-40 h-40 md:w-60 md:h-60">
              +25000
              <br />{" "}
              <span className="text-3xl">{translations[language].users}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
