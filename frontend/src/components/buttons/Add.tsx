export default function Add({
  add,
  currentAmount,
  place,
  stock,
}: {
  add: () => void
  currentAmount: number
  place: string
  stock: number
}) {
  return (
    <button
      className={`pl-1.5 pr-1 py-0.5 flex justify-center items-center rounded-circle hover:bg-gray-300 ${
        place === "destacados"
          ? "text-white hover:bg-gray-900"
          : "text-black hover:bg-gray-300"
      }`}
    >
      <i
        className={` bi bi-plus-circle hover:cursor-pointer`}
        onClick={() => {
          if (currentAmount === stock) return
          add()
        }}
      ></i>
    </button>
  )
}
