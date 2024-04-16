import React from "react";

const Planes = ({ language }) => {
  const translations = {
    en: {
      title: "Plans and prices",
      free: "Free",
      free_desc:
        "Our free plan offers you access to basic features at no cost, along with regular updates and an ad-free experience!",
      create_tournaments: "Create tournaments",
      create_trainings: "Create trainings",
      connect: "Connect with other players",
      free_price: "0€",
      pro: "Pro",
      pro_desc:
        "With our Pro plan, you'll enjoy the freedom to create tournaments with unlimited teams and to add up to 6 coaches for your club.",
      pro_tournaments: "Unlimited teams",
      pro_trainings: "Up to 6 coaches",
      pro_price_1: "49€",
      pro_price_2: "/month",
      premium: "Premium",
      premium_desc:
        "With our Premium plan, enjoy unlimited tournaments and coaches, and access sports license management and federal ranking for comprehensive tracking of your sports activity.",
      premium_tournaments: "Unlimited tournaments",
      premium_trainings: "Unlimited coaches",
      premium_licenses: "License management",
      premium_price_1: "99€",
      premium_price_2: "/month",
      get_started: "Let's get started!",
      not_sure: "Not sure?",
      contact_us: "Get in touch with us for a personalized plan.",
      custom_plan: "I want a customized plan.",
    },
    es: {
      title: "Planes y precios",
      free: "Gratis",
      free_desc:
        "¡Nuestro plan gratuito te ofrece acceso a funciones básicas sin costo alguno, junto con actualizaciones regulares y una experiencia sin publicidad!",
      create_tournaments: "Crear torneos",
      create_trainings: "Crear entrenamientos",
      connect: "Conectar con otros jugadores",
      pro: "Pro",
      pro_desc:
        "Con nuestro plan Pro, disfrutarás de la libertad de crear torneos con numeros illimitados de equipos y de poder añadir hasta 6 entrenadores para tu club.",
      pro_tournaments: "Equipos illimitados",
      pro_trainings: "Hasta 6 entrenadores",
      pro_price_1: "49€",
      pro_price_2: "/mes",
      premium: "Premium",
      premium_desc:
        "Con nuestro plan Premium, disfruta de un numero illimitado de torneos y coaches y accede a la gestión de licencias deportivas y al ranking federal para un seguimiento completo de tu actividad deportiva.",
      premium_tournaments: "Torneos illimitados",
      premium_trainings: "Entrenadores illimitados",
      premium_licenses: "Gestión de licencias",
      premium_price_1: "99€",
      premium_price_2: "/mes",
      get_started: "¡Empecemos!",
      not_sure: "¿No lo tienes claro?",
      contact_us: "Ponte en contacto con nosotros para un plan personalizado.",
      custom_plan: "Quiero un plan personalizado",
    },
  };

  return (
    <div className="bg-beachliga_bg_grey" id="precios">
      <div className="max-w-[1200px] mx-auto pt-6 pb-24 px-12">
        <h2 className="text-5xl text-beachliga_blue font-[400] mb-10">
          {translations[language].title}
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between mb-20">
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[640px] justify-between px-8 py-10 border-2 border-beachliga_lightgrey rounded-3xl bg-white mb-12 lg:mb-0">
            <div>
              <h3 className="text-4xl font-semibold mb-6">
                {translations[language].free}
              </h3>
              <p className="mb-6 text-lg font-[400]">
                {translations[language].free_desc}
              </p>
              <div className="space-y-2 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].create_tournaments}
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].create_trainings}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <img
                    src="./assets/check_black.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_black"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].connect}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line1.png" className="mb-6" alt="line_1" />
              <h2 className="text-5xl font-[400] mb-6">
                {translations[language].free_price}
              </h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-black text-white py-3 rounded-full font-[500] text-lg">
                  <a
                    href="https://onelink.to/x7v9kz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {translations[language].get_started}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[640px] justify-between px-8 py-10 border-2 border-beachliga_blue_border rounded-3xl bg-beachliga_lightblue text-beachliga_blue  mb-12 lg:mb-0">
            <div>
              <h3 className="text-4xl font-semibold mb-6">
                {translations[language].pro}
              </h3>
              <p className="mb-6 text-lg font-[400]">
                {translations[language].pro_desc}
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].pro_tournaments}
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_lightblue.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_lightblue"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].pro_trainings}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line2.png" className="mb-6" alt="line_2" />
              <h2 className="text-5xl font-[400] mb-6">
                {translations[language].pro_price_1}
                <span className="text-3xl">
                  {translations[language].pro_price_2}
                </span>
              </h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-beachliga_blue text-white py-3 rounded-full font-[500] text-lg">
                  <a
                    href="https://onelink.to/x7v9kz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {translations[language].get_started}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[340px] xl:w-[340px] lg:w-[300px] h-[640px] justify-between px-8 py-10 rounded-3xl bg-beachliga_blue text-white">
            <div>
              <h3 className="text-4xl font-semibold mb-6">
                {translations[language].premium}
              </h3>
              <p className="mb-6 text-lg">
                {translations[language].premium_desc}
              </p>
              <div className="space-y-2 text-lg">
                <div className="flex items-center">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].premium_tournaments}
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].premium_trainings}
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="./assets/check_white.png"
                    className="w-[18px] h-[14px] mr-4"
                    alt="check_white"
                  />
                  <div className="text-xl font-[500]">
                    {translations[language].premium_licenses}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/line3.png" className="mb-6" alt="line_3" />
              <h2 className="text-5xl font-[400] mb-6">
                {translations[language].premium_price_1}
                <span className="text-3xl">
                  {translations[language].premium_price_2}
                </span>
              </h2>
              <div className="flex justify-center">
                <button className="w-[290px] bg-white text-beachliga_blue py-3 rounded-full font-[500] text-lg">
                  <a
                    href="https://onelink.to/x7v9kz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {translations[language].get_started}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            src="./assets/question_mark.png"
            className="mr-12 w-[80px] h-[90px]"
            alt="question_mark"
          />
          <div className="flex flex-col">
            <h3 className="text-beachliga_yellow text-2xl max-w-[600px] font-[400] mb-6">
              <span className="text-3xl font-[600]">
                {translations[language].not_sure}
              </span>
              <br /> {translations[language].contact_us}
            </h3>
            <button className="bg-beachliga_yellow w-[200px] md:w-[350px] text-white py-3 px-4 rounded-full font-[400] text-lg">
              <a
                href="https://onelink.to/x7v9kz"
                target="_blank"
                rel="noreferrer"
              >
                {translations[language].custom_plan}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
