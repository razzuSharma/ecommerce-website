import "./index.css";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
