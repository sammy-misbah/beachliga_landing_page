import React from "react";

const Footer = () => {
  return (
    <div className="bg-beachliga_grey p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <img src="./assets/linkedin.png" />
        <div className="flex mr-[10px] text-white space-x-12 text-md">
          <div>Términos y Condiciones</div>
          <div>Contacta con nosotros</div>
          <div>Inversores</div>
          <div>Noticias</div>
          <div>Beach Liga</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
