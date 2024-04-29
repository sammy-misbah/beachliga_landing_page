import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Entrenadores = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: "Coaches",
      subtitle: "Plan, manage, ",
      subtitle_part2: "and communicate efficiently",
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
      part_4_title: "Trainings and events notifications",
      part_4_desc:
        "Stay updated on your training sessions and sporting events with our real-time notifications. Never miss a training session or important event thanks to our app.",
      number_1: "+1.000",
      circle_1: "trainings",
      number_2: "+10.000",
      circle_2: "students",
      quote:
        "With Beachliga, I can effortlessly keep track of the number of students in each group and easily communicate with them directly. Whether it's organizing training sessions, coordinating events, or simply providing updates, Beachliga's user-friendly interface streamlines communication, allowing me to focus more on coaching and less on administrative tasks. Plus, with the ability to send notifications and messages in real-time, I can ensure that everyone is informed and engaged, enhancing the overall experience for both students and coaches.",
      author: "Blai, Coach at Beachbol",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Entrenadores",
      subtitle: "Planifica, gestiona ",
      subtitle_part2: "y comunica de manera eficiente",
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
      part_4_title: "Notificaciones de entrenamientos y eventos",
      part_4_desc:
        "Mantente al tanto de tus entrenamientos y eventos deportivos con nuestras notificaciones en tiempo real. Nunca te pierdas una sesión de entrenamiento o un evento importante gracias a nuestra aplicación.",
      number_1: "+1.000",
      circle_1: "entrenamientos",
      number_2: "+10.000",
      circle_2: "alumnos",
      quote:
        "Con Beachliga, puedo mantener un seguimiento sin esfuerzo del número de estudiantes en cada grupo y comunicarme fácilmente con ellos directamente. Ya sea organizando sesiones de entrenamiento, coordinando eventos o simplemente proporcionando actualizaciones, la interfaz de Beachliga simplifica la comunicación, permitiéndome enfocarme más en la enseñanza y menos en las tareas administrativas. Además, con la capacidad de enviar notificaciones y mensajes en tiempo real, puedo asegurarme de que todos estén informados y comprometidos, mejorando la experiencia general tanto para los estudiantes como para los entrenadores.",
      author: "Blai, Entrenador del Beachbol",
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
            <span className="text-beachliga_yellow">
              {translations[language].subtitle}
            </span>
            <span className="">{translations[language].subtitle_part2}</span>
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
                <span className={language == "es" ? "text-lg" : ""}>
                  {translations[language].circle_1}
                </span>
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
              src="./assets/manu_fabio.png"
              className="hidden md:block rounded-xl shadow-2xl w-1/2 lg:w-full"
            />
            <img
              src="./assets/entrenadores_app.png"
              className="rounded-xl lg:absolute lg:top-[-100px] right-[0px] w-[300px] shadow-2xl w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-12 bg-beachliga_grey">
        <div className=" relative flex max-w-[1200px] mx-auto   py-6 flex-col justify-center items-center lg:flex-row lg:items-center  p-12  text-white rounded-[20px]">
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
                    src="./assets/blai_min.jpg"
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

export default Entrenadores;
