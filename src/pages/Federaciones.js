import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Federaciones = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: "Federations",
      subtitle: "Manage your community events",
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
      title_2: "Keep track of everything happening in your community",
      feature_1: "License management",
      feature_2: "Federal ranking updated after each event",
      feature_3: "Organization and creation of federated events",
      feature_4: "Results of all federated players",
      quote:
        "BeachLiga allows us to manage all events in the Valencian Community in one place",
      author: "Nuria, Valencian Volleyball Federation",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Federaciones",
      subtitle: "Gestiona los eventos de tu comunidad",
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
      title_2: "Sigue todo lo que pasa en tu comunidad",
      feature_1: "Gestión de licencias",
      feature_2: "Ranking federal actualizado a cada evento",
      feature_3: "Organización y creación de eventos federados",
      feature_4: "Resultados de todos los jugadores federados",
      quote:
        "BeachLiga nos permite gestionar todos los eventos de la Comunidad Valenciana en un mismo lugar",
      author: "Nuria, Federación Valenciana de Voleibol",
      download_1: "Bájate",
      download_2: "BeachLiga",
      download_3: "al movil.",
      download_4: "Es gratis.",
    },
  };

  return (
    <div className="relative bg-white text-gray-800 overflow-hidden">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="pt-6 lg:pt-24 lg:pb-0 px-6 lg:px-12 max-w-[1200px] mx-auto relative z-10">
        <h3 className="text-center text-2xl lg:text-4xl font-[400] mb-6 mt-12">
          {translations[language].title}
        </h3>
        <h2 className="text-center text-4xl lg:text-6xl mx-auto font-[500] mb-16 lg:mb-28 lg:w-2/3">
          {translations[language].subtitle}
        </h2>
        <div className="flex items-center lg:items-start lg:flex-row flex-col-reverse mb-24">
          <div className="lg:w-1/2 lg:pr-12">
            <h4 className="text-3xl lg:text-4xl font-[500] mb-10">
              {translations[language].subsubtitle}
            </h4>
            <h5 className="text-xl font-[500] mb-1">
              {translations[language].part_1_title}
            </h5>
            <p className="text-md mb-4">{translations[language].part_1_desc}</p>
            <h5 className="text-xl font-[500] mb-1">
              {translations[language].part_2_title}
            </h5>
            <p className="text-md mb-4">{translations[language].part_2_desc}</p>
            <h5 className="text-xl font-[500] mb-1">
              {translations[language].part_3_title}
            </h5>
            <p className="text-md mb-4">{translations[language].part_3_desc}</p>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img src="./assets/torneo_bl1.png" className="rounded-xl" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-5xl mx-auto font-[500] mb-24 lg:w-1/2 px-6">
        {translations[language].title_2}
      </h2>
      <div className="max-w-[1200px] mx-auto  px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32">
          <div className="lg:w-1/2 flex lg:justify-center">
            <img
              src="./assets/federacion_app.png"
              className="rounded-[50px] shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col text-xl lg:text-[28px] font-[400]">
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
              />
              <h4> {translations[language].feature_1}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
              />
              <h4> {translations[language].feature_2}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
              />
              <h4> {translations[language].feature_3}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
              />
              <h4>{translations[language].feature_4}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-beachliga_grey text-white  px-6 lg:px-12">
        <div className="flex flex-col mb-32 py-12 max-w-[1200px] mx-auto">
          <div className="text-3xl lg:text-4xl italic text-center">
            <div className="flex justify-center mb-6">
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
            </div>
            <div className="mb-12">{translations[language].quote}</div>
          </div>
          <div className="text-2xl flex justify-end">
            {translations[language].author}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-24  px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 items-center mb-12">
              <img
                src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
                className="w-[100px] xl:w-[135px]"
                alt="qr-code"
              />
              <div className="text-xl lg:text-3xl ">
                {translations[language].download_1}
                <br /> {translations[language].download_2}
                <br /> {translations[language].download_3}
                <br /> {translations[language].download_4}
              </div>
            </div>
            <div className="flex space-x-6 mb-12">
              <img src="./assets/apple.png" className="w-[200px]" />
              <img src="./assets/google_play.png" className="w-[200px]" />
            </div>
          </div>
          {/* <h3 className="text-6xl font-[500] mb-12">
            Regístrate en <br />
            solo 1 minuto
          </h3> */}
          <div className="hidden lg:flex w-1/2 justify-center">
            <img
              src="./assets/app_photo.png"
              className="app-transform rounded-[100%] w-[400px] h-[400px] "
            />
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Federaciones;
