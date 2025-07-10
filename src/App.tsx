import { Routes, Route } from "react-router-dom";
import UserPage from "./pages";
import Products from "./pages/products";
import NavBar from "./pages/user/components/navbar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
