import React from "react";
import NavBarPublic from "../../../components/public/NavbarPublic";
import Footer from "../../../components/public/Footer";
import ContactForm from "../../../components/public/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen w-screen select-none">
      <NavBarPublic />
      <ContactForm />
      <Footer />
    </div>
  );
}
