import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [subDropdownIsOpen, setSubDropdownIsOpen] = useState(false);

  const toggleBurger = () => {
    const btn = document.getElementById("burger");
    const nav = document.getElementById("menu");
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");
  };

  const toggleDropdown = () => {
    const menu = document.getElementById("dropdown_menu");
    menu.classList.toggle("hidden");

    setDropdownIsOpen(!dropdownIsOpen);
  };

  const openSubDropdown = () => {
    setSubDropdownIsOpen(true);
  };

  const subDropdownBack = () => {
    setSubDropdownIsOpen(false);
  };

  return (
    <nav className="flex bg-beachliga_blue h-[65px] text-white relative z-20">
      <div className="flex w-[80%] max-w-[1200px] mx-auto items-center justify-between ">
        <a href="/">
          <img
            src="./assets/vector_logo.png"
            className="h-[45px]"
            alt="vector-logo"
          />
        </a>
        <div className="hidden md:flex space-x-8 lg:space-x-12 font-body text-sm">
          <a href="/">Inicio</a>
          <button onClick={toggleDropdown}>
            <div className="flex items-center relative ">
              <div className="mr-3">¿Para quién?</div>
              <FontAwesomeIcon
                className="pt-1"
                icon={dropdownIsOpen ? faChevronUp : faChevronDown}
                size="sm"
              />
              <div
                className="hidden shadow-2xl absolute top-[42px] bg-white w-[150%] left-[-25%] flex flex-col items-start z-20 "
                id="dropdown_menu"
              >
                <a
                  href="/entrenadores"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  Entrenadores
                </a>
                <a
                  href="/clubes"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  Clubes
                </a>
                <a
                  href="/jugadores"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  Jugadores
                </a>
                <a
                  href="/federaciones"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  Federaciones
                </a>
              </div>
            </div>
          </button>
          <a href="/#funcionalidades">Funcionalidades</a>
          <a href="/#precios">Planes & Precios</a>
          <a href="/#noticias">Noticias</a>
          <a href="/#contacto">Contacto</a>
        </div>
        <div className="md:hidden ">
          <div
            id="menu"
            className="absolute top-20 left-6 right-6 hidden flex-col items-center space-y-6 bg-beachliga_blue py-6 drop-shadow-md "
          >
            {subDropdownIsOpen ? (
              <>
                <div className="">
                  <button>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="absolute left-6 top-6"
                      onClick={subDropdownBack}
                      size="lg"
                    />
                  </button>
                  <a href="/entrenadores">Entrenadores</a>
                </div>
                <a href="/clubes">Clubes</a>
                <a href="/jugadores">Jugadores</a>
                <a href="/federaciones">Federaciones</a>
              </>
            ) : (
              <>
                <a href="/">Inicio</a>
                <button className="mr-3" onClick={openSubDropdown}>
                  ¿Para quién?
                </button>
                <a href="/#funcionalidades">Funcionalidades</a>
                <a href="/#precios">Planes & Precios</a>
                <a href="/#noticias">Noticias</a>
                <a href="/#contacto">Contacto</a>
              </>
            )}
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
