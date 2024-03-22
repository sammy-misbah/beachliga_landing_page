import "./App.css";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import Descarga from "./components/Descarga";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Instagram from "./components/Instagram";
import Lanzadera from "./components/Lanzadera";
import MasFuncionalidades from "./components/MasFuncionalidades";
import Opiniones from "./components/Opiniones";
import Perfiles from "./components/Perfiles";
import Planes from "./components/Planes";
import Servicios from "./components/Servicios";
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import { Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Clientes />
      <Video />
      <Servicios />
      <MasFuncionalidades />
      <Perfiles />
      <Planes />
      <Lanzadera />
      <Opiniones />
      <Descarga />
      <Instagram />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
