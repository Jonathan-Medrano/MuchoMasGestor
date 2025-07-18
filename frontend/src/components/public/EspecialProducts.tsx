import ProductCard from "./ProductCard"

export default function EspecialProducts() {
  return (
    <div className=" bg-gray-950 flex flex-col justify-start items-center p-4">
      <span className="text-xs text-white pb-2">NUESTROS FAVORITOS</span>
      <span className="text-3xl text-white pb-4 font-bold">
        Productos Destacados
      </span>
      <div className="flex flex-row gap-3">
        <ProductCard place="destacados" />
        <ProductCard place="destacados" />
        <ProductCard place="destacados" />
        <ProductCard place="destacados" />
      </div>
    </div>
  )
}
