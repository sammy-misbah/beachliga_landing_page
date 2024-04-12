import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
import Whatsapp from "./utils/Whatsapp";
import Jugadores from "./pages/Jugadores";
import Clubes from "./pages/Clubes";
import Federaciones from "./pages/Federaciones";
import Entrenadores from "./pages/Entrenadores";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/clubes" element={<Clubes />} />
        <Route path="/federaciones" element={<Federaciones />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
      </Routes>
      <Whatsapp />
    </div>
  );
}

export default App;
