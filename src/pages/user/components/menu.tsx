import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import logoMuchoMas from "../../../assets/img/logoMuchoMas.png";

interface Props {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ activeMenu, setActiveMenu }: Props) {
  return (
    <div
      className={`
    fixed top-0 left-0 h-screen w-100 bg-white z-50 
    transform transition-transform duration-300 ease-in-out
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
    </div>
  );
}
