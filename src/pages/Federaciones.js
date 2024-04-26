import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Federaciones = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: "Federations",
      subtitle: "Manage your ",
      subtitle_part2: "community ",
      subtitle_part3: "events",
      subsubtitle:
        "Beachliga allows you to manage licenses and track results for clubs and players in your community.",
      part_1_title: "License management for federated players",
      part_1_desc:
        "With Beachliga, players can easily upload their licenses and have access to federated tournaments.",
      part_2_title: "Updated federal ranking",
      part_2_desc:
        "Follow the updated ranking of players and clubs from the federation after each event.",
      part_3_title: "Creation of federated events",
      part_3_desc:
        "With Beachliga, you can create events for federated players of all ages in just a few clicks.",
      part_4_title: "Results of all federated players",
      part_4_desc:
        "With just a few clicks, players, coaches, and fans alike can track the progress of federated players, analyze performance trends, and celebrate their successes.",
      number_1: "+750",
      circle_1: "federated players",
      number_2: "+300",
      circle_2: "federated events",
      quote:
        "BeachLiga allows us to manage all events in the Valencian Community in one place efficiently and conveniently. From local tournaments to regional competitions, our centralized platform provides a comprehensive overview of all beach volleyball-related activities in the region. With BeachLiga, we can easily organize and coordinate every event, from initial planning to execution and follow-up.",
      author: "Nuria, Valencian Volleyball Federation",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Federaciones",
      subtitle: "Gestiona los eventos de tu ",
      subtitle_part2: "comunidad",
      subsubtitle:
        "Beachliga te permite gestionar las licencias y seguir los resultados de los clubes y jugadores de tu comunidad.",
      part_1_title: "Gestión de licencias para jugadores federados",
      part_1_desc:
        "Con Beachliga, los jugadores podran subir de forma sencilla sus licencias y tener acceso a los torneos federados.",
      part_2_title: "Ranking federal actualizado",
      part_2_desc:
        "Sigue el ranking actualizado de jugadores y clubes de la federación después de cada evento.",
      part_3_title: "Creación de eventos federados",
      part_3_desc:
        "Con Beachliga, puedes crear eventos para jugadores federados de todas las edades en unos clics.",
      part_4_title: "Resultados de todos los jugadores federados",
      part_4_desc:
        "Con solo unos pocos clics, tanto jugadores, entrenadores como fanáticos pueden seguir el progreso de los jugadores federados, analizar tendencias de rendimiento y celebrar sus éxitos.",
      number_1: "+750",
      circle_1: "jugadores federados",
      number_2: "+300",
      circle_2: "eventos federados",
      feature_1: "Gestión de licencias",
      feature_2: "Ranking federal actualizado a cada evento",
      feature_3: "Organización y creación de eventos federados",
      feature_4: "Resultados de todos los jugadores federados",
      quote:
        "BeachLiga nos permite gestionar todos los eventos en la Comunidad Valenciana en un solo lugar de manera eficiente y conveniente. Desde torneos locales hasta competiciones regionales, nuestra plataforma centralizada ofrece una visión completa de todas las actividades relacionadas con el vóley playa en la región. Con BeachLiga, podemos organizar y coordinar cada evento con facilidad, desde la planificación inicial hasta la ejecución y el seguimiento posterior.",
      author: "Nuria, Federación Valenciana de Voleibol",
      download_1: "Bájate",
      download_2: "BeachLiga",
      download_3: "al movil.",
      download_4: "Es gratis.",
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
            <div className="flex flex-col justify-center items-center">
              <p className="font-[gotham-body] text-beachliga_blue text-2xl  w-[160px] h-[160px] border-[3px] border-beachliga_blue rounded-[100%] flex flex-col justify-center items-center text-center">
                {translations[language].number_1}
                <br />
                {translations[language].circle_1}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-[gotham-body] text-beachliga_blue text-2xl  w-[160px] h-[160px] border-[3px] border-beachliga_blue rounded-[100%] flex justify-center items-center text-center">
                {translations[language].number_2}
                <br /> {translations[language].circle_2}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative flex justify-around">
            <img
              src="./assets/torneo_bl1.jpg"
              className="hidden md:block rounded-xl shadow-2xl w-1/2 lg:w-full"
            />
            <img
              src="./assets/federacion_app.png"
              className="rounded-xl lg:absolute lg:top-[-100px] right-[0px] w-[300px] shadow-2xl w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-12 bg-beachliga_grey">
        <div className=" relative flex max-w-[1200px] mx-auto py-6 flex-col justify-center items-center lg:flex-row lg:items-center  p-12  text-white rounded-[20px]">
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
                    src="./assets/nuria_min.jpg"
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
      <div className="bg-sand pt-32 flex items-center h-[300px] md:h-auto">
        <div className="max-w-[1200px] mx-auto pb-12  px-6 lg:px-12 flex items-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-6 items-center mb-12">
                <img
                  src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
                  className="w-[100px] lg:w-[135px]"
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

export default Federaciones;
