import React from "react";
import Navbar from "../components/Navbar";

const Jugadores = () => {
  return (
    <div className="bg-beachliga_blue text-white">
      <Navbar />
      <div className="py-24 px-12 max-w-[1200px] mx-auto">
        <h3 className="text-center text-4xl font-[400] mb-16 mt-12">
          Participantes y Jugadores
        </h3>
        <h2 className="text-center text-6xl mx-auto font-[500] mb-24">
          Haciendo espacio para el <br />
          espíritu del equipo
        </h2>
        <div className="flex mb-16">
          <div className="w-1/2 pr-32">
            <h4 className="text-4xl font-[500] mb-10">
              Con Beachliga, disfruta de la organización y la diversión mientras
              compartes experiencias, cooperas y mantienes al tanto las fechas
              importantes.
            </h4>
            <h5 className="text-xl font-[500] mb-1">
              Comunica tu asistencia al grupo de forma clara y sencilla.
            </h5>
            <p className="text-md font-[400] mb-4">
              Si bien es comprensible que a veces se nos pase por alto, la
              experiencia con Beachliga reduce significativamente la posibilidad
              de olvidos gracias a su eficiente sistema de recordatorios y
              organización, brindándote la tranquilidad de que todos los
              detalles importantes estarán cubiertos.
            </p>
            <h5 className="text-xl font-[500] mb-1">
              Mantén al equipo unido y conectado.
            </h5>
            <p className="text-md font-[400] mb-4">
              Centraliza tus mensajes y publicaciones en un solo lugar. En medio
              del ruido de otras aplicaciones, nos aseguramos de que puedas
              comunicarte fácilmente con el líder de tu grupo y otros miembros.
            </p>
            <h5 className="text-xl font-[500] mb-1">
              Cada persona es importante.
            </h5>
            <p className="text-md font-[400] mb-4">
              Cuando la ubicación del evento no está clara o todos tienen ideas
              diferentes sobre la comida para la fiesta, ¡los chats de grupo
              pueden volverse caóticos! Pero con Beachliga, las encuestas
              aseguran que todas las opiniones sean consideradas y ningún
              mensaje se pierda.
            </p>
          </div>
          <div className="w-1/2">
            <img src="./assets/spike.webp" />
          </div>
        </div>
        <h2 className="text-center text-5xl mx-auto font-[500] mb-24">
          Funciones que te ahorrarán <br />
          horas de tu valioso tiempo
        </h2>
        <div className="flex">
          <div className="w-1/2  pr-24">
            <img
              src="./assets/matches_screenshot.png"
              className="rounded-[50px] shadow-2xl border-[8px] border-beachliga_neutral"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex pt-12 items-center">
              <img src="./assets/white_check.png" className="w-12 mr-4" />
              <h4 className="text-3xl font-[400]">
                Programa notificaciones de eventos
              </h4>
            </div>
            <div className="flex pt-12 items-center">
              <img src="./assets/white_check.png" className="w-12 mr-4" />
              <h4 className="text-3xl font-[400]">
                Comunícate de manera efectiva con tus compañeros
              </h4>
            </div>
            <div className="flex pt-12 items-center">
              <img src="./assets/white_check.png" className="w-12 mr-4" />
              <h4 className="text-3xl font-[400]">
                Encuentra tu compañero ideal para competir en torneos
              </h4>
            </div>
            <div className="flex pt-12 items-center">
              <img src="./assets/white_check.png" className="w-12 mr-4" />
              <h4 className="text-3xl font-[400]">
                Explora la comunidad de jugadores y conéctate con compañeros de
                juego
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jugadores;
