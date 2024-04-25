import React from "react";

const Opiniones = ({ language }) => {
  const translations = {
    en: {
      title: "What are they saying about us?",
      national_player: "National player",
      madison_player: "Madison player",
      opinion_1:
        "Signing up for a beach volleyball tournament with Beachliga was incredibly easy and much faster than other tournaments. I registered in 1 minute through my Facebook account and was able to quickly pay with PayPal without needing to fill out additional documents or send payment receipts. A very streamlined process!",
      opinion_2:
        "Simply brilliant! Registering for tournaments through the Beachliga platform is easy, fast, and very convenient. Finally, a suitable solution to replace Google forms!",
      opinion_3:
        "The Beachliga platform greatly simplifies tournament registration. By creating your profile once at the beginning, you can quickly register for all future tournaments without having to repeat all the personal or payment information. It's visual, practical, and above all, AGILE.",
    },
    es: {
      title: "¿Qué dicen de nosotros?",
      national_player: "Jugador nacional",
      madison_player: "Jugadora del Madison",
      opinion_1:
        "Registrarse para un torneo de voleibol playa con Beachliga ha sido muy fácil y mucho más rápido que en otros torneos. Me registré en 1 minuto a través de mi cuenta de Facebook, y pude pagar rápidamente con PayPal sin necesidad de llenar documentos adicionales o enviar recibos de pago. ¡Un proceso muy ágil!",
      opinion_2:
        "¡Simplemente brillante! Registrarse para torneos a través de la plataforma Beachliga es fácil, rápido y muy conveniente. ¡Finalmente, una solución adecuada para reemplazar los formularios de Google!",
      opinion_3:
        "La plataforma Beachliga simplifica enormemente el registro en los torneos. Al crear tu perfil una vez al principio, puedes registrarte rápidamente en todos los torneos futuros sin necesidad de repetir toda la información personal o de pago. Es visual, práctico y, sobre todo, ÁGIL.",
    },
  };

  return (
    <div className="max-w-[1200px] mx-auto py-24 px-12">
      <h2 className="text-5xl text-beachliga_blue font-[400] mb-24">
        {translations[language].title}
      </h2>
      <div className="flex lg:space-x-12 flex-col lg:flex-row items-center lg:items-stretch ">
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative mb-24 lg:mb-0">
          <img
            src="./assets/dani.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[400] text-lg ">Daniel Oberthür</h3>
            <h4 className="mb-4">{translations[language].national_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-lg">{translations[language].opinion_1}</p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative mb-24 lg:mb-0">
          <img
            src="./assets/finn.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[400] text-lg ">Finn Pickert</h3>
            <h4 className="mb-4">{translations[language].national_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-lg">{translations[language].opinion_2}</p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative">
          <img
            src="./assets/blanca.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
          />
          <div>
            <h3 className="font-[400] text-lg ">Blanca Seguí</h3>
            <h4 className="mb-4">{translations[language].madison_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <p className="text-lg">{translations[language].opinion_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opiniones;
