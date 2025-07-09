import logoMuchoMas from "../../../assets/img/logoMuchoMas.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex bg-white flex-row justify-between h-14">
        <div className="flex flex-row gap-2 self-center pl-2">
          <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)} />
        </div>
        <img
          src={logoMuchoMas}
          alt="Logo Mucho+"
          className="h-8 self-center"
          onClick={() => navigate("/")}
        />
        <div className="pr-4"></div>
      </div>
      <Menu setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </>
  );
}
