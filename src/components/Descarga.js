import React from "react";

const Descarga = () => {
  return (
    <div className="bg-beachliga_blue overflow-hidden">
      <div className="max-w-[1200px] mx-auto py-24">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img src="./assets/qr_code.png" className="w-[135px] mb-6" />
            <h3 className="text-4xl text-white mb-8">¡Descarga nuestra app!</h3>
            <div className="flex space-x-12">
              <img src="./assets/google_play3.png" className="h-[50px]" />
              <img src="./assets/apple.png" className="h-[50px]" />
            </div>
          </div>
          <div className="relative w-[430px] ">
            <img
              src="./assets/wireframe_screenshot.png"
              className="absolute w-[430px] right-[100px] rounded-[35px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descarga;
