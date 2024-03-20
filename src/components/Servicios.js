import React from "react";

const Servicios = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between py-24 space-x-24">
      <div className="flex flex-col items-center">
        <img
          src="./assets/eventos.jpg"
          className="w-[225px] h-[225px] rounded-full mb-12"
          alt="gestion_eventos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400]">
          Organizar eventos
        </h2>
        <p>
          Lörem ipsum oska angen. Dekaligen gigaguhogt. Vagisk ben spengen
          bemäligen för al. Benade ekoosmos prerad senera geovaling.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./assets/eventos.jpg"
          className="w-[225px] h-[225px] rounded-full mb-12"
          alt="gestion_pagos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400]">
          Gestión de pagos
        </h2>
        <p>
          Lörem ipsum oska angen. Dekaligen gigaguhogt. Vagisk ben spengen
          bemäligen för al. Benade ekoosmos prerad senera geovaling.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./assets/eventos.jpg"
          className="w-[225px] h-[225px] rounded-full mb-12"
          alt="function_chat"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400]">
          Función chat
        </h2>
        <p>
          Lörem ipsum oska angen. Dekaligen gigaguhogt. Vagisk ben spengen
          bemäligen för al. Benade ekoosmos prerad senera geovaling.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
