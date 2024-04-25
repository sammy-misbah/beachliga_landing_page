import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clubes = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: "Clubs and organizations",
      subtitle: "Easily manage your club's events",
      subsubtitle:
        "With Beachliga, creating events for your club and managing members has never been easier.",
      part_1_title: "Create and organize events",
      part_1_desc:
        "In just 2 minutes, you can create events and training sessions for your club and allow players to sign up through our platform.",
      part_2_title: "Manage club members and students",
      part_2_desc:
        "With Beachliga, you can see the status of your training sessions at any time: number of students, payment status, attendance, etc...",
      part_3_title: "Court reservation",
      part_3_desc:
        "With Beachliga, you can give players the opportunity to reserve a court for free or by paying.",
      title_2: "Create your events in 2 clicks.",
      feature_1: "Tournament and training creation in 2 clicks.",
      feature_2: "Simple and secure payment management",
      feature_3: "Court reservation system",
      feature_4: "Real-time results",
      quote:
        "BeachLiga is the perfect app to manage everything happening at the club",
      author: "Obán, Mediterranean Beach Volley",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Clubes y organizaciónes",
      subtitle: "Gestiona de manera sencilla los eventos de tu club",
      subsubtitle:
        "Con Beachliga, crear los eventos de tu club y gestionar los miembros nunca ha sido tan fácil.",
      part_1_title: "Crea y organiza eventos",
      part_1_desc:
        "En solo 2 minutos, podras crear los eventos y entrenamientos de tu club y permitir a los jugadores de apuntarse a través de nuestra plataforma.",
      part_2_title: "Gestiona los miembros y alumnos del club",
      part_2_desc:
        "Con Beachliga, podras ver en cada momento el estado de tus entrenamientos: numero de alumnos, estado de pago, asistencia etc...",
      part_3_title: "Reserva de pistas",
      part_3_desc:
        "Con Beachliga, puedes ofrecer a los jugadores la posibilidad de reservar una cancha de forma gratuita o pagando.",
      title_2: "Crea tus eventos en 2 clics",
      feature_1: "Creación de torneos y entrenamientos en 2 clics",
      feature_2: "Gestión de pagos sencilla y segura",
      feature_3: "Sistema de reserva de pistas",
      feature_4: "Resultados en tiempo real",
      quote:
        "BeachLiga es la App perfecta para gestionar todo lo que pasa en el club",
      author: "Simone, Encargado del BeachBol",
      download_1: "Bájate",
      download_2: "BeachLiga",
      download_3: "al movil.",
      download_4: "Es gratis.",
    },
  };

  return (
    <div className="relative bg-white overflow-hidden text-gray-800">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="pt-6 lg:pt-24 lg:pb-0 px-6 lg:px-12 max-w-[1200px] mx-auto relative z-10">
        <h3 className="text-center text-2xl lg:text-4xl font-[400] mb-6  mt-12 ">
          {translations[language].title}
        </h3>
        <h2 className="text-center text-4xl lg:text-6xl mx-auto font-[500] mb-16 lg:mb-28 lg:w-2/3 font-[gotham-bold]">
          {translations[language].subtitle}
        </h2>
        <div className="flex items-center lg:items-start lg:flex-row flex-col-reverse mb-24">
          <div className="lg:w-1/2 lg:pr-12">
            <h4 className="text-3xl lg:text-4xl font-[400] mb-10 font-[gotham-bold]">
              {translations[language].subsubtitle}
            </h4>
            <h5 className="text-xl font-[400] mb-1">
              {translations[language].part_1_title}
            </h5>
            <p className="text-md  mb-4">
              {translations[language].part_1_desc}
            </p>
            <h5 className="text-xl font-[400] mb-1">
              {translations[language].part_2_title}
            </h5>
            <p className="text-md  mb-4">
              {translations[language].part_2_desc}
            </p>
            <h5 className="text-xl font-[400] mb-1">
              {translations[language].part_3_title}
            </h5>
            <p className="text-md  mb-4">
              {translations[language].part_3_desc}
            </p>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img src="./assets/qr_torneo.png" className="rounded-xl" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-5xl mx-auto font-[500] mb-24 lg:w-1/2 px-6 font-[gotham-bold]">
        {translations[language].title_2}
      </h2>
      <div className="max-w-[1200px] mx-auto  px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32">
          <div className="lg:w-1/2 flex lg:justify-center">
            <img src="./assets/app.png" className="rounded-[50px] shadow-2xl" />
          </div>
          <div className="lg:w-1/2 flex flex-col text-xl lg:text-[28px] font-[400]">
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>{translations[language].feature_1}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>{translations[language].feature_2}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>{translations[language].feature_3}</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>{translations[language].feature_4}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-beachliga_grey text-white  px-6 lg:px-12">
        <div className="flex max-w-[1200px] mx-auto  mb-32 py-16 flex-col items-center lg:flex-row lg:items-start">
          <div className="mb-6">
            <img
              src="./assets/oban_min.jpg"
              className="lg:mr-6 rounded-full w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl lg:text-3xl italic text-center">
              <div className="flex justify-center mb-6">
                <img src="./assets/star.png" className="w-[30px]" />
                <img src="./assets/star.png" className="w-[30px]" />
                <img src="./assets/star.png" className="w-[30px]" />
                <img src="./assets/star.png" className="w-[30px]" />
                <img src="./assets/star.png" className="w-[30px]" />
              </div>
              <div className="mb-12">"{translations[language].quote}"</div>
            </div>
            <div className="text-2xl flex justify-end">
              {translations[language].author}
            </div>
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
              <a
                href="https://apple.co/4asnKF5"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/apple.png" className="h-[70px]" />
              </a>
              <a
                href="https://bit.ly/beachliga-google-play"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/google_play3.png" className="h-[70px]" />
              </a>
            </div>
          </div>
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

export default Clubes;
