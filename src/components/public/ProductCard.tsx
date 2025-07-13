import React, { useState } from "react";

interface Props {
  place?: string;
}

export default function ProductCard({ place }: Props) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectCant, setSelectCant] = useState<number>(1);

  const colors = [
    { name: "Rojo", value: "#ef4444" },
    { name: "Verde", value: "#22c55e" },
    { name: "Azul", value: "#3b82f6" },
    { name: "Amarillo", value: "#eab308" },
  ];
  return (
    <div
      className="bg-transparent border-0 max-w-70"
      style={{
        letterSpacing: " 1.25px",
      }}
    >
      <img
        src="https://images.fravega.com/f1000/7e573b39ebab4b6fc29a04d7fa72ed3b.png"
        className="card-img-top"
        style={{ borderRadius: "15px" }}
        alt="Producto"
      />
      <div className=" bg-transparent p-0 pt-2 flex flex-col gap-2">
        <b
          className={`${place === "destacados" ? "text-white" : "text-black"}`}
        >
          Auricular A6s
        </b>
        <div className="flex flex-col gap-0">
          <p
            className={`${
              place === "destacados" ? "text-red-500" : "text-red-600"
            } font-bold m-0`}
          >
            $6.500,00
          </p>
          <p className="text-gray-500 text-xs line-through m-0 ">$6.500,00</p>
        </div>
        <div className="h-4">
          <div
            className={`${
              colors.length > 0 ? "flex flex-row gap-2" : "hidden"
            }`}
          >
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.value)}
                style={{ backgroundColor: color.value, borderRadius: "999px" }}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  selectedColor === color.value && place === "destacados"
                    ? "border-white scale-150"
                    : selectedColor === color.value && place !== "destacados"
                    ? "border-black scale-150"
                    : "border-black"
                }`}
                aria-label={`Seleccionar color ${color.name}`}
                title={color.name}
              ></button>
            ))}
          </div>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          <div
            className="flex flex-row justify-between items-center flex-3 border-1 border-gray-500 p-2"
            style={{ borderRadius: "999px" }}
          >
            <i
              className={`${
                place === "destacados" ? "text-white" : "text-black"
              } bi bi-dash-circle ml-2 hover:cursor-pointer`}
              onClick={() => {
                if (selectCant === 1) return;
                setSelectCant((prev) => prev - 1);
              }}
            ></i>
            <span
              className={`${
                place === "destacados" ? "text-white" : "text-black"
              }`}
            >
              {selectCant}
            </span>
            <i
              className={`${
                place === "destacados" ? "text-white" : "text-black"
              } bi bi-plus-circle mr-2 hover:cursor-pointer`}
              onClick={() => {
                setSelectCant((prev) => prev + 1);
              }}
            ></i>
          </div>
          <a
            href="#"
            className={`${
              place === "destacados"
                ? "bg-white text-black"
                : "bg-blue-950 text-white"
            }  p-2 flex-1 flex justify-center`}
            style={{ textDecoration: "none", borderRadius: "999px" }}
          >
            <i className="bi bi-cart"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
