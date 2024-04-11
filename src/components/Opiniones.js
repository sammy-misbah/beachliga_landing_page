import React from "react";

const Opiniones = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-24 px-12">
      <h2 className="text-5xl text-beachliga_blue font-[400] mb-24">
        ¿Qué dicen de nosotros?
      </h2>
      <div className="flex lg:space-x-12 flex-col lg:flex-row items-center lg:items-stretch ">
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative mb-24 lg:mb-0">
          <img
            src="./assets/dani.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[500] text-lg ">Daniel Oberthür</h3>
            <h4 className="mb-4">Jugador nacional</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-xl">
              Registrarse para un torneo de voleibol playa con Beachliga ha sido
              muy fácil y mucho más rápido que en otros torneos. Me registré en
              1 minuto a través de mi cuenta de Facebook, y pude pagar
              rápidamente con PayPal sin necesidad de llenar documentos
              adicionales o enviar recibos de pago. ¡Un proceso muy ágil!
            </p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative mb-24 lg:mb-0">
          <img
            src="./assets/finn.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[500] text-lg ">Finn Pickert</h3>
            <h4 className="mb-4">Jugador Nacional</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-xl">
              ¡Simplemente brillante! Registrarse para torneos a través de la
              plataforma Beachliga es fácil, rápido y muy conveniente.
              ¡Finalmente, una solución adecuada para reemplazar los formularios
              de Google!
            </p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative">
          <img
            src="./assets/blanca.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[500] text-lg ">Blanca Seguí</h3>
            <h4 className="mb-4">Jugadora del Madison Tour</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-xl">
              La plataforma Beachliga simplifica enormemente el registro en los
              torneos. Al crear tu perfil una vez al principio, puedes
              registrarte rápidamente en todos los torneos futuros sin necesidad
              de repetir toda la información personal o de pago. Es visual,
              práctico y, sobre todo, ÁGIL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opiniones;
