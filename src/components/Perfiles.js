import React from "react";

const Perfiles = ({ language }) => {
  const translations = {
    en: {
      profile: "What profile are you?",
      profile_desc:
        "Choose the plan that best fits your profile and your needs.",
      trainers: "Coaches",
      clubs: "Clubs and organizers",
      players: "Players and participants",
      federations: "Federations",
    },
    es: {
      profile: "¿Qué perfil eres?",
      profile_desc:
        "Escoge el plan que mejor se adapte a tu perfil y a tus necesidades.",
      trainers: "Entrenadores",
      clubs: "Clubes y organizadores",
      players: "Jugadores y participantes",
      federations: "Federaciones",
    },
  };

  return (
    <div className="bg-beachliga_bg_grey">
      <div className="max-w-[1200px] mx-auto py-12 md:py-24 pt-20 px-12">
        <h2 className="text-5xl text-beachliga_blue mb-6 font-[400]">
          {translations[language].profile}
        </h2>
        <h3 className="text-2xl max-w-[600px] mb-12">
          {translations[language].profile_desc}
        </h3>
        <div className="flex flex-col lg:flex-row justify-around xl:justify-between mb-6 md:mb-12">
          <a href="/entrenadores" className="mb-6 md:mb-12 lg:mb-0">
            <div className=" mb-6 flex relative mb-12 md:mb-0 lg:w-[450px] lg:h-[280px] xl:w-[530px] xl:h-[300px] perfil-anim-container overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="./assets/luca_mari.jpg"
                className="w-full h-full  opacity-100"
                alt="coach"
              />
              <div className="absolute flex items-center justify-center w-full h-full transform md:translate-x-[-100%] bg-beachliga_grey_opacity perfil-anim-layer">
                <h3 className="text-4xl text-white max-w-[250px] text-center montserrat">
                  {translations[language].trainers}
                </h3>
              </div>
            </div>
          </a>
          <a href="/clubes">
            <div className="mb-6 flex relative mb-12 md:mb-0 lg:w-[450px] lg:h-[280px] xl:w-[530px] xl:h-[300px] perfil-anim-container overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="./assets/balls_resize.jpg"
                className=" w-full h-full  opacity-100"
                alt="clubes"
              />
              <div className="absolute flex items-center justify-center w-full h-full transform md:translate-x-[-100%] bg-beachliga_grey_opacity perfil-anim-layer">
                <h3 className="text-4xl text-white max-w-[250px] text-center montserrat">
                  {translations[language].clubs}
                </h3>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-around xl:justify-between">
          <a href="/jugadores" className="mb-6 md:mb-12 lg:mb-0">
            <div className=" mb-6 flex relative mb-12 md:mb-0 lg:w-[450px] lg:h-[280px] xl:w-[530px] xl:h-[300px] perfil-anim-container overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="./assets/anina_gabri.jpg"
                className=" w-full h-full  opacity-100"
                alt="coach"
              />
              <div className="absolute flex items-center justify-center w-full h-full transform md:translate-x-[-100%] bg-beachliga_grey_opacity perfil-anim-layer">
                <h3 className="text-4xl text-white max-w-[250px] text-center montserrat">
                  {translations[language].players}
                </h3>
              </div>
            </div>
          </a>
          <a href="/federaciones">
            <div className=" mb-6 flex relative mb-12 md:mb-0 lg:w-[450px] lg:h-[280px] xl:w-[530px] xl:h-[300px]  perfil-anim-container overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="./assets/federacion2.png"
                className=" w-full h-full  opacity-100"
                alt="coach"
              />
              <div className="absolute flex items-center justify-center w-full h-full transform md:translate-x-[-100%] bg-beachliga_grey_opacity perfil-anim-layer">
                <h3 className="text-4xl text-white max-w-[250px] text-center montserrat">
                  {translations[language].federations}
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
