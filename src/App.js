import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
import Whatsapp from "./utils/Whatsapp";

function App() {
  return (
    <div className="max-w-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Whatsapp />
    </div>
  );
}

export default App;
