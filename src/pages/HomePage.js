import React from "react";
import Clientes from "../components/Clientes";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import Descarga from "../components/Descarga";
import Home from "../components/Home";
import Instagram from "../components/Instagram";
import Lanzadera from "../components/Lanzadera";
import MasFuncionalidades from "../components/MasFuncionalidades";
import Opiniones from "../components/Opiniones";
import Perfiles from "../components/Perfiles";
import Planes from "../components/Planes";
import Servicios from "../components/Servicios";
import Video from "../components/Video";
import Navbar from "../components/Navbar";

const HomePage = ({ language, setLanguage }) => {
  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} setLanguage={setLanguage} />
      <Clientes language={language} setLanguage={setLanguage} />
      <Video language={language} setLanguage={setLanguage} />
      <Servicios language={language} setLanguage={setLanguage} />
      <MasFuncionalidades language={language} setLanguage={setLanguage} />
      <Perfiles language={language} setLanguage={setLanguage} />
      <Planes language={language} setLanguage={setLanguage} />
      <Lanzadera language={language} setLanguage={setLanguage} />
      <Opiniones language={language} setLanguage={setLanguage} />
      <Descarga language={language} setLanguage={setLanguage} />
      <Instagram language={language} setLanguage={setLanguage} />
      <Contacto language={language} setLanguage={setLanguage} />
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default HomePage;
