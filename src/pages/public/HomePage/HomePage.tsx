import React from "react";
import NavBarPublic from "../../../components/public/NavbarPublic";
import Footer from "../../../components/public/Footer";
import Hero from "../../../components/public/Hero";
import InfoTienda from "../../../components/public/InfoTienda";
import EspecialProducts from "../../../components/public/EspecialProducts";
import LastProducts from "../../../components/public/LastProducts";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen select-none">
      <NavBarPublic />
      <Hero />
      <InfoTienda />
      <EspecialProducts />
      <LastProducts />
      <Footer />
    </div>
  );
}
