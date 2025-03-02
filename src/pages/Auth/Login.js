import React, { useState } from "react";
import axios from "axios";
import { auth, signInWithCustomToken } from "../../firebase.js";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const apiUrl = process.env.REACT_APP_API_URL;

const Login = ({ language, setLanguage }) => {
  const [email, setEmail] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgottenPassword, setForgottenPassword] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const navigate = useNavigate();

  const translations = {
    en: {
      login: "Login",
      username_email: "Username or email",
      password: "Password",
      forgotten_password: "Forgotten password?",
      sign_up: "Sign up",
      logging_in: "Logging in...",
      enter_email: "Enter your email",
      send_reset_code: "Send reset code",
      sending_code: "Sending code...",
      or: "or",
    },
    es: {
      login: "Iniciar sesión",
      username_email: "Nombre de usuario o correo electrónico",
      password: "Contraseña",
      forgotten_password: "¿Olvidaste tu contraseña?",
      sign_up: "Regístrate",
      logging_in: "Iniciando sesión...",
      enter_email: "Introduce tu correo",
      send_reset_code: "Enviar código de restablecimiento",
      sending_code: "Enviando código...",
      or: "o",
    },
    ger: {
      login: "Anmelden",
      username_email: "Benutzername oder E-Mail",
      password: "Passwort",
      forgotten_password: "Passwort vergessen?",
      sign_up: "Registrieren",
      logging_in: "Anmeldung läuft...",
      enter_email: "Gib deine E-Mail ein",
      send_reset_code: "Reset-Code senden",
      sending_code: "Code wird gesendet...",
      or: "oder",
    },
  };

  const GoogleLoginButton = () => {
    return (
      <GoogleLogin
        onSuccess={async (response) => {
          try {
            const idToken = response.credential;

            if (!idToken) throw new Error("Failed to retrieve ID token");
            const backendResponse = await axios.post(
              `${apiUrl}/sessions/login/google`,
              { idToken }
            );

            if (backendResponse.status === 200) {
              const token = backendResponse.headers["authorization"];
              if (!token)
                throw new Error("Authorization token missing in headers");

              localStorage.setItem("authToken", token);
              await signInWithCustomToken(auth, token);
              console.log("User signed in successfully");

              if (backendResponse.data) {
                localStorage.setItem(
                  "userData",
                  JSON.stringify(backendResponse.data)
                );
              }

              navigate("/events");
            }
          } catch (error) {
            console.error("Google login error", error);
          }
        }}
        onError={(error) => console.error("Google login error", error)}
      />
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        `${apiUrl}/sessions/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const token = response.headers["authorization"];
      if (!token) {
        throw new Error("Authorization token missing in headers");
      }

      localStorage.setItem("authToken", token);
      await signInWithCustomToken(auth, token);
      console.log("User signed in successfully");

      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      }

      navigate("/events");
    } catch (err) {
      console.error("Login failed", err);
      setErrorMessage(
        err.response?.status === 401
          ? "Invalid email or password. Please try again."
          : "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgottenPassword = async (e) => {
    e.preventDefault();
    try {
      setSendingCode(true);
      const response = await axios.post(`${apiUrl}/sessions/password/reset`, {
        email: recoveryEmail,
      });

      if (response.status === 202) {
        const resetToken = response.headers["reset_token"];
        if (!resetToken) {
          setSendingCode(false);
          return console.error("backend didnt send reset token");
        }
        localStorage.setItem("resetPasswordToken", resetToken);
        setSendingCode(false);
        navigate("/reset_password");
      }
    } catch (err) {
      console.error("failed to reset the password");
      setSendingCode(false);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="flex flex-col items-center justify-center space-y-4 my-12">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg border border-gray-400">
          <h2 className="text-lg font-[500] text-center mb-6">
            {translations[language].login}
          </h2>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mb-2">
              {errorMessage}
            </p>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">
                {translations[language].username_email}
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                {translations[language].password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full text-white p-2 rounded bg-beachliga_blue hover:bg-blue-500 transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || sendingCode}
            >
              {loading
                ? translations[language].logging_in
                : translations[language].login}
            </button>
          </form>
          <div className="mt-4 text-center text-sm font-[400] text-beachliga_blue">
            <button onClick={() => setForgottenPassword(true)}>
              {translations[language].forgotten_password}
            </button>
          </div>
          {forgottenPassword && (
            <div className="mt-4">
              <input
                type="email"
                placeholder={translations[language].enter_email}
                className="border p-2 rounded-md w-full max-w-sm mb-4"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
              />
              <button
                className={`w-full text-white p-2 rounded bg-beachliga_blue hover:bg-blue-500 transition-all duration-300 ${
                  sendingCode ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading || sendingCode}
                onClick={handleForgottenPassword}
              >
                {sendingCode
                  ? translations[language].sending_code
                  : translations[language].send_reset_code}
              </button>
            </div>
          )}
        </div>
        <h2 className="text-lg font-[500]">{translations[language].or}</h2>
        <button
          className="w-full max-w-sm rounded p-2 text-white bg-beachliga_blue hover:bg-blue-500 transition-all duration-300"
          onClick={() => navigate("/signup")}
        >
          {translations[language].sign_up}
        </button>
        <div className="w-full max-w-sm rounded">
          <GoogleLoginButton className="" />
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Login;
