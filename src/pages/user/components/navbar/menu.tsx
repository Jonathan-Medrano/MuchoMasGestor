import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import logoMuchoMas from "../../../../assets/img/logoMuchoMas.png";
import { Link } from "react-router-dom";

interface Props {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ activeMenu, setActiveMenu }: Props) {
  return (
    <div
      className={`
    fixed top-0 left-0 h-screen w-100 bg-white z-50 
    transform transition-transform duration-300 ease-in-out flex flex-col
    ${activeMenu ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="flex flex-row self-center h-10 w-screen justify-between pt-3 ps-2 pe-4">
        <img src={logoMuchoMas} alt="Logo Mucho+" className="h-9 self-center" />
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setActiveMenu(false)}
          className="self-center border-b-black"
        />
      </div>
      <div className="w-screen flex flex-col pt-4 pl-4 gap-2">
        <Link to={"/productos"} onClick={() => setActiveMenu(false)}>
          {<b>Productos</b>}
        </Link>
        <Link to={"/"} onClick={() => setActiveMenu(false)}>
          <b>Ventas</b>
        </Link>
        <Link to={"/"} onClick={() => setActiveMenu(false)}>
          <b>Simulador de Ventas</b>
        </Link>
      </div>
    </div>
  );
}
