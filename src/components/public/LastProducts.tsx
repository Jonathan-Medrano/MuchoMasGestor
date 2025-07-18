import React from "react";
import ProductCard from "./ProductCard";

export default function LastProducts() {
  return (
    <div className="w-screen flex flex-col justify-center pt-12 items-center">
      <b className="text-black text-3xl pb-12">Ultimos Productos</b>
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
