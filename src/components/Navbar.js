import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ language, setLanguage }) => {
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

  const translations = {
    en: {
      home: "Home",
      who: "For whom?",
      trainers: "Coaches",
      clubs: "Clubs",
      players: "Players",
      federations: "Federations",
      features: "Features",
      plans: "Plans & Pricing",
      news: "News",
      contact: "Contact us",
    },
    es: {
      home: "Inicio",
      who: "¿Para quién?",
      trainers: "Entrenadores",
      clubs: "Clubes",
      players: "Jugadores",
      federations: "Federaciones",
      features: "Funcionalidades",
      plans: "Planes & Precios",
      news: "Noticias",
      contact: "Contacto",
    },
  };

  return (
    <nav className="flex bg-beachliga_blue h-[65px] text-white relative z-20">
      <div className="flex w-[80%] max-w-[1200px] mx-auto items-center justify-between px-6">
        <a href="/">
          <img
            src="./assets/vector_logo.png"
            className="h-[45px]"
            alt="vector-logo"
          />
        </a>
        <div className="hidden md:flex space-x-8 lg:space-x-12 font-body text-sm">
          <a href="/">{translations[language].home}</a>
          <button onClick={toggleDropdown}>
            <div className="flex items-center relative ">
              <div className="mr-3">{translations[language].who}</div>
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
                  {translations[language].trainers}
                </a>
                <a
                  href="/clubes"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  {translations[language].clubs}
                </a>
                <a
                  href="/jugadores"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  {translations[language].players}
                </a>
                <a
                  href="/federaciones"
                  className="hover:bg-white w-full py-2 hover:text-black bg-beachliga_blue"
                >
                  {translations[language].federations}
                </a>
              </div>
            </div>
          </button>
          <Link to="/#funcionalidades">{translations[language].features}</Link>
          <Link to="/#precios">{translations[language].plans}</Link>
          <Link to="/#noticias">{translations[language].news}</Link>
          <Link to="/#contacto">{translations[language].contact}</Link>
        </div>
        <div className="md:hidden">
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
                  <Link to="/entrenadores">
                    {translations[language].trainers}
                  </Link>
                </div>
                <Link to="/clubes">{translations[language].clubs}</Link>
                <Link to="/jugadores">{translations[language].players}</Link>
                <Link to="/federaciones">
                  {translations[language].federations}
                </Link>
              </>
            ) : (
              <>
                <Link to="/">{translations[language].home}</Link>
                <button className="" onClick={openSubDropdown}>
                  {translations[language].who}
                </button>
                <Link to="/#funcionalidades">
                  {translations[language].features}
                </Link>
                <Link to="/#precios">{translations[language].plans}</Link>
                <Link to="/#noticias">{translations[language].news}</Link>
                <Link to="/#contacto">{translations[language].contact}</Link>
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
      <div className="flex items-center pr-12 pb-2">
        <button onClick={() => setLanguage("en")}>
          <img src="./assets/greatbritain_flag.svg" className="w-[30px] mr-3" />
        </button>
        <button onClick={() => setLanguage("es")}>
          <img src="./assets/spain_flag.png" className="w-[30px]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
