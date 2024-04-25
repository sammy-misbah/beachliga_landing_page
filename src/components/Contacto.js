import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = ({ language }) => {
  const translations = {
    en: {
      title: "Contact",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      message: "Write us a message",
      send: "Send",
      error: "Please fill out all fields.",
      success_message:
        "Your message was sent successfully. We will get in touch with you shortly.",
    },
    es: {
      title: "Contacto",
      first_name: "Nombre",
      last_name: "Apellido",
      email: "Correo",
      message: "Escríbenos un mensaje",
      send: "Enviar",
      error: "Por favor complete todos los campos.",
      success_message:
        "Su mensaje se ha enviado correctamente. Nos pondremos en contacto con usted pronto.",
    },
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      message.length == 0
    ) {
      toast.error(translations[language].error);
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`https://app.beachliga.com/api/email`, {
        firstName,
        lastName,
        email,
        message,
      });
      setIsLoading(false);
      toast.success(translations[language].success_message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-beachliga_blue" id="contact">
      <ToastContainer />
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
                value={firstName}
              />
              <input
                className="py-2 lg:py-4 px-5 rounded-md w-1/2"
                label="apellido"
                placeholder={translations[language].last_name}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="flex mb-6">
              <input
                className="py-2 lg:py-4 px-5 rounded-md w-1/2 mr-6"
                label="correo"
                placeholder={translations[language].email}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span className="w-1/2"></span>
            </div>
            <div>
              <textarea
                className="py-4 px-5 rounded-md w-full mb-6"
                rows={5}
                placeholder={translations[language].message}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[150px] h-[45px] bg-black text-white py-3 px-4 rounded-full font-[400] flex justify-center items-center"
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  translations[language].send
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
