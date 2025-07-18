import Add from "@components/buttons/Add"
import Subtract from "@components/buttons/Subtract"
import { useState } from "react"

type Props = {
  product: {
    title: string
    price: number
    discount?: number
    place?: "destacados" | "normal"
    stock: number
  }
}

export default function ProductCard({ product }: Props) {
  const place = product.place ?? "normal"
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectCant, setSelectCant] = useState<number>(1)

  const colors = [
    { name: "Rojo", value: "#ef4444" },
    { name: "Verde", value: "#22c55e" },
    { name: "Azul", value: "#3b82f6" },
    { name: "Amarillo", value: "#eab308" },
  ]

  return (
    <article
      className="bg-transparent border-0 max-w-70"
      style={{
        letterSpacing: " 1.25px",
      }}
    >
      <img
        src="https://images.fravega.com/f1000/7e573b39ebab4b6fc29a04d7fa72ed3b.png"
        className="rounded-lg"
        alt="Producto"
      />
      <p className="bg-transparent p-0 pt-2 flex flex-col gap-2">
        <b
          className={`${place === "destacados" ? "text-white" : "text-black"}`}
        >
          {product.title}
        </b>
        {product.discount ? (
          <div className="flex flex-col gap-0">
            <p
              className={`${
                place === "destacados" ? "text-red-500" : "text-red-600"
              } font-bold m-0`}
            >
              {product.discount}
            </p>
            <p className="text-gray-500 text-xs line-through m-0 ">
              {product.price}
            </p>
          </div>
        ) : (
          <p
            className={`${
              place === "destacados" ? "text-white" : "text-black"
            } `}
          >
            {product.price}
          </p>
        )}
        {colors.length > 0 && (
          <section className="flex flex-row gap-2">
            {colors.map((color) => {
              let colorClasses = "border-black border-1" // default

              if (selectedColor === color.value) {
                colorClasses =
                  place === "destacados"
                    ? "border-white scale-150 border-2"
                    : "border-black scale-150 border-2"
              }

              return (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.value)}
                  style={{
                    backgroundColor: color.value,
                  }}
                  className={`w-3.5 h-3.5 transition-all rounded-circle ${colorClasses}`}
                  aria-label={`Seleccionar color ${color.name}`}
                  title={color.name}
                />
              )
            })}
          </section>
        )}
        <section className="mt-2 flex flex-row gap-2">
          <div className="flex flex-row justify-between items-center flex-3 border-1 border-gray-500 px-2 py-1 rounded-full">
            <Subtract
              currentAmount={selectCant}
              place={place}
              subtract={() => setSelectCant((prev) => prev - 1)}
            />

            <span
              className={`${
                place === "destacados" ? "text-white" : "text-black"
              }`}
            >
              {selectCant}
            </span>

            <Add
              currentAmount={selectCant}
              place={place}
              add={() => setSelectCant((prev) => prev + 1)}
              stock={product.stock}
            />
          </div>
          <a
            href="#"
            className={`${
              place === "destacados"
                ? "bg-gray-50 hover:bg-gray-300 text-black"
                : "bg-blue-950 hover:bg-blue-800 text-white"
            }  p-2 flex-1 flex justify-center rounded-full`}
          >
            <i className="bi bi-cart"></i>
          </a>
        </section>
      </p>
    </article>
  )
}
