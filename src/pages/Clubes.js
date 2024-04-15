import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clubes = () => {
  return (
    <div
      className="relative bg-white overflow-hidden text-gray-800"
      style={
        {
          // background: "linear-gradient(180deg,#6051E8  5.76%, #D44FDD 87.98%)",
          // backgroundImage: "url(./assets/gradient_2.jpg)",
          // backgroundSize: "100% 100%",
        }
      }
    >
      <Navbar />
      {/* <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div> */}
      <div className="pt-6 lg:pt-24 lg:pb-0 px-6 lg:px-12 max-w-[1200px] mx-auto relative z-10">
        <h3 className="text-center text-2xl lg:text-4xl font-[400] mb-6 lg:mb-10 mt-12">
          Clubes y organizaciónes
        </h3>
        <h2 className="text-center text-4xl lg:text-6xl mx-auto font-[500] mb-16 lg:mb-28">
          Gestiona de manera sencilla los eventos de tu Club
        </h2>
        <div className="flex items-center lg:items-start lg:flex-row flex-col-reverse mb-24">
          <div className="lg:w-1/2 lg:pr-12">
            <h4 className="text-3xl lg:text-4xl font-[500] mb-10">
              Con Beachliga, crear los eventos de tu Club y gestionar los
              miembros nunca ha sido tan facil.
            </h4>
            <h5 className="text-xl font-[500] mb-1">
              Crea y organiza eventos.
            </h5>
            <p className="text-md  mb-4">
              En solo 2 minutos, podras crear los eventos y entrenamientos de tu
              club y permitir a los jugadores de apuntarse a través de nuestra
              plataforma segura.
            </p>
            <h5 className="text-xl font-[500] mb-1">
              Gestiona los miembros y alumnos del club.
            </h5>
            <p className="text-md  mb-4">
              Con Beachliga, podras ver en cada momento el estado de tus eventos
              y de tus entrenamientos: numero de jugadores, estado de pago,
              asistencia y mucho mas.
            </p>
            <h5 className="text-xl font-[500] mb-1">Reserva de pistas</h5>
            <p className="text-md  mb-4">
              Tu club dispone de varias pistas y te gustaria alquilar algunas?
              Con beachliga, puedes dar la oportunidad a los jugadores de
              reservar un campo de forma gratis o pagando.
            </p>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img src="./assets/qr_torneo.png" className="rounded-xl" />
          </div>
        </div>
      </div>
      {/* <h2 className="text-center text-5xl mx-auto font-[500] mb-24">
          Funciones que te ahorrarán <br />
          horas de tu valioso tiempo
        </h2> */}
      <div className="max-w-[1200px] mx-auto  px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32">
          <div className="lg:w-1/2 flex lg:justify-center">
            <img src="./assets/app.png" className="rounded-[50px] shadow-2xl" />
          </div>
          <div className="lg:w-1/2 flex flex-col text-xl lg:text-[28px] font-[400]">
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>Creación de torneos y entrenamientos en 2 clics</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>Gestión de pagos sencilla y segura</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>Sistema de reserva de pistas</h4>
            </div>
            <div className="flex pt-8 items-start lg:items-center">
              <img
                src="./assets/check_black.png"
                className="w-6 h-6 lg:h-8 lg:w-8 mr-4 pt-2"
              />
              <h4>Resultados en tiempo real</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-beachliga_grey text-white  px-6 lg:px-12">
        <div className="flex flex-col mb-32 py-16 max-w-[1200px] mx-auto">
          <div className="text-3xl lg:text-4xl italic text-center">
            <div className="flex justify-center mb-6">
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
              <img src="./assets/star.png" className="w-[30px]" />
            </div>
            <div className="mb-12">
              "BeachLiga es la App perfecta para gestionar nuestros torneos y
              grupos de entrenamientos"
            </div>
          </div>
          <div className="text-2xl flex justify-end">
            Simone, Encargado del BeachBol
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-24  px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 items-center mb-12">
              <img
                src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhnp58zMw4M628+w9eiLYx4kFq4Mq2poSR3GmltIvn1W3P8Gj76YbEWsmo2gmRwSIrCIUAj52bLxqLpq5a2VT6sSqx326Ga+Ytq2t0r5ymZuNU8Us+hs7pATd9vmLXoLX3l9cXstaVo+aF0naIFqhIiNOY9Ih3Bzao2ckJsGhJ6cg06RkKuYmYqTdat1V2CgqYCEvmcnkma0vLG0bq2ro7rFsLjCqooPtWHExs+uuhrHzM1Hz9bCzNlqz6yZpdmjqOTQ5azW3djV7pfIsZPTwbvvxtD19Pzxw736uvLlJAZPHONRkITtK/dfu09ZM37V46fxRbmBNVkR3AjP8KOf7jV+4eQziGMl6U6E5cGj9x1p30hkulGZYrub309a4gH2o78xXyeejmTpozbT40SBRkTScE620z+YypVItRjQL1ODUrvnZXISJFqDXsU69jv4Y967Iq1K5iey712jGi27l0oZmVixNc3b09R65qyDdwUawJPwo+HPOuRsCIGW+EG7TkEHOMjvrVK1kH5VcFL28dWmRzLstgf77VTHr0OM+mB09OTRa2QdEyHcdVnHY1Sd05H3/myTZ3593De9sWSFgx7dmyl7e+DZxrcZnR7RKFLhJsdYyQV/G57Xl7StyRWyIv/Le8sO6Yzad/j779evLeM4dHCfP0ROrj7+f/P9jUd8T5lpRa8lmnnmvMoVJgcAPut6B+sjUonW/caSSgcZwByF6ECNbnXm0bZhjfZ+BZVSGFdi1X3YlrpZigUC2eZyKNZbUmI3550ddhWeIlxqKOFgop3JAhKucQb/w5CN9vzRno4Y86ZZfchUXiKKRQ9KiIXT5BAkllj/2h6NSYvd1II5YM2niUUis+6SWRCw1YZI7/PZcmmyHFued0SCrJY40avsihh136CaGbdbYJZ4UznskooJWt2aSKJBqaFYSsPTgXnlNpWhqnbnkqFajJqdkXnZmGKShehS56p6qQUuoqmoQ+KuKsOx5XZZI7KirqroYxGRugwOpK4LAw/zb5paO+fkhVn4hF6qy0qJYJ5rQ+judmt88KBuuUfIo7n7ZvjntuteQWau622aqb7qtoYapauVBaOa9zMd77LatO6AviuuFC25ak+7LlLa1MAXygu/BKqaCpS/7KLbXYpnrqwRS/G++1Wo7YKLsWezwyyMZWbG2wIit8LZeyFivsrf0aTMTHGcuMLsOopXwzzPHi+2nJPf+5LtClCt3hwCSzbPKySZNpa7Tw+uf0Yi8HuuXVuGINNZSTTq2d13oKHNqzVF+cLM5Vf4121ESn7fPZWQ+dKKsOGxlz3HM2NbfelY4NN9d08xsr36EOrvDdLpZYd+KdHn7gpgGijPHTAT+j/W9mdEkeOeQYUg7a0KQKXivol0pMr+WlJ6aV4irzmuu8hA7ceNH+lo3wzHmnzrvsriMLe+/5Ev6w3RbfUAAAOw=="
                className="w-[100px] xl:w-[135px]"
                alt="qr-code"
              />
              <div className="text-xl lg:text-3xl ">
                Bájate
                <br /> BeachLiga
                <br /> al movil.
                <br /> Es gratis.
              </div>
            </div>
            <div className="flex space-x-6 mb-12">
              <img src="./assets/apple.png" className="w-[200px]" />
              <img src="./assets/google_play.png" className="w-[200px]" />
            </div>
          </div>
          {/* <h3 className="text-6xl font-[500] mb-12">
            Regístrate en <br />
            solo 1 minuto
          </h3> */}
          <div className="hidden lg:flex w-1/2 justify-center">
            <img
              src="./assets/app_photo.png"
              className="app-transform rounded-[100%] w-[400px] h-[400px] "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clubes;