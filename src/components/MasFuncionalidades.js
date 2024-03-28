import React from "react";

const MasFuncionalidades = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-20 pt-6 px-12">
      <h2 className="text-center text-beachliga_yellow text-4xl font-[400] mb-12">
        Más funcionalidades
      </h2>
      <div className="flex flex-col items-center md:flex-row text-beachliga_text">
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex flex-col  md:flex-row items-center mb-8">
            <img
              src="./assets/credit_card.png"
              className="md:mr-3 w-[48px] h-[48px] w-[48px] h-[48px]"
              alt="credit_card"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Pagos desde la app
            </h3>
          </div>
          <div className="flex flex-col items-center md:flex-row mb-8 md:mb-0">
            <img
              src="./assets/cup.png"
              className="md:mr-3 w-[48px] h-[48px]"
              alt="cup"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Resultados online
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex flex-col items-center md:flex-row mb-8">
            <img
              src="./assets/volleyball.png"
              className="md:mr-3 w-[48px] h-[48px]"
              alt="resultados"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Organización de eventos
            </h3>
          </div>
          <div className="flex flex-col items-center md:flex-row mb-8 md:mb-0">
            <img
              src="./assets/demography.png"
              className="md:mr-3 w-[48px] h-[48px]"
              alt="eventos"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Administración de jugadores
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex flex-col items-center md:flex-row mb-8">
            <img
              src="./assets/chat_icon.png"
              className="md:mr-3 w-[48px] h-[48px]"
              alt="chat"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Comunicación instantánea
            </h3>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src="./assets/admin_panel.png"
              className="md:mr-3 w-[48px] h-[48px]"
              alt="registro"
            />
            <h3 className="text-center md:text-left text-xl lg:text-2xl max-w-[190px]">
              Automatización de registro
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasFuncionalidades;
