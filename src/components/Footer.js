import React from "react";

const Footer = () => {
  return (
    <div className="bg-beachliga_grey p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <a
          href="https://www.linkedin.com/company/revel-cool/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/linkedin.png" />
        </a>
        <div className="flex mr-[10px] text-white lg:space-x-12 lg:text-md flex-col">
          <div>
            <a href="/terms">Términos y Condiciones</a>
          </div>
          <div>Contacta con nosotros</div>
          <div>Inversores</div>
          <div>Noticias</div>
          <div>Beach Liga</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
