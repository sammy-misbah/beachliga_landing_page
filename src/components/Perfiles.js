import React from "react";

const Perfiles = () => {
  return (
    <div className="bg-beachliga_bg_grey">
      <div className="max-w-[1200px] mx-auto py-24 pt-20">
        <h2 className="text-5xl text-beachliga_blue mb-6 font-[400]">
          ¿Qué perfil eres?
        </h2>
        <h3 className="text-2xl max-w-[600px] mb-12 font-[400]">
          Escoge el plan que mejor se adapte a tu perfil y a tus necesidades.
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img
              src="./assets/coach.png"
              className="mb-6 w-[225px] h-[225px] rounded-full"
              alt="coach"
            />
            <h3 className="text-2xl max-w-[200px] text-center font-[400]">
              Entrenadores
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./assets/club2.png"
              className="mb-6 w-[225px] h-[225px] rounded-full"
              alt="club"
            />
            <h3 className="text-2xl max-w-[200px] text-center font-[400]">
              Clubes y organizadores
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./assets/player.png"
              className="mb-6 w-[225px] h-[225px] rounded-full"
              alt="player"
            />
            <h3 className="text-2xl max-w-[200px] text-center font-[400]">
              Jugadores y participantes
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./assets/federacion.png"
              className="mb-6 w-[225px] h-[225px] rounded-full"
              alt="federacion"
            />
            <h3 className="text-2xl max-w-[200px] text-center font-[400] leading-7">
              Federaciones
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
