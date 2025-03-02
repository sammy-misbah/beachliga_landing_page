import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PaymentRecap from "../components/PaymentRecap";
import { useLocation, useNavigate } from "react-router-dom";

const translations = {
  en: {
    back_to_event: "Back to the event",
    congratulations: "Congratulations!",
    team_registration:
      "You and {partner} have successfully registered to the event.",
    camp_registration: "You have successfully registered to the event.",
    download_app: "Download the app!",
    download_text:
      "Remember to download Beach Liga app to keep up with all the news regarding your event.",
  },
  es: {
    back_to_event: "Volver al evento",
    congratulations: "¡Felicidades!",
    team_registration:
      "Tú y {partner} se han registrado exitosamente al evento.",
    camp_registration: "Te has registrado exitosamente al evento.",
    download_app: "¡Descarga la app!",
    download_text:
      "Recuerda descargar la app Beach Liga para estar al día con todas las noticias sobre tu evento.",
  },
  ger: {
    back_to_event: "Zurück zum Event",
    congratulations: "Glückwunsch!",
    team_registration:
      "Du und {partner} habt euch erfolgreich für das Event angemeldet.",
    camp_registration: "Du hast dich erfolgreich für das Event angemeldet.",
    download_app: "Lade die App herunter!",
    download_text:
      "Denk daran, die Beach Liga App herunterzuladen, um alle Neuigkeiten zu deinem Event zu erfahren.",
  },
};

const PaymentConfirmation = ({
  language,
  setLanguage,
  userId,
  selectedCategory,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    category,
    event,
    isCamp,
    gender,
    team_size,
    user,
    partner,
    userDiscount,
    partnerDiscount,
    priceFromIntent,
  } = location.state || {};

  console.log("event", event);

  const handleBackTap = () => {
    navigate(`/events/${event.id}`);
  };

  const registrationMessage = translations[language].team_registration;
  const registrationText = registrationMessage.replace(
    "{partner}",
    partner.full_name
  );

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="flex max-w-[1200px] px-12 mx-auto mt-[60px] space-x-2 items-center">
          <div
            className="flex items-center space-x-3 font-bold cursor-pointer"
            onClick={handleBackTap}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="md" />
            <div className="text-lg font-[500]">
              {translations[language].back_to_event}
            </div>
          </div>
        </div>
        <div className="flex max-w-[1200px] px-12 mx-auto mt-12 pb-24 space-x-6">
          <div className="flex flex-col w-1/2 max-w-md">
            <div className="text-3xl font-[500] mb-4">
              {translations[language].congratulations}
            </div>
            <div className="flex items-center gap-x-2  mb-6 pb-6 border-b border-gray-600 ">
              {!isCamp && (
                <div className="text-md font-[400]">{registrationText}</div>
              )}
              {isCamp && (
                <div className="text-md font-[400]">
                  {translations[language].camp_registration}
                </div>
              )}
            </div>
            <div className="flex space-x-4">
              <div>
                <img
                  src="./assets/beachliga_logo_clean.png"
                  alt="beachliga_logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-[500] mb-2">
                  {translations[language].download_app}
                </h2>
                <p className="text-md font-[400] mb-6">
                  {translations[language].download_text}
                </p>
                <div className="flex space-x-2">
                  <img
                    src="./assets/qr_code.png"
                    alt="qr_code"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col space-y-2 pt-1">
                    <a
                      href="https://bit.ly/beachliga-google-play"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./assets/google_play3.png"
                        alt="google_play"
                        width={120}
                      />
                    </a>
                    <a
                      href="https://apple.co/4asnKF5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="./assets/apple.png" alt="apple" width={120} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PaymentRecap
            event={event}
            category={category}
            user={user}
            gender={gender}
            isCamp={isCamp}
            partner={partner}
            registerTeam={null}
            team_size={team_size}
            withButton={false}
            userDiscount={userDiscount}
            partnerDiscount={partnerDiscount}
            priceFromIntent={priceFromIntent}
            isPayment={true}
            language={language}
          />
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default PaymentConfirmation;
