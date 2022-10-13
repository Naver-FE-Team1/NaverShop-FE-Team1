import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ShoppingList from "./components/pages/ShoppingList";
import ShoppingBasket from "./components/pages/ShoppingBasket/ShoppingBasket";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import SignInPage from "./components/pages/Authentication/SignIn/SignInPage";
import SignUpPage from "./components/pages/Authentication/SignUp/SignUpPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="shopping-detail" element={<ProductDetail />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="shopping-basket" element={<ShoppingBasket />} />
      </Routes>
    </div>
  );
}

export default App;
