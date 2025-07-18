import MuchoMasLogo from "../../assets/img/logoMuchoMas.png"
import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavBarPublic() {
  return (
    <div className="fixed top-0 bg-white left-0 z-50  flex flex-col items-center justify-center w-full gap-3 pb-2 pt-3 border-b-1 border-gray-200">
      <div className="flex items-center justify-center gap-50">
        <div className="self-center text-center flex flex-row gap-3 flex-1">
          <i className="bi bi-list block"></i>
          <div className="flex flex-row">
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
        <div className="flex-1 flex items-center">
          <img src={MuchoMasLogo} alt="" className="w-35" />
        </div>
        <div className="self-center text-center flex-1">
          <i className="bi bi-cart" onClick={() => alert("apretado")}></i>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="text-black border-b-2 border-transparent hover:border-black transition-colors duration-600"
        >
          Inicio
        </Link>
        <Link
          to={"/categorias"}
          style={{ textDecoration: "none" }}
          className="text-black border-b-2 border-transparent hover:border-black transition-colors duration-600"
        >
          Categorias
        </Link>
        <Link
          to={"/contacto"}
          style={{ textDecoration: "none" }}
          className="text-black border-b-2 border-transparent hover:border-black transition-colors duration-600"
        >
          Contacto
        </Link>
      </div>
    </div>
  )
}
