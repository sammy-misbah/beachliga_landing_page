import React from "react";

const Home = () => {
  return (
    <div className="bg-beachliga_grey h-[calc(100vh-65px)]">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center m-6 py-6">
          <h1 className="text-6xl text-beachliga_blue font-[300] mb-6">
            Descubre una
            <br /> nueva forma de
            <br /> hacer <span className="text-beachliga_yellow">deporte</span>
          </h1>
          <h2 className="text-2xl text-white font-[300] mb-16">
            Crea y gestiona tus competiciones
            <br /> y eventos desde una misma app,
            <br /> de forma fácil y sencilla.
          </h2>
          <div className="flex flex-col items-center w-max">
            <img
              src="./assets/qr_code.png"
              className="w-[135px] mb-6"
              alt="qr-code"
            />
            <h3 className="text-3xl text-white mb-12">
              ¡Descarga nuestra app!
            </h3>
          </div>
          <div className="flex items-center space-x-8">
            <img
              src="./assets/google_play3.png"
              className="w-[182px] h-[47px]"
              alt="google-play"
            />
            <img
              src="./assets/apple.png"
              className="w-[141px] h-[47px]"
              alt="apple"
            />
          </div>
        </div>
        <div className="flex flex-col py-12 relative h-[calc(100vh-56px)]">
          <img
            src="./assets/training_screenshot.png"
            className="min-w-[315px] rounded-[35px] absolute right-[60px] top-[70px]"
            alt="training_screenshot"
          />
          <img
            src="./assets/login_screenshot.png"
            className="min-w-[315px] rounded-[35px] absolute right-[120px] top-[150px]"
            alt="matches_screenshot"
          />
          <div className="absolute top-[600px] right-[380px] bg-white w-[200px] text-xs px-4 py-4 rounded-lg">
            <div className="flex space-x-1 mb-3">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
            </div>
            <span className="font-semibold  text-beachliga_neutral">
              Puedo crear un torneo en menos de 1 minuto y ver fácilmente quién
              se ha inscrito
            </span>
          </div>
          <div className="absolute top-[250px] right-[-100px] bg-white w-[200px] text-xs px-4 py-4 rounded-lg">
            <div className="flex space-x-1 mb-3">
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
              <img src="./assets/star.png" />
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
