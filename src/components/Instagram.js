import React from "react";
import { Link } from "react-router-dom";

const Instagram = ({ language }) => {
  const translations = {
    en: {
      title: "RECENT POSTS",
      subtitle: "The latest on Instagram",
      post_1:
        "More than two years working together! The Valencian Volleyball Federation is our partner. Find tournaments, events and trainings on their website: fvbcv.com and on their social networks @federacionvoleibol_cvalenciana",
      post_2:
        "Last hours to register for this weekend's tournaments by the Valencian Volleyball Federation in Gandia! Don't miss the chance to participate!",
      post_3:
        "We're in lanzadera and big things are coming! We're grateful for this opportunity. If you'd like more information about our project, please contact us.",
      read_more: "Read more",
      follow_us: "Follow us!",
    },
    es: {
      title: "ÚLTIMOS POSTS",
      subtitle: "Lo último en Instagram",
      post_1:
        "¡Más de dos años trabajando juntos! La Federación Valenciana de Vóley es nuestro partner. Encuentra torneos, eventos y entrenamientos en su pagina web: fvbcv.com y en sus redes sociales @federacionvoleibol_cvalenciana",
      post_2:
        "¡Últimas horas para inscribirte en los torneos de este fin de semana de la Federación Valenciana de Voleibol en Gandia! ¡No dejes pasar la oportunidad de participar!",
      post_3:
        "¡Estamos en lanzadera y se vienen grandes cosas! Agradecemos esta oportunidad. Si deseas más información sobre nuestro proyecto, contáctanos.",

      read_more: "Seguir leyendo",
      follow_us: "¡Síguenos!",
    },
  };

  return (
    <div className="bg-beachliga_grey z-10" id="noticias">
      <div className="max-w-[1440px] mx-auto py-24 px-12">
        <h3 className="text-beachliga_yellow text-3xl mb-2">
          {translations[language].title}
        </h3>
        <h4 className="text-white text-2xl mb-12">
          {translations[language].subtitle}
        </h4>
        <div className="flex flex-col lg:flex-row lg:space-x-6 mb-24">
          <div className="flex flex-col justify-between pb-8 lg:w-[300px] xl:w-[400px] h-[600px] bg-white rounded-xl mb-12 lg:mb-0">
            <div>
              <img
                src="./assets/insta1.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg">
                {translations[language].post_1}
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[400] flex justify-center items-center">
                  {translations[language].read_more}
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-8 lg:w-[300px] xl:w-[400px] h-[600px] bg-white rounded-xl mb-12 lg:mb-0">
            <div>
              <img
                src="./assets/insta2.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg ">
                {translations[language].post_2}
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[400] flex justify-center items-center">
                  {translations[language].read_more}
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-8 lg:w-[300px] xl:w-[400px] h-[600px] bg-white rounded-xl">
            <div>
              <img
                src="./assets/insta3.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg">
                {translations[language].post_3}
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[400] flex justify-center items-center">
                  {translations[language].read_more}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://www.instagram.com/beachliga_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/insta_logo.png" className="mb-2" />
          </a>
          <h3 className="text-white text-3xl">
            {translations[language].follow_us}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
