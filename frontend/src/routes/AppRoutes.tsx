import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/public/HomePage/HomePage"
import Contact from "../pages/public/Contact/Contact"
import PublicLayout from "../layouts/PublicLayout"
// import ProductsPage from "../pages/ProductsPage";
// import ContactPage from "../pages/ContactPage";
// import AdminLogin from "../pages/AdminLogin";
// import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contact />} />
        {/*  <Route path="/products" element={<ProductsPage />} /> */}
      </Route>

      {/* Rutas admin 
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
    </Routes>
  )
}
