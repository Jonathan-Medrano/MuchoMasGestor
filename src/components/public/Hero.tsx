import React from "react";
import HeroEjemplo from "../../assets/img/HeroEjemplo.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="h-96 w-screen">
      <div
        className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center group:"
        style={{ backgroundImage: `url(${HeroEjemplo})` }}
      >
        <div
          className="absolute inset-0 bg-black opacity-30 hover:cursor-pointer"
          onClick={() => navigate("/catalogo")}
        ></div>

        <div
          className="relative z-10 flex flex-col justify-center items-center  hover:cursor-pointer"
          onClick={() => navigate("/catalogo")}
        >
          <span className="text-white text-xs text-center">
            CALIDAD, PRECIO Y ATENCIÓN PERSONALIZADA
          </span>
          <h1 className="text-white text-2xl text-center pt-1">MUCHO MÁS</h1>
          <span className="text-white text-sm text-center">
            Tu tienda de electrónica confiable y accesible. Hacemos envíos a
            todo el país.
          </span>
          <a
            className="w-40 p-2 mt-4 flex flex-row items-center justify-center gap-1 text-sm bg-white text-black rounded-[15px] group-hover:gap-3 transition-all duration-300 hover:cursor-pointer"
            onClick={() => navigate("/catalogo")}
            style={{ textDecoration: "none" }}
          >
            <span>Ir al Catálogo</span>
            <i className="bi bi-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
