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
      <div className="max-w-[1200px] mx-auto py-24 pt-20 px-12">
        <h2 className="text-5xl text-beachliga_blue mb-6 font-[400]">
          {translations[language].profile}
        </h2>
        <h3 className="text-2xl max-w-[600px] mb-12">
          {translations[language].profile_desc}
        </h3>
        <div className="flex flex-col md:flex-row justify-between">
          <a href="/entrenadores">
            <div className="flex flex-col items-center mb-12 md:mb-0">
              <img
                src="./assets/luca_marisol.jpg"
                className="mb-6 w-[225px] h-[225px] rounded-full"
                alt="coach"
              />
              <h3 className="text-2xl max-w-[200px] text-center">
                {translations[language].trainers}
              </h3>
            </div>
          </a>
          <a href="/clubes">
            <div className="flex flex-col items-center mb-12 md:mb-0">
              <img
                src="./assets/balls.png"
                className="mb-6 w-[225px] h-[225px] rounded-full"
                alt="club"
              />
              <h3 className="text-2xl max-w-[200px] text-center">
                {translations[language].clubs}
              </h3>
            </div>
          </a>
          <a href="/jugadores">
            <div className="flex flex-col items-center mb-12 md:mb-0">
              <img
                src="./assets/anina_gabri.jpg"
                className="mb-6 w-[225px] h-[225px] rounded-full"
                alt="player"
              />
              <h3 className="text-2xl max-w-[200px] text-center">
                {translations[language].players}
              </h3>
            </div>
          </a>
          <a href="/federaciones">
            <div className="flex flex-col items-center">
              <img
                src="./assets/federacion2.png"
                className="mb-6 w-[225px] h-[225px] rounded-full"
                alt="federacion"
              />
              <h3 className="text-2xl max-w-[200px] text-center">
                {translations[language].federations}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
