import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";

const Navbar = ({ language, setLanguage }) => {
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [subDropdownIsOpen, setSubDropdownIsOpen] = useState(false);

  useEffect(() => {
    const closeMenus = (e) => {
      if (dropdownIsOpen && !dropdownRef.current?.contains(e.target)) {
        const menu = document.getElementById("dropdown_menu");
        menu.classList.add("hidden");
        setDropdownIsOpen(false);
      }

      if (
        window.innerWidth < 768 &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target) &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        const nav = document.getElementById("menu");
        const btn = document.getElementById("burger");
        nav.classList.add("hidden");
        nav.classList.remove("flex");
        btn.classList.remove("open");
      }
    };

    document.addEventListener("mousedown", closeMenus);

    return () => {
      document.removeEventListener("mousedown", closeMenus);
    };
  }, [dropdownIsOpen]);

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
    ger: {
      home: "Home",
      who: "Für wen?",
      trainers: "Trainer",
      clubs: "Vereine",
      players: "Spieler",
      federations: "Verbände",
      features: "Funktionen",
      plans: "Pläne & Preise",
      news: "Neuigkeiten",
      contact: "Kontakt",
    },
  };

  return (
    <nav className="flex bg-beachliga_blue h-[65px] text-white relative z-20">
      <div className="flex w-[80%] max-w-[1200px] mx-auto items-center justify-between px-6">
        <Link to="/">
          <img
            src="./assets/vector_logo.png"
            className="h-[45px]"
            alt="vector-logo"
          />
        </Link>
        <div className="hidden md:flex space-x-8 lg:space-x-12 font-body text-sm">
          <Link to="/">{translations[language].home}</Link>
          <div
            onClick={toggleDropdown}
            className="cursor-pointer"
            ref={dropdownRef}
          >
            <div className="flex items-center justify-center relative">
              <div className="mr-3 whitespace-nowrap">
                {translations[language].who}
              </div>
              <FontAwesomeIcon
                className="pt-1"
                icon={dropdownIsOpen ? faChevronUp : faChevronDown}
                size="sm"
              />
              <div
                className=" hidden shadow-2xl absolute top-[42px] bg-white w-[150%] left-[-25%] flex flex-col items-center justify-center z-20"
                id="dropdown_menu"
              >
                <Link
                  to="/entrenadores"
                  className="hover:bg-white w-full py-3 hover:text-black bg-beachliga_blue text-center"
                >
                  {translations[language].trainers}
                </Link>
                <Link
                  to="/clubes"
                  className="hover:bg-white w-full py-3 hover:text-black bg-beachliga_blue text-center"
                >
                  {translations[language].clubs}
                </Link>
                <Link
                  to="/jugadores"
                  className="hover:bg-white w-full py-3 hover:text-black bg-beachliga_blue text-center"
                >
                  {translations[language].players}
                </Link>
                <Link
                  to="/federaciones"
                  className="hover:bg-white w-full py-3 hover:text-black bg-beachliga_blue text-center"
                >
                  {translations[language].federations}
                </Link>
              </div>
            </div>
          </div>
          <Link to="/#funcionalidades">{translations[language].features}</Link>
          <Link to="/#precios" className="whitespace-nowrap">
            {translations[language].plans}
          </Link>
          <Link to="/#noticias">{translations[language].news}</Link>
          <Link to="/#contact" className="whitespace-nowrap">
            {translations[language].contact}
          </Link>
        </div>
        <div className="md:hidden" ref={mobileMenuRef}>
          <div
            id="menu"
            className="absolute top-20 left-6 right-6 hidden flex-col items-center space-y-6 bg-beachliga_blue py-6 drop-shadow-md "
          >
            {subDropdownIsOpen ? (
              <>
                <div className="">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute left-6 top-6 cursor-pointer"
                    onClick={subDropdownBack}
                    size="lg"
                  />

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
                <div className="cursor-pointer" onClick={openSubDropdown}>
                  {translations[language].who}
                </div>
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
        <div
          id="burger"
          className="block hamburger md:hidden cursor-pointer"
          onClick={toggleBurger}
          ref={burgerRef}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
      </div>
      <div className="flex items-center pr-12 pb-2">
        <div className="cursor-pointer" onClick={() => setLanguage("en")}>
          <img
            src="./assets/greatbritain_flag.svg"
            className="min-w-[30px] w-[30px] h-[20px] mr-3"
            alt="gb_flag"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setLanguage("es")}>
          <img
            src="./assets/spain_flag.png"
            className="min-w-[30px] w-[30px] h-[20px] mr-3"
            alt="spain_flag"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setLanguage("ger")}>
          <img
            src="./assets/germany_flag.png"
            className="min-w-[30px] w-[30px] h-[20px]"
            alt="germany_flag"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
