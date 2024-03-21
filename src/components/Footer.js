import React from "react";

const Footer = () => {
  return (
    <div className="bg-beachliga_grey p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <img src="./assets/linkedin.png" />
        <div className="flex mr-[10px] text-white space-x-12 text-md">
          <div>Terms and Conditions</div>
          <div>Contact with us</div>
          <div>Investor notes</div>
          <div>News</div>
          <div>Beach Liga</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
