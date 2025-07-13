import React from "react";
import NavBarPublic from "../../../components/public/NavbarPublic";
import Footer from "../../../components/public/Footer";
import Hero from "../../../components/public/hero";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <NavBarPublic />
      <Hero />
      <div className="pt-20 pb-20 p-5 flex-1">
        <p>lorem*</p>
      </div>
      <Footer />
    </div>
  );
}
