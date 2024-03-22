import React from "react";

const Servicios = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto flex justify-between py-24 space-x-24"
      id="funcionalidades"
    >
      <div className="flex flex-col items-center">
        <img
          src="./assets/eventos.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="gestion_eventos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3">
          Organizar eventos
        </h2>
        <p className="text-center font-[400]">
          Desde pequeños encuentros locales hasta grandes campeonatos, nuestra
          aplicación te permite planificar y gestionar cada detalle de tu
          evento.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./assets/pagos.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="gestion_pagos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3">
          Gestión de pagos
        </h2>
        <p className="text-center font-[400]">
          Olvídate de complicaciones. Con nuestra herramienta de gestión de
          pagos, inscribirse en torneos y cubrir cuotas es rápido, seguro y sin
          estrés.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./assets/chat.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="function_chat"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3">
          Función chat
        </h2>
        <p className="text-center font-[400]">
          Únete a conversaciones emocionantes, intercambia tácticas y coordina
          con tu equipo directamente desde nuestro chat integrado.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
