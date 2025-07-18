import ProductCard from "./ProductCard"

const products = [
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
  },
  {
    price: 6500,
    title: "auris a6s",
  },
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
  },
  {
    price: 6500,
    title: "auris a6s",
    discount: 4500,
    place: "normal" as const,
  },
]

export default function LastProducts() {
  return (
    <div className="w-full flex flex-col justify-center pt-12 items-center px-4">
      <b className="text-black text-3xl pb-12">Ultimos Productos</b>
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        {products.map((product, i) => (
          <ProductCard product={product} key={`normal-product-${i}`} />
        ))}
      </div>
    </div>
  )
}
