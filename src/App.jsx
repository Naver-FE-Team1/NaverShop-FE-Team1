import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ShoppingList from "./components/pages/ShoppingList";
import ShoppingBasket from "./components/pages/ShoppingBasket/ShoppingBasket";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import SignInPage from "./components/pages/Authentication/SignIn/SignInPage";
import SignUpPage from "./components/pages/Authentication/SignUp/SignUpPage";
import GetPasswordPage from "./components/pages/Authentication/GetPasswordPage/GetPasswordPage";
import { AuthProvider } from "./contexts/auth-context";
import User from "./components/pages/User/User";
import Checkout from "./components/pages/Checkout";
import NotFound from "./components/pages/NotFound/NotFound";
import PrivateRoute from "./Routes/PrivateRoute";
import Header from "./components/organisms/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="recover-password" element={<GetPasswordPage />} />
        <Route path="products" element={<ShoppingList />} />
        <Route path="products/detail/:id" element={<ProductDetail />} />
        <Route path="shopping-basket" element={<ShoppingBasket />} />
        <Route path="/user" element={<User />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
