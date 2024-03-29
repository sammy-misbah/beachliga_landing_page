import React from "react";

const Planes = () => {
  return (
    <div className="bg-beachliga_bg_grey" id="precios">
      <div className="max-w-[1200px] mx-auto pt-6 pb-24 px-12">
        <h2 className="text-5xl text-beachliga_blue font-[400] mb-10">
          Planes y precios
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between mb-20">
          <div className="flex flex-col w-[340px] h-[640px] justify-between px-8 py-10 border-2 border-beachliga_lightgrey rounded-3xl bg-white mb-12 lg:mb-0">
            <div>
              <h3 className="text-4xl font-semibold mb-6">Gratis</h3>
              <p className="mb-6 text-lg font-[400]">
                ¡Nuestro plan gratuito te ofrece acceso a funciones básicas sin
                costo alguno, junto con actualizaciones regulares y una
                experiencia sin publicidad!
              </p>
              <div className="space-y-2 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">Crear torneos</div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">Crear entrenamientos</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">
                    Conectar con otros jugadores
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line1.png" className="mb-6" alt="line_1" />
              <h2 className="text-5xl font-[400] mb-6">0€</h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-black text-white py-3 rounded-full font-[500] text-lg">
                  ¡Empecemos!
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-[340px] h-[640px] justify-between px-8 py-10 border-2 border-beachliga_blue_border rounded-3xl bg-beachliga_lightblue text-beachliga_blue  mb-12 lg:mb-0">
            <img
              className="absolute w-[150px] right-[-50px] top-[-80px]"
              src="assets/crown.png"
            />
            <div>
              <h3 className="text-4xl font-semibold mb-6">Pro</h3>
              <p className="mb-6 text-lg font-[400]">
                Con nuestro plan Pro, disfrutarás de la libertad de crear
                torneos y sesiones de entrenamiento ilimitadas sin costo
                adicional.
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="text-xl font-[500]">Torneos illimitados</div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="text-xl font-[500]">
                    Entrenamientos illimitados
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="text-xl font-[500]">
                    Hasta 10 entrenadores
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line2.png" className="mb-6" alt="line_2" />
              <h2 className="text-5xl font-[400] mb-6">
                10€<span className="text-3xl">/mes</span>
              </h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-beachliga_blue text-white py-3 rounded-full font-[500] text-lg">
                  ¡Empecemos!
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[340px] h-[640px] justify-between px-8 py-10 rounded-3xl bg-beachliga_blue text-white">
            <div>
              <h3 className="text-4xl font-semibold mb-6">Premium</h3>
              <p className="mb-6 text-lg">
                Con nuestro plan Premium, accede a la gestión de licencias
                deportivas y al ranking federal para un seguimiento completo de
                tu actividad deportiva.
              </p>
              <div className="space-y-2 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl font-[500]">Gestión de licencias</div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl font-[500]">Ranking federal</div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line3.png" className="mb-6" alt="line_3" />
              <h2 className="text-5xl font-[400] mb-6">
                19€<span className="text-3xl">/mes</span>
              </h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-white text-beachliga_blue py-3 rounded-full font-[500] text-lg">
                  ¡Empecemos!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            src="./assets/question_mark.png"
            className="mr-12 w-[80px] h-[90px]"
            alt="question_mark"
          />
          <div className="flex flex-col">
            <h3 className="text-beachliga_yellow text-2xl max-w-[600px] font-[400] mb-6">
              <span className="text-3xl font-[600]">¿No lo tienes claro?</span>
              <br /> Ponte en contacto con nosotros para un plan personalizado.
            </h3>
            <button className="bg-beachliga_yellow w-[200px] md:w-[350px] text-white py-3 px-4 rounded-full font-[400] text-lg">
              Quiero un plan personalizado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
