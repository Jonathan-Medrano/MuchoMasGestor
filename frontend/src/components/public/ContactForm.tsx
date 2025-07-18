import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-25 items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-40 w-full gap-3">
        <b className="text-4xl">Contáctanos</b>
        <span className="">
          Aquí puedes encontrar todos los canales disponibles mediante los
          cuales nos puedes contactar.
        </span>
        <div className="flex flex-col gap-2 justify-center items-center">
          <b className="">
            <i className="bi bi-geo-alt pr-1"></i>
            Dirección
          </b>
          <Link
            to={
              "https://www.google.com/maps?q=2400,+San+Francisco,+,+Argentina"
            }
            target="_blank"
            className="text-sm text-black pb-1"
            style={{ textDecoration: "none" }}
          >
            <div className=" hover:text-cyan-800">
              2400 San Francisco, Córdoba, Argentina
            </div>
          </Link>
        </div>
      </div>
      <Form className="flex flex-col items-center justify-center w-full gap-3">
        <b className="text-4xl">Mándanos un Mensaje</b>
        <span className="">
          Llena todos los campos y envía tu mensaje. Te responderemos a la
          brevedad posible.
        </span>
        <div className="flex flex-col gap-3 w-[65vw]">
          <div className="flex flex-row gap-5 w-100">
            <div className="flex flex-col flex-1">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                required
                type="email"
                className="h-14 text-start !bg-gray-100 focus:!bg-white text-black !border-1 !border-gray-200 !transition-colors !duration-300"
              />
            </div>
            <div className="flex flex-col flex-1">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                required
                type="text"
                className="h-14 text-start !bg-gray-100 focus:!bg-white text-black !border-1 !border-gray-200 !transition-colors !duration-300"
              />
            </div>
            <div className="flex flex-col flex-1">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                className="h-14 text-start !bg-gray-100 focus:!bg-white text-black !border-1 !border-gray-200 !transition-colors !duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <Form.Label>Mensaje *</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={6}
              className=" text-start !bg-gray-100 focus:!bg-white text-black !border-1 !border-gray-200 !transition-colors !duration-300"
              style={{ resize: "none" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-gray-500">* Campos Obligatorios</span>
            <Button
              type="submit"
              className="w-35 p-2"
              style={{ borderRadius: "100px" }}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Form>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <b className="text-4xl">Visítanos</b>
        <div className="w-75">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps?q=2400,+San+Francisco,+,+Argentina&output=embed"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[10px]"
          />
        </div>
      </div>
    </div>
  )
}
