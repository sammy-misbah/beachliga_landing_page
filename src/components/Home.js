import React from "react";

const Home = () => {
  return (
    <div className="columns-2 flex justify-center px-6 bg-beachliga_grey max-h-[calc(100vh-56px)]">
      <div id="col-1" className="flex flex-col justify-center">
        <h1>Descubre una nueva forma de hacer deporte</h1>
        <h2>
          Crea y gestiona tus competiciones y eventos desde una misma app, de
          forma fácil y sencilla
        </h2>
        <img src="./assets/qr_code.png" className="w-[135px]" alt="qr-code" />
        <h3>¡Descarga nuestra app!</h3>
        <div className="flex items-center">
          <img
            src="./assets/google_play.png"
            className="w-[182px]"
            alt="google-play"
          />
          <img
            src="./assets/apple.png"
            className="w-[141px] h-[47px]"
            alt="apple"
          />
        </div>
      </div>
      <div id="col-2" className="flex flex-col justify-center">
        <img src="./assets/empty_smartphone.png" alt="empty_smartphone" />
      </div>
    </div>
  );
};

export default Home;
