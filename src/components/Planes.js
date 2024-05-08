import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Planes = ({ language }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // e
  const translations = {
    en: {
      title: "Plans and prices",
      free: "Free",
      free_desc:
        "Our free plan offers you access to basic features at no cost, along with regular updates and an ad-free experience!",
      free_feature_1: "Create 1 tournament/month for up to 16 teams",
      free_feature_2: "Create 2 trainings / week",
      free_feature_3: "Connect with other players",
      free_feature_4: "Full event: 84€/event",
      free_price: "0€",
      pro: "Pro",
      pro_desc:
        "With our Pro plan, you'll enjoy the freedom to create tournaments with unlimited teams and to add up to 6 coaches for your club.",
      pro_feature_1: "Unlimited tournaments",
      pro_feature_2: "Unlimited trainings",
      pro_feature_3: "Unlimited camps",
      pro_feature_4: "Up to 3 staff members",
      pro_feature_5: "Unlimited athlete members",
      pro_price_1: "49.50€",
      pro_price_2: "/month",
      premium: "Premium",
      premium_desc:
        "With our Premium plan, enjoy unlimited tournaments and coaches, and access sports license management and federal ranking for comprehensive tracking of your sports activity.",
      premium_feature_1: "All pro features",
      premium_feature_2: "Licenses management",
      premium_feature_3: "Private events",
      premium_feature_4: "Up to 10 staff members",
      premium_price_1: "189€",
      premium_price_2: "/month",
      get_started: "Download app!",
      not_sure: "Not sure?",
      contact_us: "Get in touch with us for a personalized plan.",
      custom_plan: "I want a customized plan.",
      yearly_payment: "Yearly payment",
    },
    es: {
      title: "Planes y precios",
      free: "Gratis",
      free_desc:
        "¡Nuestro plan gratuito te ofrece acceso a funciones básicas sin costo alguno, junto con actualizaciones regulares y una experiencia sin publicidad!",
      free_feature_1: "Crear 1 torneo al mes para un máximo de 16 equipos",
      free_feature_2: "Crear 2 entrenamientos/semana",
      free_feature_3: "Conectar con otros jugadores",
      free_feature_4: "Evento completo: 84€/evento",
      free_price: "0€",
      pro: "Pro",
      pro_desc:
        "Con nuestro plan Pro, disfrutarás de la libertad de crear torneos con numeros illimitados de equipos y de poder añadir hasta 6 entrenadores para tu club.",
      pro_feature_1: "Torneos illimitados",
      pro_feature_2: "Entrenamientos illimitados",
      pro_feature_3: "Campos illimitados",
      pro_feature_4: "Hasta 3 miembros del club",
      pro_feature_5: "Alumnos illimitados",
      pro_price_1: "49.50€",
      pro_price_2: "/mes",
      premium: "Premium",
      premium_desc:
        "Con nuestro plan Premium, disfruta de un numero illimitado de torneos y coaches y accede a la gestión de licencias deportivas y al ranking federal para un seguimiento completo de tu actividad deportiva.",
      premium_feature_1: "Todas las funcionalidades de Pro",
      premium_feature_2: "Administración de licencias",
      premium_feature_3: "Eventos privados",
      premium_feature_4: "Hasta 10 miembros del club",
      premium_price_1: "189€",
      premium_price_2: "/mes",
      get_started: "¡Descarga la app!",
      not_sure: "¿No lo tienes claro?",
      contact_us: "Ponte en contacto con nosotros para un plan personalizado.",
      custom_plan: "Quiero un plan personalizado",
      yearly_payment: "Pago anual",
    },
    ger: {
      title: "Pläne und Preise",
      free: "Kostenlos",
      free_desc:
        "Unser kostenloser Plan bietet dir Zugang zu den Grundfunktionen ohne versteckte Kosten, zusammen mit regelmäßigen Updates und ohne Werbung!",
      free_feature_1: "1 Turnier pro Monat für maximal 16 Teams erstellen",
      free_feature_2: "2 Trainings pro Woche erstellen",
      free_feature_3: "Mit anderen Spielern chatten",
      free_feature_4: "Veranstaltung ohne Limits: 84€/Veranstaltung",
      free_price: "0€",
      pro: "Pro",
      pro_desc:
        "Mit unserem Pro-Plan genießt du die Freiheit, Turniere mit unbegrenzten Teams zu erstellen und bis zu 6 Trainer für deinen Verein hinzuzufügen.",
      pro_feature_1: "Unbegrenzte Turniere",
      pro_feature_2: "Unbegrenzte Trainings",
      pro_feature_3: "Unbegrenzte Felder",
      pro_feature_4: "Bis zu 3 Admins",
      pro_feature_5: "Unbegrenzte Teilnehmer",
      pro_price_1: "49.50€",
      pro_price_2: "/Monat",
      premium: "Premium",
      premium_desc:
        "Mit unserem Premium-Plan genießt du eine unbegrenzte Anzahl von Turnieren und Trainern und kannst von Lizenzen verwalten und das Seeding nach Verbandspunkten automatisiert erstellen.",
      premium_feature_1: "Alle Pro-Funktionen",
      premium_feature_2: "Lizenzverwaltung",
      premium_feature_3: "Private Veranstaltungen",
      premium_feature_4: "Bis zu 10 Admins",
      premium_price_1: "189€",
      premium_price_2: "/Monat",
      get_started: "Lade die App herunter!",
      not_sure: "Nicht sicher?",
      contact_us: "Kontaktiere uns für eine maßgeschneiderte Lösung.",
      custom_plan: "Anfrage stellen",
      yearly_payment: "Jährliche Zahlung",
    },
  };

  return (
    <div className="bg-beachliga_bg_grey" id="precios">
      <div className="max-w-[1200px] mx-auto pt-6 pb-24 px-12">
        <h2 className="text-5xl text-beachliga_blue font-[400] mb-10">
          {translations[language].title}
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between mb-20">
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[900px] justify-between px-8 py-10 border-2 border-beachliga_lightgrey rounded-3xl bg-white mb-12 lg:mb-0">
            <div>
              <div className="mb-2 italic text-sm text-center h-[40px]"></div>
              <h3 className="text-4xl font-[gotham-bold] mb-6">
                {translations[language].free}
              </h3>
              <p className="mb-6 text-lg">{translations[language].free_desc}</p>
              <div className="space-y-3 text-xl font-[400]">
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div>{translations[language].free_feature_1}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div>{translations[language].free_feature_2}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div>{translations[language].free_feature_3}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div>{translations[language].free_feature_4}</div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line1.png" className="mb-8" alt="line_1" />
              <h2 className="text-4xl font-[400] mb-8">
                {translations[language].free_price}
              </h2>
              <div className="flex justify-center">
                <Link to="/download">
                  <div className="w-[290px] bg-black text-white py-3 rounded-full font-[400] text-lg flex justify-center items-center hover:bg-white hover:text-black duration-300 border-2 border-black">
                    {translations[language].get_started}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[900px] justify-between px-8 py-10 border-2 border-beachliga_blue_border rounded-3xl bg-beachliga_lightblue text-beachliga_blue  mb-12 lg:mb-0">
            <div>
              <h4 className="mb-2 italic text-sm text-center h-[40px]">
                {translations[language].yearly_payment}
              </h4>
              <div className="flex items-baseline">
                <h3 className="text-4xl font-[gotham-bold] mb-6 mr-4">
                  {translations[language].pro}
                </h3>
              </div>
              <p className="mb-6 text-lg">{translations[language].pro_desc}</p>
              <div className="space-y-3 text-xl font-[400]">
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="">{translations[language].pro_feature_1}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div>{translations[language].pro_feature_2}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div>{translations[language].pro_feature_3}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div>{translations[language].pro_feature_4}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div>{translations[language].pro_feature_5}</div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line2.png" className="mb-8" alt="line_2" />
              <h2 className="text-4xl font-[400] mb-8">
                {translations[language].pro_price_1}
                <span className="text-3xl">
                  {translations[language].pro_price_2}
                </span>
              </h2>
              <div className="flex justify-center">
                <Link to="/download">
                  <div className="w-[290px] bg-beachliga_blue text-white py-3 rounded-full font-[400] text-lg flex justify-center items-center hover:bg-white hover:text-black duration-300 border-2 border-beachliga_blue">
                    {translations[language].get_started}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[900px] justify-between px-8 py-10 rounded-3xl bg-beachliga_blue text-white">
            <div>
              <h4 className="mb-2 italic text-sm text-center h-[40px]">
                {translations[language].yearly_payment}
              </h4>
              <h3 className="text-4xl font-[gotham-bold] mb-6">
                {translations[language].premium}
              </h3>
              <p className="mb-6 text-lg">
                {translations[language].premium_desc}
              </p>
              <div className="space-y-3 text-xl font-[400]">
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div>{translations[language].premium_feature_1}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div>{translations[language].premium_feature_2}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div>{translations[language].premium_feature_3}</div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl">
                    {translations[language].premium_feature_4}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line3.png" className="mb-8" alt="line_3" />
              <h2 className="text-4xl font-[400] mb-8">
                {translations[language].premium_price_1}
                <span className="text-3xl">
                  {translations[language].premium_price_2}
                </span>
              </h2>
              <div className="flex justify-center">
                <Link to="/download">
                  <div className="w-[290px] bg-white text-beachliga_blue py-3 rounded-full font-[400] text-lg flex justify-center items-center hover:bg-beachliga_blue hover:text-white duration-300 border-2 border-white">
                    {translations[language].get_started}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {width > 768 ? (
          <div className="flex">
            <img
              src="./assets/question_mark.png"
              className="mr-12 w-[80px] h-[90px]"
              alt="question_mark"
            />
            <div className="flex flex-col">
              <h3 className="text-beachliga_yellow text-2xl max-w-[600px] font-[400] mb-6">
                <span className="text-3xl font-[400]">
                  {translations[language].not_sure}
                </span>
                <br /> {translations[language].contact_us}
              </h3>
              <div className="bg-beachliga_yellow w-[200px] md:w-[350px] text-white py-3 px-4 rounded-full font-[400] text-lg flex justify-center items-center text-center">
                <Link to="/download">{translations[language].custom_plan}</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="./assets/question_mark.png"
                className="mr-12 w-[80px] h-[90px]"
                alt="question_mark"
              />
              <div className="flex flex-col">
                <h3 className="text-beachliga_yellow text-2xl max-w-[600px] font-[400] mb-6">
                  <span className="text-3xl font-[400]">
                    {translations[language].not_sure}
                  </span>
                  <br /> {translations[language].contact_us}
                </h3>
              </div>
            </div>
            <div className="bg-beachliga_yellow w-full text-white py-3 px-4 rounded-full font-[400] text-lg flex justify-center items-center text-center">
              <Link to="/download">{translations[language].custom_plan}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planes;
