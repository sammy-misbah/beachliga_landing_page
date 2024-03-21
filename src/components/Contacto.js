import React from "react";

const Contacto = () => {
  return (
    <div className="bg-beachliga_blue">
      <div className="max-w-[1200px] mx-auto py-24">
        <div className="flex flex-col">
          <h2 className="text-white text-6xl font-[400] mb-12">Contacto</h2>
          <form className="flex flex-col  w-1/2">
            <div className="flex mb-6">
              <input
                className="py-4 px-5 rounded-md w-1/2 mr-6"
                label="nombre"
                placeholder="Nombre"
              />
              <input
                className="py-4 px-5 rounded-md w-1/2"
                label="apellido"
                placeholder="Apellido"
              />
            </div>
            <div className="flex mb-6">
              <input
                className="py-4 px-5 rounded-md w-1/2 mr-6"
                label="correo"
                placeholder="Correo"
              />
              <span className="w-1/2"></span>
            </div>
            <div>
              <textarea
                className="py-4 px-5 rounded-md w-full mb-6"
                rows={5}
                placeholder="Escríbenos un mensaje"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[150px] bg-black text-white py-3 px-4 rounded-full font-[400]"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
