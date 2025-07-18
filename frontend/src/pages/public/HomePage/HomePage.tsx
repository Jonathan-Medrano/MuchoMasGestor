import Hero from "../../../components/public/Hero"
import InfoTienda from "../../../components/public/InfoTienda"
import EspecialProducts from "../../../components/public/EspecialProducts"
import LastProducts from "../../../components/public/LastProducts"

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <InfoTienda />
      <EspecialProducts />
      <LastProducts />
    </div>
  )
}
