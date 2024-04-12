import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Jugadores = () => {
  return (
    <div className="bg-beachliga_grey text-white">
      <Navbar />
      <div className="pb-16 pt-6 lg:py-24 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <h3 className="text-center text-3xl lg:text-4xl font-[400] mb-6 lg:mb-12 mt-12">
          Participantes y Jugadores
        </h3>
        <h2 className="text-center text-5xl lg:text-6xl mx-auto font-[500] mb-16 lg:mb-24">
          Haciendo espacio para el <br />
          espíritu del equipo
        </h2>
        <div className="flex items-center lg:items-start lg:flex-row flex-col-reverse mb-16">
          <div className="lg:w-1/2 lg:pr-32">
            <h4 className="text-3xl lg:text-4xl font-[500] mb-10">
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
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img src="./assets/spike.webp" className="rounded-xl" />
          </div>
        </div>
        <h2 className="text-center text-5xl mx-auto font-[500] mb-24">
          Funciones que te ahorrarán <br />
          horas de tu valioso tiempo
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-24">
            <img
              src="./assets/matches_screenshot.png"
              className="rounded-[50px] shadow-2xl border-[8px] border-beachliga_neutral"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col text-2xl lg:text-3xl font-[400]">
            <div className="flex pt-12 items-start lg:items-center">
              <img
                src="./assets/white_check.png"
                className="w-8 lg:w-10 mr-4 pt-2 lg:pt-0"
              />
              <h4>Programa notificaciones de eventos</h4>
            </div>
            <div className="flex pt-12 items-start lg:items-center">
              <img
                src="./assets/white_check.png"
                className="w-8 lg:w-10 mr-4 pt-2 lg:pt-0"
              />
              <h4>Comunícate de manera efectiva con tus compañeros</h4>
            </div>
            <div className="flex pt-12 items-start lg:items-center">
              <img
                src="./assets/white_check.png"
                className="w-8 lg:w-10 mr-4 pt-2 lg:pt-0"
              />
              <h4>Encuentra tu compañero ideal para competir en torneos</h4>
            </div>
            <div className="flex pt-12 items-start lg:items-center">
              <img
                src="./assets/white_check.png"
                className="w-8 lg:w-10 mr-4 pt-2 lg:pt-0"
              />
              <h4>
                Explora la comunidad de jugadores y conéctate con compañeros de
                juego
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jugadores;
