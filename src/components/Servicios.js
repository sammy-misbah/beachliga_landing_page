import React from "react";

const Servicios = ({ language }) => {
  const translations = {
    en: {
      events: "Organizing events",
      events_desc:
        "From small local gatherings to large championships, our application allows you to plan and manage every detail of your event.",
      payments: "Payment management",
      payments_desc:
        "Forget about complications. With our payment management tool, signing up for tournaments and covering fees is quick, secure, and stress-free.",
      chat: "Chat function",
      chat_desc:
        "Join exciting conversations, exchange tactics, and coordinate with your team directly from our integrated chat.",
    },
    es: {
      events: "Organizar eventos",
      events_desc:
        "Desde pequeños encuentros locales hasta grandes campeonatos, nuestra aplicación te permite planificar y gestionar cada detalle de tu evento.",
      payments: "Gestión de pagos",
      payments_desc:
        "Olvídate de complicaciones. Con nuestra herramienta de gestión de pagos, inscribirse en torneos y cubrir cuotas es rápido, seguro y sin estrés.",
      chat: "Función chat",
      chat_desc:
        "Únete a conversaciones emocionantes, intercambia tácticas y coordina con tu equipo directamente desde nuestro chat integrado.",
    },
  };

  return (
    <div
      className="max-w-[1200px] mx-auto flex flex-col items-center md:flex-row justify-between py-24 md:space-x-24 px-12"
      id="funcionalidades"
    >
      <div className="flex flex-col items-center mb-12 md:mb-0">
        <img
          src="./assets/eventos.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="gestion_eventos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3 text-center">
          {translations[language].events}
        </h2>
        <p className="text-center">{translations[language].events_desc}</p>
      </div>
      <div className="flex flex-col items-center mb-12 md:mb-0">
        <img
          src="./assets/pagos.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="gestion_pagos"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3 text-center">
          {translations[language].payments}
        </h2>
        <p className="text-center">{translations[language].payments_desc}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./assets/chat.png"
          className="w-[225px] h-[225px] rounded-full mb-6"
          alt="function_chat"
        />
        <h2 className="text-beachliga_blue text-3xl font-[400] mb-3 text-center">
          {translations[language].chat}
        </h2>
        <p className="text-center">{translations[language].chat_desc}</p>
      </div>
    </div>
  );
};

export default Servicios;
