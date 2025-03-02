import React, { useState } from "react";
import axios from "axios";
import { auth, signInWithCustomToken } from "../../firebase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const apiUrl = process.env.REACT_APP_API_URL;

const translations = {
  en: {
    create_your_account: "Create your account", // Fixed "yout" typo
    username: "Username",
    email: "Email",
    first_name: "First name",
    last_name: "Last name",
    phone_number: "Phone number",
    birthday: "Birthday",
    gender: "Gender",
    shirt_size: "Shirt size",
    password: "Password",
    confirm_password: "Confirm password",
    create_account: "Create account",
    select_size: "Select size",
    select_gender: "Select gender",
    male: "Male",
    female: "Female",
    other: "Other",
  },
  es: {
    create_your_account: "Crea tu cuenta",
    username: "Nombre de usuario",
    email: "Correo electrónico",
    first_name: "Nombre",
    last_name: "Apellido",
    phone_number: "Número de teléfono",
    birthday: "Fecha de nacimiento",
    gender: "Género",
    shirt_size: "Talla de camiseta",
    password: "Contraseña",
    confirm_password: "Confirmar contraseña",
    create_account: "Crear cuenta",
    select_size: "Seleccionar talla",
    select_gender: "Seleccionar género",
    male: "Hombre",
    female: "Mujer",
    other: "Otro",
  },
  ger: {
    create_your_account: "Erstelle dein Konto",
    username: "Benutzername",
    email: "E-Mail",
    first_name: "Vorname",
    last_name: "Nachname",
    phone_number: "Telefonnummer",
    birthday: "Geburtstag",
    gender: "Geschlecht",
    shirt_size: "T-Shirt-Größe",
    password: "Passwort",
    confirm_password: "Passwort bestätigen",
    create_account: "Konto erstellen",
    select_size: "Größe auswählen",
    select_gender: "Geschlecht auswählen",
    male: "Männlich",
    female: "Weiblich",
    other: "Divers",
  },
};

const Signup = ({ language, setLanguage }) => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmationPassword: "",
    shirtSize: "",
    gender: "",
    birthday: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmationPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/sessions/register`, {
        ...formData,
        locale: "en_US",
        fbToken: "none.none.none",
      });
      if (response.status >= 400)
        throw new Error(response.data?.error || "Registration failed.");
      const token = response.headers["authorization"];
      if (!token) throw new Error("Authorization token missing in headers.");
      localStorage.setItem("authToken", token);
      const decodedToken = jwtDecode(token);
      const userId = decodedToken?.uid;
      await signInWithCustomToken(auth, token);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          id: userId,
          user_name: formData.username,
          name: formData.name,
          surnames: formData.surname,
          gender: formData.gender,
          birthday: formData.birthday,
          phone: formData.phoneNumber,
          shirtSize: formData.shirtSize,
        })
      );
      await axios.patch(
        `${apiUrl}/rv1/profile`,
        {
          user_name: formData.username,
          name: formData.name,
          surnames: formData.surname,
          gender: formData.gender,
          birthday: formData.birthday,
          phone: formData.phoneNumber,
          shirtSize: formData.shirtSize,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/events");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-['gotham']">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md border border-gray-400 rounded-lg  p-8">
          <div className="mb-8">
            <h2 className="text-lg font-[500] text-center text-gray-800">
              {translations[language].create_your_account}
            </h2>
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].username}
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].first_name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].last_name}
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].phone_number}
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-[400] text-gray-700 mb-1">
                    {translations[language].birthday}
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-md font-[400] text-gray-700 mb-1">
                  {translations[language].gender}
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                >
                  <option value="">
                    {translations[language].select_gender}
                  </option>
                  <option value="male"> {translations[language].male}</option>
                  <option value="female">
                    {translations[language].female}
                  </option>
                  <option value="other">{translations[language].other}</option>
                </select>
              </div>
              <div>
                <label className="block text-md font-[400] text-gray-700 mb-1">
                  {translations[language].shirt_size}
                </label>
                <select
                  name="shirtSize"
                  value={formData.shirtSize}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                >
                  <option value="">{translations[language].select_size}</option>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-md font-[400] text-gray-700 mb-1">
                  {translations[language].password}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-[400] text-gray-700 mb-1">
                  {translations[language].confirm_password}
                </label>
                <input
                  type="password"
                  name="confirmationPassword"
                  value={formData.confirmationPassword}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full max-w-sm rounded p-2 text-white bg-beachliga_blue hover:bg-blue-500 transition-all duration-300"
            >
              {translations[language].create_account}
            </button>
          </form>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Signup;
