export default function Subtract({
  subtract,
  currentAmount,
  place,
}: {
  subtract: () => void
  currentAmount: number
  place: string
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
        className={` bi bi-dash-circle hover:cursor-pointer`}
        onClick={() => {
          if (currentAmount === 1) return
          subtract()
        }}
      ></i>
    </button>
  )
}
