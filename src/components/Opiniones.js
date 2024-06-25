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
    ger: {
      title: "Was andere über uns sagen?",
      national_player: "Nationaler Spieler",
      madison_player: "Madison-Spielerin",
      opinion_1:
        "Die Anmeldung für ein Beachvolleyballturnier mit Beachliga war sehr einfach und viel schneller als bei anderen Turnieren. Ich habe mich innerhalb von 1 Minute über mein Google-Konto registriert und konnte schnell und einfach mit PayPal bezahlen, ohne zusätzliche Dokumente auszufüllen oder Zahlungsbelege zu senden. Ein sehr reibungsloser Prozess!",
      opinion_2:
        "Einfach brillant! Die Anmeldung für Turniere über die Beachliga-Plattform ist einfach, schnell und sehr bequem. Endlich eine passende Lösung, um Google-Formulare zu ersetzen!",
      opinion_3:
        "Die Beachliga-Plattform vereinfacht die Anmeldung zu Turnieren erheblich. Indem du dein Profil einmal am Anfang erstellst, kannst du dich schnell für alle zukünftigen Turniere anmelden, ohne alle persönlichen oder Zahlungsinformationen erneut eingeben zu müssen. Es ist visuell, praktisch und vor allem AGIL.",
      download: "Lade unsere App herunter!",
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
            alt="dani"
          />
          <div>
            <h3 className="font-[400] text-lg ">Daniel Oberthür</h3>
            <h4 className="mb-4">{translations[language].national_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
            </div>
            <p className="text-lg">{translations[language].opinion_1}</p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative mb-24 lg:mb-0">
          <img
            src="./assets/finn.webp"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
            alt="finn"
          />
          <div>
            <h3 className="font-[400] text-lg ">Finn Pickert</h3>
            <h4 className="mb-4">{translations[language].national_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
            </div>
            <p className="text-lg">{translations[language].opinion_2}</p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8 text-white w-[300px] md:w-[380px] lg:w-[500px] bg-beachliga_grey border-[3px] border-beachliga_blue rounded-[35px] relative">
          <img
            src="./assets/blanca.jpg"
            className="absolute w-[150px] h-[150px] rounded-full top-[-60px] right-[-30px] border-beachliga_blue border-[3px]"
            alt="blanca"
          />
          <div>
            <h3 className="font-[400] text-lg ">Blanca Seguí</h3>
            <h4 className="mb-4">{translations[language].madison_player}</h4>
          </div>
          <div>
            <div className="flex mb-2">
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
            </div>
            <p className="text-lg">{translations[language].opinion_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opiniones;
