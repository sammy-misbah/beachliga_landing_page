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
          <div className="flex flex-col items-center w-max">
            <img
              src="./assets/qr_code.png"
              className="w-[100px] xl:w-[135px] mb-6"
              alt="qr-code"
            />
            <h3 className=" text-xl xl:text-3xl text-white  mb-6 lg:mb-12">
              ¡Descarga nuestra app!
            </h3>
          </div>
          <div className="flex items-center space-x-8 mb-12 lg:mb-0">
            <img
              src="./assets/google_play3.png"
              className="h-[40px] xl:h-[47px]"
              alt="google-play"
            />
            <img
              src="./assets/apple.png"
              className="h-[40px] xl:h-[47px]"
              alt="apple"
            />
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
