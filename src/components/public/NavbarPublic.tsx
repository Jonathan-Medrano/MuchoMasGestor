import React from "react";
import MuchoMasLogo from "../../assets/img/logoMuchoMas.png";
import { Form } from "react-bootstrap";

export default function NavBarPublic() {
  return (
    <div className="w-screen bg-white h-20 flex items-center justify-center border-b-1 border-gray-200">
      <div
        className="self-center text-center flex flex-row gap-3"
        style={{ maxWidth: "400px" }}
      >
        <i className="bi bi-list block"></i>
        <div className="flex flex-row self-center gap-4">
          <i className="bi bi-search"></i>
          <Form.Control
            type="text"
            id="searchText"
            className="border-0 border-b-100 w-8"
            placeholder="Busque productos aquí..."
            aria-describedby="passwordHelpBlock"
          />
        </div>
      </div>
      <div
        className="self-center flex justify-center"
        style={{ minWidth: "400px" }}
      >
        <img src={MuchoMasLogo} alt="" className="w-35" />
      </div>
      <div className="self-center text-center" style={{ minWidth: "400px" }}>
        <i className="bi bi-cart" onClick={() => alert("apretado")}></i>
      </div>
    </div>
  );
}
