import "./index.css";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import ViewProduct from "./pages/ViewProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/viewProduct/:id" element={<ViewProduct/>} />
    </Routes>
  );
}

export default App;
