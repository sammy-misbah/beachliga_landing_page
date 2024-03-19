import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-beachliga_blue h-14">
      <div className=" flex container mx-auto items-center justify-between">
        <img
          src="./assets/vector_logo.png"
          className="w-20"
          alt="vector-logo"
        />
        <div className="space-x-12 text-white font-body text-sm">
          <a href="/">Título</a>
          <a href="/">Título</a>
          <a href="/">Título</a>
          <a href="/">Título</a>
          <a href="/">Título</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
