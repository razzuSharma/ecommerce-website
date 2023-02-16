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
import UpdateData from "./pages/Admin/UpdateData";
import Auth from "./pages/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Auth><Product /></Auth>} />
      <Route path="/viewProduct/:id" element={<ViewProduct />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/buyingProduct/:id" element={<BuyingProduct/>} />
      <Route path="/admin/" element={<Auth><HomePage/></Auth>} />
      <Route path="/admin/update/:id" element={<Auth><UpdateData/></Auth>}/>

    </Routes>
  );
}

export default App;
