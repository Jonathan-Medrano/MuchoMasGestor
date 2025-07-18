import MuchoMasLogo from "../../assets/img/logoMuchoMas.png"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <div className="mt-15 w-full bg-white h-40 flex flex-col items-center justify-center border-t-1 border-gray-200 gap-4 pt-15">
      <div className=" border-b-1 border-gray-200 flex flex-row gap-38 pb-5">
        <div>
          <img src={MuchoMasLogo} alt="" className="w-35" />
        </div>
        <div className="flex flex-col self-start">
          <b className="text-sm pb-2">Categorías</b>
          <Link
            to={""}
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">Catálogo</div>
          </Link>
          <Link
            to={""}
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">Contacto</div>
          </Link>
        </div>
        <div className="flex flex-col self-start">
          <b className="text-sm pb-2">Información</b>
          <Link
            to={""}
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">Términos y Condiciones</div>
          </Link>
          <Link
            to={""}
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">Politica de reembolso</div>
          </Link>
          <Link
            to={""}
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">Politica de privacidad</div>
          </Link>
        </div>
        <div className="flex flex-col self-start">
          <b className="text-sm pb-2">Contáctanos</b>
          <Link
            to={
              "https://www.google.com/maps?q=2400,+San+Francisco,+,+Argentina"
            }
            target="_blank"
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">
              <i className="bi bi-geo-alt pr-1"></i>
              2400 San Francisco Córdoba - Argentina
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-1 text-sm pb-3">
        <i className="bi bi-c-circle"></i>
        {new Date().getFullYear()} Mucho Mas. Todos los derechos reservados.
      </div>
    </div>
  )
}
