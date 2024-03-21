import React from "react";

const Clientes = () => {
  return (
    <div className="bg-beachliga_blue py-24 px-16">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex flex-col text-white">
          <div className="text-6xl mb-12">
            Nuestra
            <br /> trayectoria
            <br /> es tu confianza
          </div>
          <div className="text-2xl">
            Más de tres años organizando y gestionando
            <br /> competiciones por toda España.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-5xl text-white border-4 rounded-full w-60 h-60">
            +26
            <br /> <span className="text-3xl"> clubs</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-5xl text-white border-4 rounded-full w-60 h-60">
            +1000
            <br /> <span className="text-3xl"> usuarios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
