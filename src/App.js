import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Firebase function to track login state
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
import CrispChat from "./utils/CrispChat";
import Jugadores from "./pages/Jugadores";
import Clubes from "./pages/Clubes";
import Federaciones from "./pages/Federaciones";
import Entrenadores from "./pages/Entrenadores";
import Descarga from "./pages/Descarga";
import Events from "./pages/Events";
import Login from "./pages/Auth/Login";
import EventInfo from "./pages/EventInfo";
import SearchPartners from "./pages/SearchPartners";
import Payment from "./pages/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import Signup from "./pages/Auth/Signup";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  const [language, setLanguage] = useState("en");
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [user, setUser] = useState(null); // Track user authentication state

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsAndroid(userAgent.includes("Android"));
    setIsIOS(
      userAgent.includes("iPhone") ||
        userAgent.includes("iPad") ||
        userAgent.includes("iPod")
    );
  }, []);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <Terms
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/jugadores"
          element={
            <Jugadores
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/clubes"
          element={
            <Clubes
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/federaciones"
          element={
            <Federaciones
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/entrenadores"
          element={
            <Entrenadores
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/download"
          element={
            <Descarga
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/events/:eventId"
          element={
            <EventInfo
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/search_partners"
          element={
            <SearchPartners
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/payment_confirmation"
          element={
            <PaymentConfirmation
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route
          path="/reset_password"
          element={
            <ResetPassword
              language={language}
              setLanguage={handleLanguageChange}
              isAndroid={isAndroid}
              isIOS={isIOS}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CrispChat />
    </div>
  );
}

export default App;
