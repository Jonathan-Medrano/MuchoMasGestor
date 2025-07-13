import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage/HomePage";
// import ProductsPage from "../pages/ProductsPage";
// import ContactPage from "../pages/ContactPage";
// import AdminLogin from "../pages/AdminLogin";
// import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/inicio" element={<HomePage />} />
      {/* <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />

       Rutas admin 
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
    </Routes>
  );
}
