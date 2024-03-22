import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-beachliga_blue h-[65px]">
      <div className=" flex w-[80%] max-w-[1200px] mx-auto items-center justify-between">
        <img
          src="./assets/vector_logo.png"
          className="w-20"
          alt="vector-logo"
        />
        <div className="space-x-12 text-white font-body text-sm">
          <a href="/">Inicio</a>
          <a href="/#funcionalidades">Funcionalidades</a>
          <a href="/#precios">Planes & Precios</a>
          <a href="/#noticias">Noticias</a>
          <a href="/#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
