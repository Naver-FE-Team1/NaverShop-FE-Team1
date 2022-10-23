import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import RouterView from "./router/router";
import { handelRecursion } from "./router/type";
import Loader from "./components/pages/Loader/Loader";

// import Checkout from "./components/pages/Checkout";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {RouterView.map((router, index) => {
            return (
              <Route
                key={index}
                path={router.path}
                element={<router.element />}
              >
                {handelRecursion(router)}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
      {/* nhathung code
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="recover-password" element={<GetPasswordPage />} />
        <Route path="products" element={<ShoppingList />} />
        <Route path="products/detail/:id" element={<ProductDetail />} />
        <Route path="shopping-basket" element={<ShoppingBasket />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
