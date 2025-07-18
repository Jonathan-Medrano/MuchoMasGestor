export default function InfoTienda() {
  return (
    <div className="h-30 border-b-1 border-gray-200 flex flex-row justify-center items-center gap-5 px-4">
      <div className="flex flex-row gap-2 max-w-75">
        <i className="bi bi-truck text-3xl"></i>
        <div className="flex flex-col gap-0.5">
          <b className="text-sm">Envío a Todo el País</b>
          <span className="text-xs">
            ¡Obtén tus productos estés donde estés!
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-2 max-w-75">
        <i className="bi bi-credit-card text-3xl"></i>
        <div className="flex flex-col gap-0.5">
          <b className="text-sm">Métodos de Pago</b>
          <span className="text-xs">Aceptamos transferencia o efectivo.</span>
        </div>
      </div>
      <div className="flex flex-row gap-2 max-w-75">
        <i className="bi bi-headset text-3xl"></i>
        <div className="flex flex-col gap-0.5">
          <b className="text-sm">¿Tienes Preguntas?</b>
          <span className="text-xs">
            Contáctanos por nuestras redes y resolvemos tus dudas.
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-2 max-w-75">
        <i className="bi bi-patch-check text-3xl"></i>
        <div className="flex flex-col gap-0.5">
          <b className="text-sm">Calidad de Productos Garantizada</b>
          <span className="text-xs">
            ¡Todos nuestros productos son de calidad importada. Ante cualquier
            altercado nos podes informar!
          </span>
        </div>
      </div>
    </div>
  )
}
