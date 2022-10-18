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
// import Checkout from "./components/pages/Checkout";
import User from "./components/pages/User/User";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="recover-password" element={<GetPasswordPage />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="product/detail/" element={<ProductDetail />} />
        <Route path="shopping-basket" element={<ShoppingBasket />} />
        <Route path="/user">
          <Route path=":userUID" element={<User />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
