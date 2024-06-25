import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Descarga = ({ language, setLanguage, isAndroid, isIOS }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: { title: "Download the App!" },
    es: { title: "¡Descarga la App!" },
    ger: {
      title: "Lade die App jetzt herunter!",
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <h4 className="font-[gotham-body] text-2xl xl:text-4xl mb-8">
          {translations[language].title}
        </h4>
        <img
          src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
          className="w-[150px] xl:w-[200px] mb-12"
          alt="qr-code"
        />
        {isAndroid ? (
          <div className="flex items-center space-x-8">
            <a
              href="https://bit.ly/beachliga-google-play"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/google_play3.png"
                className="h-[40px] lg:h-[50px]"
                alt="google_play"
              />
            </a>
          </div>
        ) : isIOS ? (
          <div className="flex items-center space-x-8">
            <a href="https://apple.co/4asnKF5" target="_blank" rel="noreferrer">
              <img
                src="./assets/apple.png"
                className="h-[40px] lg:h-[50px]"
                alt="apple"
              />
            </a>
          </div>
        ) : (
          <div className="flex items-center space-x-8">
            <a
              href="https://bit.ly/beachliga-google-play"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/google_play3.png"
                className="h-[40px] lg:h-[50px]"
                alt="google_play"
              />
            </a>
            <a href="https://apple.co/4asnKF5" target="_blank" rel="noreferrer">
              <img
                src="./assets/apple.png"
                className="h-[40px] lg:h-[50px]"
                alt="apple"
              />
            </a>
          </div>
        )}
      </div>
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Descarga;
