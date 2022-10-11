import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ShoppingList from "./components/pages/ShoppingList";
import ShoppingBasket from "./components/pages/ShoppingBasket/ShoppingBasket";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import AuthenticationUserPage from "./components/pages/Authentication/AuthenticationUserPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-up" element={<AuthenticationUserPage />} />
        <Route path="shopping-detail" element={<ProductDetail />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="shopping-basket" element={<ShoppingBasket />} />
      </Routes>
    </div>
  );
}

export default App;
