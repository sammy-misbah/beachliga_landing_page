import React from "react";

const Home = () => {
  return (
    <div className="bg-beachliga_grey lg:h-[calc(100vh-65px)]">
      <div className="flex flex-col max-w-[1200px] mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center lg:items-start lg:h-[calc(100vh-65px)] my-6 mx-12 py-6">
          <h1 className="text-center text-6xl text-beachliga_blue font-[400] mb-6 lg:text-start">
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
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center py-12 relative h-[calc(100vh+250px)]">
            <img
              src="./assets/training_screenshot.png"
              className="hidden lg:block min-w-[320px] rounded-[35px] lg:absolute right-[100px] lg:right-[70px] top-[50px] shadow-2xl border-[5px] border-beachliga_neutral"
              alt="training_screenshot"
            />
            <img
              src="./assets/login_screenshot.png"
              className="min-w-[320px] rounded-[35px] lg:absolute right-[170px] lg:right-[140px] top-[130px] shadow-2xl border-[5px] border-beachliga_neutral"
              alt="matches_screenshot"
            />
            <div className="hidden xl:block absolute top-[560px] right-[390px] bg-white w-[200px] text-sm px-4 py-3 rounded-lg">
              <div className="flex space-x-1 mb-2">
                <img src="./assets/star.png" alt="star" />
                <img src="./assets/star.png" alt="star" />
                <img src="./assets/star.png" alt="star" />
                <img src="./assets/star.png" alt="star" />
                <img src="./assets/star.png" alt="star" />
              </div>
              <span className="font-semibold  text-beachliga_neutral">
                Puedo crear un torneo en menos de 1 minuto y ver fácilmente
                quién se ha inscrito
              </span>
            </div>
            <div className="hidden xl:block absolute top-[210px] right-[-90px] bg-white w-[200px] text-sm px-4 py-3 rounded-lg">
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
    </div>
  );
};

export default Home;
