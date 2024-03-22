import React from "react";
import { Link } from "react-router-dom";

const Instagram = () => {
  return (
    <div className="bg-beachliga_grey z-10" id="noticias">
      <div className="max-w-[1440px] mx-auto py-24">
        <h3 className="text-beachliga_yellow text-3xl mb-2">ÚLTIMOS POSTS</h3>
        <h4 className="text-white text-2xl mb-12">Lo último en Instagram</h4>
        <div className="flex space-x-6 mb-24">
          <div className="flex flex-col justify-between pb-8 w-[450px] h-[600px] bg-white rounded-xl">
            <div>
              <img
                src="./assets/insta1.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg font-[500]">
                ¡Más de dos años trabajando juntos! La Federación Valenciana de
                Vóley es nuestro partner. Encuentra torneos, eventos y
                entrenamientos en su pagina web: fvbcv.com y en sus redes
                sociales @federacionvoleibol_cvalenciana
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[500]">
                  Seguir leyendo
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-8 w-[450px] h-[600px] bg-white rounded-xl">
            <div>
              <img
                src="./assets/insta2.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg font-[500]">
                ¡Más de dos años trabajando juntos! La Federación Valenciana de
                Vóley es nuestro partner. Encuentra torneos, eventos y
                entrenamientos en su pagina web: fvbcv.com y en sus redes
                sociales @federacionvoleibol_cvalenciana
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[500]">
                  Seguir leyendo
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-8 w-[450px] h-[600px] bg-white rounded-xl">
            <div>
              <img
                src="./assets/insta3.png"
                className="h-[280px] w-full rounded-t-xl"
              />
              <p className="text-ellipsis overflow-hidden px-6 py-6 max-h-[200px] text-lg font-[500]">
                ¡Más de dos años trabajando juntos! La Federación Valenciana de
                Vóley es nuestro partner. Encuentra torneos, eventos y
                entrenamientos en su pagina web: fvbcv.com y en sus redes
                sociales @federacionvoleibol_cvalenciana
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/beachliga_/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-[275px] bg-beachliga_yellow py-3 px-4 rounded-full text-white font-[500]">
                  Seguir leyendo
                </button>
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
            <img src="./assets/insta_logo.png" className="mb-4" />
          </a>
          <h3 className="text-white text-3xl">¡Síguenos!</h3>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
