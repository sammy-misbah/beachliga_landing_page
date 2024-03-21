import React from "react";

const MasFuncionalidades = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-20 pt-6">
      <h2 className="text-center text-beachliga_yellow text-4xl font-[400] mb-12">
        Más funcionalidades
      </h2>
      <div className="flex text-beachliga_text">
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex items-center mb-8">
            <img
              src="./assets/credit_card.png"
              className="mr-3 w-[48px] h-[48px] w-[48px] h-[48px]"
            />
            <h3 className="text-2xl max-w-[190px]">Pagos desde la app</h3>
          </div>
          <div className="flex items-center">
            <img src="./assets/cup.png" className="mr-3 w-[48px] h-[48px]" />
            <h3 className="text-2xl max-w-[190px]">Resultados online</h3>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex items-center mb-8">
            <img
              src="./assets/volleyball.png"
              className="mr-3 w-[48px] h-[48px]"
            />
            <h3 className="text-2xl max-w-[190px]">Organización de eventos</h3>
          </div>
          <div className="flex items-center">
            <img
              src="./assets/demography.png"
              className="mr-3 w-[48px] h-[48px]"
            />
            <h3 className="text-2xl max-w-[190px]">
              Administración de jugadores
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex items-center mb-8">
            <img
              src="./assets/chat_icon.png"
              className="mr-3 w-[48px] h-[48px]"
            />
            <h3 className="text-2xl max-w-[190px]">Comunicación instantánea</h3>
          </div>
          <div className="flex items-center">
            <img
              src="./assets/admin_panel.png"
              className="mr-3 w-[48px] h-[48px]"
            />
            <h3 className="text-2xl max-w-[190px]">
              Automatización de registro
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasFuncionalidades;
