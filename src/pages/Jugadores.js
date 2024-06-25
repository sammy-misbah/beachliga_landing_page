import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Jugadores = ({ language, setLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const translations = {
    en: {
      title: "Players",
      subtitle: "Find clubs and events ",
      subtitle_part2: " near you",
      subsubtitle:
        "Whether you want to learn to play, find a group at your level, or sign up for tournaments, Beachliga is the app you need.",
      part_1_title: "Find players near you",
      part_1_desc:
        "Find the closest clubs, sign up for classes, connect with players in your area, and start playing!",
      part_2_title: "Sign up for tournaments",
      part_2_desc:
        "If you're eager to compete, with Beachliga you can register securely and easily for tournaments.",
      part_3_title: "Find your ideal partner",
      part_3_desc:
        "Get in touch with players in your area and find your partner for the next meet-up or tournament.",
      part_4_title: "Explore the Beachliga player community",
      part_4_desc:
        "With Beachliga, you're not just joining a sports app, you're becoming part of a dynamic and supportive community of players, coaches, and enthusiasts passionate about Beach Volley.",
      number_1: "+25.000",
      circle_1: "players",
      number_2: "+100.000",
      circle_2: "matches",
      quote:
        "I've registered for dozens of tournaments using Beachliga. The process is efficient and super easy. With Beachliga, I can sign up for tournaments quickly and effortlessly, without any complications or delays. The app's intuitive interface guides me step by step, from selecting the tournament to paying the registration fee, allowing me to focus on preparing for the competition. Additionally, Beachliga offers a wide variety of tournaments in different locations and skill levels, providing me with the opportunity to participate in exciting and challenging events at all times. I can't recommend it enough for all beach volleyball enthusiasts looking to take their game to the next level!",
      author: "Julia, national player",
      download_1: "Download",
      download_2: "BeachLiga",
      download_3: "on your mobile.",
      download_4: "It's free.",
    },
    es: {
      title: "Jugadores",
      subtitle: "Encuentra los clubes y eventos ",
      subtitle_part2: "cerca de ti",
      subsubtitle:
        "Ya sea que quieres aprender a jugar, encontrar un grupo de tu nivel o apuntarte a torneos, Beachliga es la App que necesitas.",
      part_1_title: "Encuentra a jugadores cerca de ti",
      part_1_desc:
        "Busca los clubes mas cercanos, apuntate a clases, conecta con jugadores de tu zona y empieza a jugar!",
      part_2_title: "Apúntate a torneos",
      part_2_desc:
        "Si tienes ganas de competir, con Beachliga podras registrarte de forma segura y sencilla a los torneos.",
      part_3_title: "Encuentra tu pareja ideal",
      part_3_desc:
        "Ponte en contacto con jugadores de tu zona y encuentra tu pareja para la proxima quedada o para el proximo torneo.",
      part_4_title: "Explora la comunidad de jugadores de Beachliga",
      part_4_desc:
        "Con Beachliga, no solo estás uniéndote a una aplicación deportiva, te estás convirtiendo en parte de una comunidad dinámica y solidaria de jugadores, entrenadores y entusiastas apasionados por el vóley playa.",
      number_1: "+25.000",
      circle_1: "jugadores",
      number_2: "+100.000",
      circle_2: "partidos",
      quote:
        "He registrado decenas de torneos utilizando Beachliga. El proceso es eficiente y súper fácil de realizar. Con Beachliga, puedo inscribirme en torneos de manera rápida y sencilla, sin complicaciones ni demoras. La interfaz intuitiva de la aplicación me guía paso a paso, desde la selección del torneo hasta el pago de la inscripción, lo que me permite concentrarme en prepararme para la competencia. Además, Beachliga ofrece una amplia variedad de torneos en diferentes ubicaciones y niveles de habilidad, lo que me brinda la oportunidad de participar en eventos emocionantes y desafiantes en todo momento. ¡No puedo recomendarlo lo suficiente para todos los amantes del vóley playa que deseen llevar su juego al siguiente nivel!",
      author: "Julia, jugadora nacional",
      download_1: "Bájate",
      download_2: "BeachLiga",
      download_3: "al movil.",
      download_4: "Es gratis.",
    },
    ger: {
      title: "Spieler",
      subtitle: "Finde Vereine und Veranstaltungen ",
      subtitle_part2: "in deiner Nähe",
      subsubtitle:
        "Egal, ob du lernen möchtest zu spielen, eine Trainingsgruppe auf deinem Niveau finden möchtest oder an Turnieren teilnehmen möchtest, Beachliga ist die App, die du brauchst.",
      part_1_title: "Finde Spieler in deiner Nähe",
      part_1_desc:
        "Suche die nächstgelegenen Vereine, melde dich zu Kursen an, vernetze dich mit anderen Spielern in deiner Region!",
      part_2_title: "Melde dich zu Turnieren an",
      part_2_desc:
        "Wenn du Lust auf Turniere hast, kannst du dich mit Beachliga sicher und einfach für diese anmelden.",
      part_3_title: "Finde deinen perfekten Partner",
      part_3_desc:
        "Nimm Kontakt mit Spielern in deiner Region auf und finde deinen Partner auf deinem Niveau für das nächste Treffen oder das nächste Turnier.",
      part_4_title: "Erkunde die Beachliga-Community",
      part_4_desc:
        "Mit Beachliga trittst du nicht nur einer Sport-App bei, sondern wirst Teil der größten Beachvolleyball Community Europas, Trainern und Vereinen, die alle für Beachvolleyball brennen. ",
      number_1: "+25.000",
      circle_1: "Spieler",
      number_2: "+100.000",
      circle_2: "Spiele",
      quote:
        "Ich habe mich für Dutzende von Turnieren über Beachliga registriert. Der Prozess ist super einfach. Mit Beachliga kann ich mich in Sekunden unkompliziert für Turniere anmelden. Die intuitive Benutzeroberfläche der App führt mich Schritt für Schritt durch die Auswahl des Turniers bis hin zur Zahlung der Anmeldegebühr. Darüber hinaus bietet Beachliga eine Vielzahl von Turnieren an verschiedenen Standorten und Nievaustufen. Ich kann es allen Beachvolleyball-Liebhabern nur wärmstens empfehlen, die ihr Spiel auf das nächste Level bringen möchten!",
      author: "Julia, nationale Spielerin",
      download_1: "Lade",
      download_2: "BeachLiga",
      download_3: "auf dein Handy herunter.",
      download_4: "Es ist kostenlos.",
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
          <h2 className="text-center text-5xl lg:text-6xl mx-auto font-[500] mb-16 pb-20 lg:pb-28 w-2/3 font-[gotham-bold] flex flex-col items-center">
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
              src="./assets/sammy.png"
              className="hidden md:block rounded-xl shadow-2xl w-1/2 lg:w-full"
            />
            <img
              src="./assets/jugadores_app.png"
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
                    src="./assets/julia_min.jpg"
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

export default Jugadores;
