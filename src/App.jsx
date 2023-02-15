import "./index.css";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./pages/Navbars";
import { Route, Routes } from "react-router-dom";
import ViewProduct from "./pages/ViewProduct";
import BuyingProduct from "./pages/BuyingProduct";
import HomePage from "./pages/Admin/HomePage";
import ViewProductAdmin from "./pages/Admin/ViewProductAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/viewProduct/:id" element={<ViewProduct />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/buyingProduct/:id" element={<BuyingProduct/>} />
      <Route path="/admin/" element={<HomePage/>} />
      <Route path="/admin/viewProduct" element={<ViewProductAdmin/>}/>
    </Routes>
  );
}

export default App;
