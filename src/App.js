import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ProductDetailPage from "./pages/productDetailPage/productDetailPage";
import ProductsPage from "./pages/productsPage/productsPage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='productdetail' element={<ProductDetailPage />} />
      <Route path='products' element={<ProductsPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
