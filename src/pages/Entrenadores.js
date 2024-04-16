import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Entrenadores = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: "Coaches",
      subtitle: "Plan, manage, and communicate efficiently",
      subsubtitle:
        "With Beachliga, you can plan your training sessions, receive payments, and communicate with your students.",
      part_1_title: "Plan your training sessions",
      part_1_desc:
        "Create your training groups: choose the location, schedule, level, and get to know players in your area.",
      part_2_title: "Payment management",
      part_2_desc:
        "On Beachliga, we offer you simple and secure payment management: your students will have access to a secure payment platform, and you will receive the money immediately.",
      part_3_title: "Communicate with your students",
      part_3_desc:
        "Through our chat, you can send messages to club members, create groups, and communicate directly with your colleagues and students.",
      title_2: "Features that will save you hours of your valuable time.",
      feature_1: "Plan and create your training groups",
      feature_2: "Effective communication with club members",
      feature_3: "Training and event notifications",
      feature_4: "Private chat for each training group",
      quote:
        "With Beachliga, I can see how many students I have in each group and communicate directly with them",
      author: "Blai, Coach at Beachbol",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Entrenadores",
      subtitle: "Planifica, gestiona y comunica de manera eficiente",
      subsubtitle:
        "Con Beachliga, puedes planificar tus entrenamientos, recibir los pagos y comunicar con tus alumnos.",
      part_1_title: "Planifica tus entrenamientos",
      part_1_desc:
        "Crea tus grupos de entrenamientos: elije el lugar, el horario, el nivel y hazte conocer de los jugadores de tu zona.",
      part_2_title: "Gestión de pagos",
      part_2_desc:
        "En Beachliga, te ofrecemos una gestion de pagos sencilla y segura: tus alumnos tendran acceso a una plataforma de pago segura y recibiras el dinero de forma immediata.",
      part_3_title: "Comunica con tus alumnos",
      part_3_desc:
        "A través de nuestro chat, podras mandar mensajes a los miembros del club, crear grupos y comunicar directamente con tus colegas y alumnos.",
      title_2: "Funciones que te ahorrarán horas de tu valioso tiempo",
      feature_1: "Planifica y crea tus grupos de entrenamientos",
      feature_2: "Comunícacion efectiva con los miembros del club",
      feature_3: "Notificaciones de entrenamientos y eventos",
      feature_4: "Chat privado para cada grupo de entrenamiento",
      quote:
        "Con Beachliga, puedo ver cuantos alumnos tengo en cada grupo y comunicar directamente con ellos",
      author: "Blai, Entrenador del Beachbol",
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
            <p className="text-md  mb-4">
              {translations[language].part_1_desc}
            </p>
            <h5 className="text-xl font-[500] mb-1">
              {translations[language].part_2_title}
            </h5>
            <p className="text-md  mb-4">
              {translations[language].part_2_desc}
            </p>
            <h5 className="text-xl font-[500] mb-1">
              {translations[language].part_3_title}
            </h5>
            <p className="text-md  mb-4">
              {translations[language].part_3_desc}
            </p>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img src="./assets/manu_fabio.png" className="rounded-xl" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-5xl mx-auto font-[500] mb-24 lg:w-1/2 px-6">
        {translations[language].title_2}
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32 max-w-[1200px] mx-auto  px-6 lg:px-12">
        <div className="lg:w-1/2 flex lg:justify-center">
          <img
            src="./assets/entrenadores_app.png"
            className="rounded-[50px] shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col text-xl lg:text-[28px] font-[400]">
          <div className="flex pt-8 items-start lg:items-center">
            <img
              src="./assets/check_black.png"
              className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
            />
            <h4>{translations[language].feature_1}</h4>
          </div>
          <div className="flex pt-8 items-start lg:items-center">
            <img
              src="./assets/check_black.png"
              className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
            />
            <h4>{translations[language].feature_2}</h4>
          </div>
          <div className="flex pt-8 items-start lg:items-center">
            <img
              src="./assets/check_black.png"
              className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2 lg:pt-0"
            />
            <h4>{translations[language].feature_3}</h4>
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
      <div className="bg-beachliga_grey text-white  px-6 lg:px-12">
        <div className="flex flex-col mb-32 py-16 max-w-[1200px] mx-auto">
          <div className="text-3xl lg:text-4xl italic text-center">
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
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mb-24  px-6 lg:px-12">
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
      <Footer language={language} />
    </div>
  );
};

export default Entrenadores;
