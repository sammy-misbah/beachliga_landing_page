import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
import Whatsapp from "./utils/Whatsapp";
import Jugadores from "./pages/Jugadores";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/jugadores" element={<Jugadores />} />
      </Routes>
      <Whatsapp />
    </div>
  );
}

export default App;
