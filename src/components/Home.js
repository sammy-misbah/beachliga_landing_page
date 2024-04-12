import React from "react";

const Home = () => {
  return (
    <div className="bg-beachliga_grey">
      <div className="flex max-w-[1200px] mx-auto justify-between py-20 h-fit lg:px-12 flex-col items-center md:items-start md:flex-row">
        <div className="flex flex-col h-fit items-center xl:items-start md:w-1/2 mx-12 lg:mx-0">
          <h1 className="text-center text-4xl xl:text-5xl text-beachliga_blue font-[400] mb-6 xl:text-start">
            Descubre una
            <br /> nueva forma de
            <br /> hacer <span className="text-beachliga_yellow">deporte</span>
          </h1>
          <h2 className="text-center text-lg xl:text-start lg:text-xl xl:text-2xl text-white font-[300] mb-6 xl:mb-16">
            Crea y gestiona tus competiciones
            <br /> y eventos desde una misma app,
            <br /> de forma fácil y sencilla.
          </h2>
          <div className="hidden md:flex md:flex-col items-center w-max">
            <img
              src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
              className="w-[100px] xl:w-[135px] mb-6"
              alt="qr-code"
            />
            <h3 className=" text-xl xl:text-3xl text-white  mb-6 lg:mb-12">
              ¡Descarga nuestra app!
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
                className="h-[40px] xl:h-[47px]"
                alt="google-play"
              />
            </a>
            <a href="https://apple.co/4asnKF5" target="_blank" rel="noreferrer">
              <img
                src="./assets/apple.png"
                className="h-[40px] xl:h-[47px]"
                alt="apple"
              />
            </a>
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
              Puedo crear un torneo en menos de 1 minuto y ver fácilmente quién
              se ha inscrito
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
              Una app genial para encontrar con quién entrenar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
