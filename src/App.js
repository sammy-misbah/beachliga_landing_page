import "./App.css";
import Clientes from "./components/Clientes";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Video from "./components/Video";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Clientes />
      <Video />
      <Servicios />
    </div>
  );
}

export default App;
