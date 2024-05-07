import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Clubes = ({ language, setLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Clubs and organizations",
      subtitle: "Easily manage your club's ",
      subtitle_part2: "events",
      subsubtitle:
        "With Beachliga, creating events for your club and managing members has never been easier.",
      part_1_title: "Create and organize events",
      part_1_desc:
        "In just 2 minutes, you can create events and training sessions for your club and allow players to sign up through our platform.",
      part_2_title: "Manage club members and receive payments",
      part_2_desc:
        "With Beachliga, you can see the status of your training sessions at any time: number of students, payment status, attendance, etc...",
      part_3_title: "Court reservation",
      part_3_desc:
        "With Beachliga, you can give players the opportunity to reserve a court for free or by paying.",
      part_4_title: "Real-time results",
      part_4_desc:
        "Keep up with the action without missing a beat! With our real-time results feature, stay updated on all the details directly on your device.",
      number_1: "+1.500",
      circle_1: "eventos",
      number_2: "+25",
      circle_2: "clubes",
      quote:
        "BeachLiga is the perfect app to manage everything happening at the club. From scheduling matches to tracking player statistics, and from managing memberships to coordinating events, BeachLiga streamlines all club activities into one convenient platform. With intuitive features designed specifically for beach volley clubs, BeachLiga empowers administrators, coaches, and players alike to focus on what they do best: enjoying the game.",
      author: "Obán, Mediterranean Beach Volley",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free!",
    },
    es: {
      title: "Clubes y organizaciónes",
      subtitle: "Gestiona de manera sencilla ",
      subtitle_part2: "los eventos ",
      subtitle_part3: "de tu club",
      subsubtitle:
        "Con Beachliga, crear los eventos de tu club y gestionar los miembros nunca ha sido tan fácil.",
      part_1_title: "Crea y organiza eventos",
      part_1_desc:
        "En solo 2 minutos, podras crear los eventos y entrenamientos de tu club y permitir a los jugadores de apuntarse a través de nuestra plataforma.",
      part_2_title: "Administrar miembros del club y recibir pagos",
      part_2_desc:
        "Con Beachliga, podras ver en cada momento el estado de tus entrenamientos: numero de alumnos, estado de pago, asistencia etc...",
      part_3_title: "Reserva de pistas",
      part_3_desc:
        "Con Beachliga, puedes ofrecer a los jugadores la posibilidad de reservar una cancha de forma gratuita o pagando.",
      part_4_title: "Resultados en tiempo real",
      part_4_desc:
        "¡Sigue la acción sin perder un solo segundo! Con nuestra función de resultados en tiempo real, mantente al tanto de todos los detalles directamente en tu dispositivo.",
      number_1: "+1.500",
      circle_1: "events",
      number_2: "+25",
      circle_2: "clubs",
      quote:
        "BeachLiga es la aplicación perfecta para gestionar todo lo que sucede en el club. Desde programar partidos hasta hacer un seguimiento de las estadísticas de los jugadores, y desde gestionar membresías hasta coordinar eventos, BeachLiga simplifica todas las actividades del club en una plataforma conveniente. Con funciones intuitivas diseñadas específicamente para clubes de volley playa, BeachLiga capacita a administradores, entrenadores y jugadores por igual para enfocarse en lo que hacen mejor: disfrutar del juego.",
      author: "Obán, Mediterranean Beach Volley",
      download_1: "Bájate",
      download_2: "BeachLiga",
      download_3: "al movil.",
      download_4: "¡Es gratis!",
    },
    ger: {
      title: "Vereine und Organisationen",
      subtitle: "Verwalte einfach ",
      subtitle_part2: "die Veranstaltungen ",
      subtitle_part3: "deines Vereins",
      subsubtitle:
        "Mit BeachLiga war es noch nie so einfach, die Veranstaltungen deines Vereins zu erstellen und die Mitglieder zu verwalten.",
      part_1_title: "Erstelle und organisiere Veranstaltungen",
      part_1_desc:
        "In nur 2 Minuten kannst du die Veranstaltungen und Trainings deines Vereins erstellen und den Spielern ermöglichen, sich über unsere Plattform anzumelden.",
      part_2_title:
        "Verwalte Vereinsmitglieder und erhalte Zahlungen automatisch",
      part_2_desc:
        "Mit Beachliga kannst du jederzeit den Status deiner Trainings sehen: Anzahl der Teilnehmer, Zahlungsstatus, Anwesenheit usw.",
      part_3_title: "Platzbuchung",
      part_3_desc:
        "Mit Beachliga kannst du den Spielern die Möglichkeit bieten, einen Platz kostenlos oder gegen Gebühr zu buchen.",
      part_4_title: "Echtzeit-Ergebnisse",
      part_4_desc:
        "Verfolge die Spiele ohne einen einzigen Moment zu verpassen! Mit unserer Echtzeit-Ergebnisfunktion bleibst du direkt auf deinem Gerät über alle Spiele informiert.",
      number_1: "+1.500",
      circle_1: "Veranstaltungen",
      number_2: "+25",
      circle_2: "Vereine",
      quote:
        "BeachLiga ist die perfekte App, um alles zu verwalten, was im Verein passiert. Von der Terminierung von Spielen bis zur Verfolgung von Spielerstatistiken und von der Verwaltung von Mitgliedschaften bis zur Koordination von Veranstaltungen vereinfacht BeachLiga alle Aktivitäten des Vereins auf einer Plattform. Mit intuitiven Funktionen, die speziell für Beachvolleyballvereine entwickelt wurden, befähigt BeachLiga Administratoren, Trainer und Spieler gleichermaßen, sich auf das zu konzentrieren, was sie am besten können: Beachvolleyball.",
      author: "Obán, Mediterranean Beach Volley",
      download_1: "Lade",
      download_2: "BeachLiga",
      download_3: "auf dein Handy herunter.",
      download_4: "Es ist kostenlos!",
    },
  };

  return (
    <div className="relative overflow-hidden text-gray-800">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="bg-beachliga_grey">
        <div className="pt-6 lg:pt-12 lg:pb-0 px-6 lg:px-12 max-w-[1200px] mx-auto relative z-10 text-white">
          <h3 className="text-center text-2xl lg:text-4xl font-[400] mb-6 mt-12 ">
            <span className="text-beachliga_blue">
              {translations[language].title}
            </span>
          </h3>
          <h2 className="text-center text-5xl lg:text-6xl mx-auto font-[500] mb-16 pb-20 lg:pb-28 w-2/3 font-[gotham-bold]">
            <span className="">{translations[language].subtitle}</span>
            <span className="text-beachliga_yellow">
              {translations[language].subtitle_part2}
            </span>
            {translations[language].subtitle_part3}
          </h2>
        </div>
      </div>
      <div className="flex items-center lg:items-start lg:flex-row flex-col mb-32 max-w-[1200px] px-6 mx-auto mt-[60px] lg:mt-[200px] lg:h-[860px]">
        <div className="lg:w-1/2 lg:pr-12 flex flex-col justify-between min-h-[100%]">
          <div className="mb-8 lg:mb-0">
            <h4 className="text-3xl lg:text-4xl font-[400] mb-10 font-[gotham-bold]">
              {translations[language].subsubtitle}
            </h4>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-3 icon-blue"
                size="xl"
              />
              <h5 className="text-xl font-[gotham-body] font-[400]">
                {translations[language].part_1_title}
              </h5>
            </div>
            <p className="text-md  mb-4">
              {translations[language].part_1_desc}
            </p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-3 icon-blue"
                size="xl"
              />
              <h5 className="text-xl font-[gotham-body] font-[400]">
                {translations[language].part_2_title}
              </h5>
            </div>
            <p className="text-md  mb-4">
              {translations[language].part_2_desc}
            </p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-3 icon-blue"
                size="xl"
              />
              <h5 className="text-xl font-[gotham-body] font-[400]">
                {translations[language].part_3_title}
              </h5>
            </div>
            <p className="text-md mb-4">{translations[language].part_3_desc}</p>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-3 icon-blue"
                size="xl"
              />
              <h5 className="text-xl font-[gotham-body] font-[400]">
                {translations[language].part_4_title}
              </h5>
            </div>
            <p className="text-md mb-4">{translations[language].part_4_desc}</p>
          </div>
          <div className="flex justify-around  mb-20 lg:mb-0">
            <div className="flex flex-col justify-center items-center ">
              <p className="font-[gotham-body] text-beachliga_blue flex flex-col text-2xl  w-[150px] h-[150px] border-[3px] border-beachliga_blue rounded-[100%] flex justify-center items-center text-center">
                {translations[language].number_1}
                <br />
                {language === "ger" ? (
                  <span className="text-sm">
                    {translations[language].circle_1}
                  </span>
                ) : (
                  <span>{translations[language].circle_1}</span>
                )}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-[gotham-body] text-beachliga_blue text-2xl flex flex-col w-[150px] h-[150px] border-[3px] border-beachliga_blue rounded-[100%] flex justify-center items-center text-center">
                {translations[language].number_2}
                <br />
                {language === "ger" ? (
                  <span className="text-sm">
                    {translations[language].circle_2}
                  </span>
                ) : (
                  <span>{translations[language].circle_2}</span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative flex justify-around">
            <img
              src="./assets/qr_torneo.png"
              className="hidden md:block rounded-xl shadow-2xl w-1/2 lg:w-full"
            />
            <img
              src="./assets/app.png"
              className="rounded-xl lg:absolute lg:top-[-100px] right-[0px] w-[300px] shadow-2xl w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-12 bg-beachliga_grey">
        <div className="relative flex max-w-[1200px] mx-auto py-6 flex-col justify-center items-center lg:flex-row lg:items-center  p-12  text-white rounded-[20px]">
          <div>
            <div className="flex flex-col mt-[50px]">
              <div>
                <div className="text-2xl">
                  <div className="mb-6 mx-auto flex flex-col lg:flex-row">
                    <img
                      src="./assets/quotes_1.png"
                      className="w-[100px] h-[80px] mr-6 mb-4 lg:mb-0"
                    />
                    <p className="text-xl mb-6 lg:mb-0">
                      {translations[language].quote}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-12">
                <div className="flex flex-col items-center justify-end">
                  <img
                    src="./assets/oban_min.jpg"
                    className="rounded-full w-[150px] mb-4"
                    alt="oban"
                  />
                  <p className="text-base">{translations[language].author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sand pt-32 flex items-center">
        <div className="max-w-[1200px] mx-auto pb-12  px-6 lg:px-12 flex items-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-6 items-center mb-12">
                <img
                  src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
                  className="w-[100px] xl:w-[135px]"
                  alt="qr-code"
                />
                <div className="text-xl lg:text-3xl text-black">
                  {translations[language].download_1}
                  <br />
                  <span className="">{translations[language].download_2}</span>
                  <br /> {translations[language].download_3}
                  <br />
                  <span className="font-[gotham-body] font-bold">
                    {translations[language].download_4}
                  </span>
                </div>
              </div>
              <div className="flex space-x-6 mb-12">
                <a
                  href="https://apple.co/4asnKF5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/apple.png" className="h-[60px]" />
                </a>
                <a
                  href="https://bit.ly/beachliga-google-play"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/google_play3.png" className="h-[60px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Clubes;
