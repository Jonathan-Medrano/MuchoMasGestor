import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
