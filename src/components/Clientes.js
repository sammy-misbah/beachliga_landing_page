import React from "react";

const Clientes = () => {
  return (
    <div className="bg-beachliga_blue py-24 px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex flex-col text-white mb-12 lg:mb-0">
          <div className="text-4xl text-center md:text-left md:text-6xl mb-12">
            Nuestra
            <br /> trayectoria
            <br /> es tu confianza
          </div>
          <div className=" text-xl md:text-2xl text-center md:text-left">
            Más de tres años organizando y gestionando
            <br /> competiciones por toda España.
          </div>
        </div>
        <div className="flex space-x-12">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl md:text-5xl text-white border-4 rounded-full w-40 h-40 md:w-60 md:h-60">
              +26
              <br /> <span className="text-3xl"> clubs</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl md:text-5xl text-white border-4 rounded-full w-40 h-40 md:w-60 md:h-60">
              +1000
              <br /> <span className="text-3xl"> usuarios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
