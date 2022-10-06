import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ShoppingList from "./components/pages/ShoppingList";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route index path="/" element={<Navigate to="home" />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shopping-list" element={<ShoppingList />} />
      </Routes>
      {/* <AboutPage /> */}
      {/* <ShoppingList /> */}
    </div>
  );
}

export default App;
