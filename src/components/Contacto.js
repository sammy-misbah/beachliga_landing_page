import React, { useState } from "react";
import axios from "axios";

const Contacto = ({ language }) => {
  const translations = {
    en: {
      title: "Contact",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      message: "Write us a message",
      send: "Send",
    },
    es: {
      title: "Contacto",
      first_name: "Nombre",
      last_name: "Apellido",
      email: "Correo",
      message: "Escríbenos un mensaje",
      send: "Enviar",
    },
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/email`,
        {
          firstName,
          lastName,
          message,
        }
      );
      window.location = res.data.url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-beachliga_blue" id="contacto">
      <div className="max-w-[1200px] mx-auto py-24 px-12">
        <div className="flex flex-col">
          <h2 className="text-white text-5xl font-[400] mb-12">
            {translations[language].title}
          </h2>
          <form className="flex flex-col  lg:w-1/2" onSubmit={handleSubmit}>
            <div className="flex mb-6">
              <input
                className="py-2 lg:py-4 px-5 rounded-md w-1/2 mr-6"
                label="nombre"
                placeholder={translations[language].first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="py-2 lg:py-4 px-5 rounded-md w-1/2"
                label="apellido"
                placeholder={translations[language].last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex mb-6">
              <input
                className="py-2 lg:py-4 px-5 rounded-md w-1/2 mr-6"
                label="correo"
                placeholder={translations[language].email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="w-1/2"></span>
            </div>
            <div>
              <textarea
                className="py-4 px-5 rounded-md w-full mb-6"
                rows={5}
                placeholder={translations[language].message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[150px] bg-black text-white py-3 px-4 rounded-full font-[400]"
              >
                {translations[language].send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
