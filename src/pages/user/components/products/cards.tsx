import React from "react";

export default function Card() {
  return (
    <div className="border-2 flex flex-col rounded-2xl bg-white pb-2">
      <img
        src="https://images.fravega.com/f1000/7e573b39ebab4b6fc29a04d7fa72ed3b.png"
        alt=""
      />
      <div>
        <div>
          <h2 className="text-2xl">Auricular Inalambrico A6s</h2>
        </div>
        <div className="flex flex-col gap-1 pl-2">
          <p className="text-1xl">Precio: 15</p>
          <p className="text-1xl">Stock: 15</p>
          <p className="text-1xl">Proveedores: 15</p>
        </div>
      </div>
    </div>
  );
}
