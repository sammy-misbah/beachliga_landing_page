import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
import Whatsapp from "./utils/Whatsapp";
import Jugadores from "./pages/Jugadores";
import Clubes from "./pages/Clubes";
import Federaciones from "./pages/Federaciones";
import Entrenadores from "./pages/Entrenadores";
import Descarga from "./pages/Descarga";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage language={language} setLanguage={handleLanguageChange} />
          }
        />
        <Route
          path="/terms"
          element={
            <Terms language={language} setLanguage={handleLanguageChange} />
          }
        />
        <Route
          path="/jugadores"
          element={
            <Jugadores language={language} setLanguage={handleLanguageChange} />
          }
        />
        <Route
          path="/clubes"
          element={
            <Clubes language={language} setLanguage={handleLanguageChange} />
          }
        />
        <Route
          path="/federaciones"
          element={
            <Federaciones
              language={language}
              setLanguage={handleLanguageChange}
            />
          }
        />
        <Route
          path="/entrenadores"
          element={
            <Entrenadores
              language={language}
              setLanguage={handleLanguageChange}
            />
          }
        />
        <Route
          path="/download"
          element={
            <Descarga language={language} setLanguage={handleLanguageChange} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Whatsapp />
    </div>
  );
}

export default App;
