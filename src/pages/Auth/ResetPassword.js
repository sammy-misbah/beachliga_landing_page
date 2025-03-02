import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const apiUrl = process.env.REACT_APP_API_URL;

const translations = {
  en: {
    new_password: "New password",
    security_code: "Security Code",
    enter_6_digits: "Enter the 6-digit code sent to your email address",
    change_successful: "Your password has been changed successfully!",
    go_login_page: "Go to login page",
    reset_password: "Reset password",
    resetting_password: "Resetting password...",
  },
  es: {
    new_password: "Nueva contraseña",
    security_code: "Código de seguridad",
    enter_6_digits:
      "Ingrese el código de 6 dígitos enviado a su correo electrónico",
    change_successful: "¡Tu contraseña ha sido cambiada con éxito!",
    go_login_page: "Ir a la página de inicio de sesión",
    reset_password: "Restablecer contraseña",
    resetting_password: "Restableciendo contraseña...",
  },
  ger: {
    new_password: "Neues Passwort",
    security_code: "Sicherheitscode",
    enter_6_digits:
      "Geben Sie den 6-stelligen Code ein, der an Ihre E-Mail-Adresse gesendet wurde",
    change_successful: "Ihr Passwort wurde erfolgreich geändert!",
    go_login_page: "Zur Anmeldeseite gehen",
    reset_password: "Passwort zurücksetzen",
    resetting_password: "Passwort wird zurückgesetzt...",
  },
};

const SixDigitCodeInput = ({ code, setCode, language }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pastedData) return;
    const newCode = [...code];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) newCode[i] = pastedData[i];
    }
    setCode(newCode);
    if (pastedData.length < 6) {
      inputRefs.current[pastedData.length].focus();
    }
  };

  return (
    <div className="w-full">
      <label className="block text-gray-700 text-lg font-[400] mb-2">
        {translations[language].security_code}
      </label>
      <div className="flex gap-2 mb-1">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={code[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        ))}
      </div>
      <p className="text-sm text-gray-500">
        {translations[language].enter_6_digits}
      </p>
    </div>
  );
};

const ResetPassword = ({ language, setLanguage }) => {
  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNewPassword = async (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    const resetToken = localStorage.getItem("resetPasswordToken");

    try {
      setLoading(true);
      const response = await axios.patch(
        `${apiUrl}/sessions/password/change`,
        {
          code: fullCode,
          password: newPassword,
        },
        {
          headers: {
            Authorization: `${resetToken}`,
          },
        }
      );

      if (response.status === 202) {
        console.log("password successfully changed");
        localStorage.removeItem("resetPasswordToken");
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      console.log("failed to reset password");
      if (error.response?.status === 401) {
        setError("Invalid code");
      } else {
        setError("An error occured, please try again later.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-['gotham']">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="flex flex-col items-center justify-center space-y-4 my-12">
        {!success ? (
          <div className="w-full max-w-sm p-6 bg-white rounded-lg border border-gray-400">
            {error && (
              <div className="text-red-600 text-center mb-4">{error}</div>
            )}
            <form onSubmit={handleNewPassword}>
              <div className="mb-4">
                <SixDigitCodeInput
                  code={code}
                  setCode={setCode}
                  language={language}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-[400]">
                  {translations[language].new_password}
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full text-white p-2 rounded bg-beachliga_blue hover:bg-blue-500 transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Resetting password..." : "Reset password"}
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-sm flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faCheckCircle} color="green" size="4x" />
            <p className="text-center text-lg font-[400]">
              {translations[language].change_successful}
            </p>
            <button
              className="w-full text-white p-2 rounded bg-beachliga_blue hover:bg-blue-500 transition-all duration-300"
              onClick={() => navigate("/login")}
            >
              {translations[language].go_login_page}
            </button>
          </div>
        )}
      </div>
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default ResetPassword;
