import React from "react";

const Navbar = () => {
  const toggleBurger = () => {
    const btn = document.getElementById("burger");
    const nav = document.getElementById("menu");
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");
  };
  return (
    <nav className="flex bg-beachliga_blue h-[65px]">
      <div className="flex w-[80%] max-w-[1200px] mx-auto items-center justify-between">
        <img
          src="./assets/vector_logo.png"
          className="w-20"
          alt="vector-logo"
        />
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-white font-body text-sm">
          <a href="/">Inicio</a>
          <a href="/#funcionalidades">Funcionalidades</a>
          <a href="/#precios">Planes & Precios</a>
          <a href="/#noticias">Noticias</a>
          <a href="/#contacto">Contacto</a>
        </div>

        <div className="md:hidden">
          <div
            id="menu"
            className="absolute top-20 left-6 right-6 hidden flex-col items-center space-y-6 bg-beachliga_blue py-6 drop-shadow-md text-white"
          >
            <a href="/">Inicio</a>
            <a href="/#funcionalidades">Funcionalidades</a>
            <a href="/#precios">Planes & Precios</a>
            <a href="/#noticias">Noticias</a>
            <a href="/#contacto">Contacto</a>
          </div>
        </div>
        <button
          id="burger"
          className="block hamburger md:hidden"
          onClick={toggleBurger}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
