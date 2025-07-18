import ProductCard from "./ProductCard"

const products = [
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
    place: "destacados" as const,
  },
  {
    price: 6500,
    title: "auris a6s",
    place: "destacados" as const,
  },
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
    place: "destacados" as const,
  },
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
    place: "destacados" as const,
  },
]

export default function EspecialProducts() {
  return (
    <div className=" bg-gray-950 flex flex-col justify-start items-center p-4">
      <span className="text-xs text-white pb-2">NUESTROS FAVORITOS</span>
      <span className="text-3xl text-white pb-4 font-bold">
        Productos Destacados
      </span>
      <div className="flex flex-row gap-3">
        {products.map((product, i) => (
          <ProductCard product={product} key={`featured-product-${i}`} />
        ))}
      </div>
    </div>
  )
}
