import React, { useEffect } from "react";

const Home = ({ language }) => {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorDiv = document.getElementById(anchor);
      if (anchorDiv) {
        anchorDiv.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const translations = {
    en: {
      title_1: "",
      title_2: "Discover a new",
      title_3: "way to do",
      title_4: "sports",
      subtitle_1: "Create and manage your",
      subtitle_2: "competitions and events all in",
      subtitle_3: "one easy-to-use app.",
      download: "Download our app!",
      testimony_1:
        "I can create a tournament in less than 1 minute and easily see who has registered!",

      testimony_2: "A great app to find training partners!",
    },
    es: {
      title_1: "Descubre una",
      title_2: "nueva forma de",
      title_3: "hacer",
      title_4: "deporte",
      subtitle_1: "Crea y gestiona tus competiciones",
      subtitle_2: "y eventos desde una misma app",
      subtitle_3: "de forma fácil y sencilla.",
      download: "¡Descarga nuestra app!",
      testimony_1:
        "Puedo crear un torneo en menos de 1 minuto y ver fácilmente quién se ha inscrito",
      testimony_2: "Una app genial para encontrar con quién entrenar",
    },
  };
  return (
    <div className="bg-beachliga_grey">
      <div className="flex max-w-[1200px] mx-auto justify-between py-20 h-fit lg:px-12 flex-col items-center md:items-start md:flex-row">
        <div className="flex flex-col h-fit items-center xl:items-start md:w-1/2 mx-12 lg:mx-0">
          <h1 className="text-center text-4xl xl:text-5xl text-beachliga_blue font-[400] mb-6 xl:text-start">
            {translations[language].title_1}
            <br /> {translations[language].title_2}
            <br /> {translations[language].title_3}
            <span className="text-beachliga_yellow">
              {" "}
              {translations[language].title_4}
            </span>
          </h1>
          <h2 className="text-center text-lg xl:text-start lg:text-xl xl:text-2xl text-white  mb-6 xl:mb-16">
            {translations[language].subtitle_1}
            <br /> {translations[language].subtitle_2}
            <br /> {translations[language].subtitle_3}
          </h2>
          <div className="flex flex-col items-center">
            <div className="hidden md:flex md:flex-col items-center w-max">
              <img
                src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
                className="w-[100px] xl:w-[135px] mb-6"
                alt="qr-code"
              />
              <h3 className=" text-xl xl:text-3xl text-white  mb-6 lg:mb-12">
                {translations[language].download}
              </h3>
            </div>
            <div className="flex items-center space-x-8 mb-12 lg:mb-0">
              <a
                href="https://bit.ly/beachliga-google-play"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/google_play3.png"
                  className="h-[40px] lg:h-[50px]"
                />
              </a>
              <a
                href="https://apple.co/4asnKF5"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/apple.png"
                  className="h-[40px] lg:h-[50px]"
                  alt="apple"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex relative mx-12 lg:mx-0">
          <img
            src="./assets/training_screenshot.png"
            className="hidden lg:block min-w-[200px] xl:min-w-[250px] rounded-[35px] lg:absolute lg:right-[150px] xl:right-[80px] top-[0px] shadow-2xl border-[5px] border-beachliga_neutral"
            alt="training_screenshot"
          />
          <img
            src="./assets/login_screenshot.png"
            className="min-w-[200px] xl:min-w-[250px] rounded-[35px] lg:absolute lg:right-[220px] xl:right-[150px] top-[80px] shadow-2xl border-[5px] border-beachliga_neutral"
            alt="matches_screenshot"
          />
          <div className="hidden xl:block absolute top-[400px] right-[340px] bg-white w-[200px] text-sm px-4 py-3 rounded-lg">
            <div className="flex space-x-1 mb-2">
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
            </div>
            <span className="font-semibold  text-beachliga_neutral">
              {translations[language].testimony_1}
            </span>
          </div>
          <div className="hidden xl:block absolute top-[140px] right-[-80px] bg-white w-[200px] text-sm px-4 py-3 rounded-lg">
            <div className="flex space-x-1 mb-2">
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
              <img src="./assets/star.png" alt="star" />
            </div>
            <span className="font-semibold  text-beachliga_neutral">
              {translations[language].testimony_2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
